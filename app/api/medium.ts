import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const MEDIUM_RSS = 'https://medium.com/feed/@vincentotienoakuku'

export async function GET() {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:content', 'media'],
        ['media:thumbnail', 'thumbnail'],
        ['dc:creator', 'creator'],
      ],
    },
  })

  try {
    console.log('Fetching Medium RSS feed from:', MEDIUM_RSS)
    
    const feed = await parser.parseURL(MEDIUM_RSS)
    console.log('Feed fetched successfully, items count:', feed.items?.length || 0)
    
    if (!feed.items || feed.items.length === 0) {
      console.log('No items found in feed')
      return NextResponse.json({ posts: [] })
    }

    // Map to a simpler structure with better error handling
    const posts = feed.items.slice(0, 9).map(item => {
      // Extract thumbnail from various possible sources
      let thumbnail = null
      if (item.thumbnail) {
        thumbnail = item.thumbnail
      } else if (item['media:content'] && item['media:content'].$ && item['media:content'].$.url) {
        thumbnail = item['media:content'].$.url
      } else if (item.media && item.media.$ && item.media.$.url) {
        thumbnail = item.media.$.url
      }

      // Extract content snippet, fallback to description if needed
      let contentSnippet = item.contentSnippet || item.content || (item as any).description || ''
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

    console.log('Processed posts:', posts.length)
    return NextResponse.json({ posts })

  } catch (error: any) {
    console.error('Error fetching Medium posts:', error)
    
    // Return fallback posts if API fails
    const fallbackPosts = [
      {
        title: "Building Modern Web Applications with React and Next.js",
        contentSnippet: "Exploring the latest features and best practices for building scalable web applications using React and Next.js framework.",
        pubDate: "2024-12-15",
        link: "https://medium.com/@vincentotieno/building-modern-web-applications",
        categories: ["React", "Next.js", "Web Development"],
        thumbnail: null,
        creator: "Vincent Otieno",
        guid: "fallback-1",
      },
      {
        title: "SEO Optimization Strategies for Modern Websites",
        contentSnippet: "A comprehensive guide to improving your website's search engine visibility and organic traffic through proven SEO techniques.",
        pubDate: "2024-12-10",
        link: "https://medium.com/@vincentotieno/seo-optimization-strategies",
        categories: ["SEO", "Digital Marketing", "Web Performance"],
        thumbnail: null,
        creator: "Vincent Otieno",
        guid: "fallback-2",
      },
      {
        title: "The Future of E-commerce: Trends and Technologies",
        contentSnippet: "Analyzing emerging trends in e-commerce and how new technologies are reshaping online shopping experiences.",
        pubDate: "2024-12-05",
        link: "https://medium.com/@vincentotieno/future-of-ecommerce",
        categories: ["E-commerce", "Technology", "Business"],
        thumbnail: null,
        creator: "Vincent Otieno",
        guid: "fallback-3",
      },
    ]

    return NextResponse.json({ 
      posts: fallbackPosts,
      error: 'Using fallback posts due to API error',
      details: error?.message || 'Unknown error'
    })
  }
} 