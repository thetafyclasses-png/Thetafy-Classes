import { NextRequest, NextResponse } from 'next/server'
import { getPlaylistVideos, searchChannelVideos } from '@/lib/youtube'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const playlistId = searchParams.get('playlistId')
    const channelId = searchParams.get('channelId')
    const query = searchParams.get('query')
    const maxResults = parseInt(searchParams.get('maxResults') || '50')

    if (playlistId) {
      // Fetch videos from a specific playlist
      const videos = await getPlaylistVideos(playlistId, maxResults)
      
      return NextResponse.json({
        videos,
        total: videos.length,
        playlistId
      })
    }

    if (channelId && query) {
      // Search for videos in the channel
      const videos = await searchChannelVideos(channelId, query, maxResults)
      
      return NextResponse.json({
        videos,
        total: videos.length,
        query
      })
    }

    return NextResponse.json(
      { error: 'Missing required parameters (playlistId or channelId + query)' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error in videos API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    )
  }
}