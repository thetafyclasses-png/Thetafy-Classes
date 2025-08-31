import { NextRequest, NextResponse } from 'next/server'
import { getChannelPlaylists, categorizePlaylistsByClass } from '@/lib/youtube'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const classParam = searchParams.get('class')
    const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

    if (!channelId) {
      return NextResponse.json(
        { error: 'YouTube channel ID not configured' },
        { status: 500 }
      )
    }

    // Fetch all playlists from the channel
    const allPlaylists = await getChannelPlaylists(channelId, 50)
    
    if (classParam) {
      // Filter playlists by class
      const categorized = categorizePlaylistsByClass(allPlaylists)
      const classPlaylists = categorized[classParam] || []
      
      return NextResponse.json({
        playlists: classPlaylists,
        total: classPlaylists.length
      })
    }

    // Return all playlists categorized
    const categorized = categorizePlaylistsByClass(allPlaylists)
    
    return NextResponse.json({
      allPlaylists,
      categorized,
      total: allPlaylists.length
    })
  } catch (error) {
    console.error('Error in playlists API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch playlists' },
      { status: 500 }
    )
  }
}