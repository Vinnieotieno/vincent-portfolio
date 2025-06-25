import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const MEDIUM_RSS = 'https://medium.com/feed/@vincentotienoakuku'

export async function GET() {
  const parser = new Parser()
  try {
    const feed = await parser.parseURL(MEDIUM_RSS)
    // Map to a simpler structure
    const posts = feed.items.slice(0, 9).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
      categories: item.categories,
      thumbnail: item.thumbnail || null,
      creator: item.creator,
      guid: item.guid,
    }))
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Medium posts', details: error.message }, { status: 500 })
  }
} 