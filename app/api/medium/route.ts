import { NextRequest, NextResponse } from 'next/server'
import Parser from 'rss-parser'

const MEDIUM_RSS = 'https://medium.com/feed/@vincentotienoakuku'
const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 6
const MAX_LIMIT = 20

export const revalidate = 3600

// Function to generate placeholder image based on title and categories
function generatePlaceholderImage(title: string, categories: string[] = []) {
  const encodedTitle = encodeURIComponent(title)
  const colors = ['1f2937', '3b82f6', '8b5cf6', '06b6d4', '10b981', 'f59e0b', 'ef4444']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  
  return `https://via.placeholder.com/400x300/${randomColor}/ffffff?text=${encodedTitle}`
}

export async function GET(req: NextRequest) {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media'],
        ['media:thumbnail', 'thumbnail'],
        ['dc:creator', 'creator'],
        ['content:encoded', 'content:encoded'],
      ],
    },
  })

  // Pagination params
  const { searchParams } = new URL(req.url)
  const rawPage = parseInt(searchParams.get('page') || `${DEFAULT_PAGE}`, 10)
  const rawLimit = parseInt(searchParams.get('limit') || `${DEFAULT_LIMIT}`, 10)
  const page = Number.isNaN(rawPage) || rawPage < 1 ? DEFAULT_PAGE : rawPage
  const limit = Number.isNaN(rawLimit) || rawLimit < 1 ? DEFAULT_LIMIT : Math.min(rawLimit, MAX_LIMIT)
  const start = (page - 1) * limit
  const end = start + limit

  try {
    const feed = await parser.parseURL(MEDIUM_RSS)
    const items = feed.items || []

    // Map to a simpler structure with image extraction
    const posts = items.map(item => {
      // Extract thumbnail from various possible sources
      let thumbnail = null
      if (item.thumbnail) {
        thumbnail = item.thumbnail
      } else if (item['media:content'] && item['media:content'].$ && item['media:content'].$.url) {
        thumbnail = item['media:content'].$.url
      } else if (item.media && item.media.$ && item.media.$.url) {
        thumbnail = item.media.$.url
      } else if ((item as any)['content:encoded']) {
        // Extract first image from content:encoded HTML, excluding tracking pixels
        const encodedContent = (item as any)['content:encoded']
        const imgMatches = encodedContent.match(/<img[^>]+src="([^"]+)"[^>]*>/gi)
        if (imgMatches) {
          for (const imgMatch of imgMatches) {
            const srcMatch = imgMatch.match(/src="([^"]+)"/i)
            if (srcMatch && srcMatch[1]) {
              const imgUrl = srcMatch[1]
              // Skip tracking pixels and very small images
              if (!imgUrl.includes('medium.com/_/stat') && 
                  !imgUrl.includes('tracking') && 
                  !imgUrl.includes('pixel') &&
                  imgUrl.length > 20) {
                thumbnail = imgUrl
                break
              }
            }
          }
        }
      }
      // If still no thumbnail, try to extract from content snippet
      if (!thumbnail && item.contentSnippet) {
        const imgMatch = item.contentSnippet.match(/<img[^>]+src="([^"]+)"[^>]*>/i)
        if (imgMatch && imgMatch[1]) {
          const imgUrl = imgMatch[1]
          if (!imgUrl.includes('medium.com/_/stat') && 
              !imgUrl.includes('tracking') && 
              !imgUrl.includes('pixel')) {
            thumbnail = imgUrl
          }
        }
      }
      // If no thumbnail found, generate a placeholder
      if (!thumbnail) {
        thumbnail = generatePlaceholderImage(item.title || 'Blog Post', item.categories || [])
      }
      // Extract content snippet, fallback to description if needed
      let contentSnippet = item.contentSnippet || item.content || (item as any).description || ''
      // If contentSnippet is still empty, try to extract from content:encoded
      if (!contentSnippet && (item as any)['content:encoded']) {
        const encodedContent = (item as any)['content:encoded']
        contentSnippet = encodedContent.replace(/<[^>]*>/g, '').substring(0, 200)
        if (contentSnippet.length === 200) {
          contentSnippet += '...'
        }
      }
      if (contentSnippet && contentSnippet.length > 200) {
        contentSnippet = contentSnippet.substring(0, 200) + '...'
      }
      return {
        title: item.title || 'Untitled',
        link: item.link || '#',
        pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        contentSnippet: contentSnippet,
        categories: item.categories || [],
        thumbnail: thumbnail,
        creator: item.creator || item['dc:creator'] || 'Vincent Otieno',
        guid: item.guid || item.link || item.title,
      }
    })
    const total = posts.length
    const pagedPosts = posts.slice(start, end)
    return NextResponse.json(
      { posts: pagedPosts, total, page, limit },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error: any) {
    return NextResponse.json(
      { posts: [], total: 0, page, limit, error: error?.message || 'Unknown error' },
      {
        status: 502,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
        },
      }
    )
  }
} 