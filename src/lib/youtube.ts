// import { YouTubePlaylist, YouTubeVideo, YouTubeApiResponse, PlaylistsByClass } from '@/types/youtube'

// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
// const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3'

// if (!YOUTUBE_API_KEY) {
//   console.warn('YouTube API key is not set')
// }

// // Helper function to format duration from ISO 8601 to human readable
// export function formatDuration(duration: string): string {
//   const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
//   if (!match) return '0:00'

//   const hours = parseInt(match[1]?.replace('H', '') || '0')
//   const minutes = parseInt(match[2]?.replace('M', '') || '0')
//   const seconds = parseInt(match[3]?.replace('S', '') || '0')

//   if (hours > 0) {
//     return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
//   }
//   return `${minutes}:${seconds.toString().padStart(2, '0')}`
// }

// // Helper function to format view count
// export function formatViewCount(count: string): string {
//   const num = parseInt(count)
//   if (num >= 1000000) {
//     return `${(num / 1000000).toFixed(1)}M`
//   } else if (num >= 1000) {
//     return `${(num / 1000).toFixed(1)}K`
//   }
//   return num.toString()
// }

// // Fetch playlists from a YouTube channel
// export async function getChannelPlaylists(channelId: string, maxResults: number = 50): Promise<YouTubePlaylist[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   try {
//     const response = await fetch(
//       `${YOUTUBE_BASE_URL}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`,
//       {cache:'no-store'}
//     )

//     if (!response.ok) {
//       throw new Error(`YouTube API error: ${response.status}`)
//     }

//     const data: YouTubeApiResponse<any> = await response.json()

//     return data.items.map((item: any) => ({
//       id: item.id,
//       title: item.snippet.title,
//       description: item.snippet.description,
//       thumbnail: {
//         url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//         width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//         height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//       },
//       videoCount: item.contentDetails.itemCount,
//       publishedAt: item.snippet.publishedAt,
//     }))
//   } catch (error) {
//     console.error('Error fetching playlists:', error)
//     return []
//   }
// }

// // Fetch videos from a specific playlist
// export async function getPlaylistVideos(playlistId: string, maxResults: number = 50): Promise<YouTubeVideo[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   try {
//     // First, get the video IDs from the playlist
//     const playlistResponse = await fetch(
//       `${YOUTUBE_BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
//     )

//     if (!playlistResponse.ok) {
//       throw new Error(`YouTube API error: ${playlistResponse.status}`)
//     }

//     const playlistData: YouTubeApiResponse<any> = await playlistResponse.json()
//     const videoIds = playlistData.items
//       .map((item: any) => item.snippet.resourceId.videoId)
//       .filter((id: string) => id) // Filter out any undefined IDs
//       .join(',')

//     if (!videoIds) {
//       return []
//     }

//     // Then get detailed information about the videos
//     const videosResponse = await fetch(
//       `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
//     )

//     if (!videosResponse.ok) {
//       throw new Error(`YouTube API error: ${videosResponse.status}`)
//     }

//     const videosData: YouTubeApiResponse<any> = await videosResponse.json()

//     return videosData.items.map((item: any) => ({
//       id: item.id,
//       title: item.snippet.title,
//       description: item.snippet.description,
//       thumbnail: {
//         url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//         width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//         height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//       },
//       duration: formatDuration(item.contentDetails.duration),
//       publishedAt: item.snippet.publishedAt,
//       viewCount: item.statistics.viewCount || '0',
//       likeCount: item.statistics.likeCount || '0',
//       tags: item.snippet.tags || [],
//     }))
//   } catch (error) {
//     console.error('Error fetching playlist videos:', error)
//     return []
//   }
// }

// // Categorize playlists by class (10, 12, JEE) based on playlist titles
// export function categorizePlaylistsByClass(playlists: YouTubePlaylist[]): PlaylistsByClass {
//   const categorized: PlaylistsByClass = {
//     'class-10': [],
//     'class-12': [],
//     'iit-jee': [],
//     'others': []
//   }

//   playlists.forEach(playlist => {
//     const title = playlist.title.toLowerCase()
    
//     if (title.includes('class 10') || title.includes('10th') || title.includes('x class')) {
//       categorized['class-10'].push(playlist)
//     } else if (title.includes('class 12') || title.includes('12th') || title.includes('xii class')) {
//       categorized['class-12'].push(playlist)
//     } else if (title.includes('jee') || title.includes('iit') || title.includes('neet') || title.includes('competitive')) {
//       categorized['iit-jee'].push(playlist)
//     } else {
//       categorized['others'].push(playlist)
//     }
//   })

//   return categorized
// }

// // Search for videos within a channel
// export async function searchChannelVideos(channelId: string, query: string, maxResults: number = 20): Promise<YouTubeVideo[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   try {
//     const response = await fetch(
//       `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
//     )

//     if (!response.ok) {
//       throw new Error(`YouTube API error: ${response.status}`)
//     }

//     const data: YouTubeApiResponse<any> = await response.json()
//     const videoIds = data.items.map((item: any) => item.id.videoId).join(',')

//     if (!videoIds) {
//       return []
//     }

//     // Get detailed video information
//     const videosResponse = await fetch(
//       `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
//     )

//     const videosData: YouTubeApiResponse<any> = await videosResponse.json()

//     return videosData.items.map((item: any) => ({
//       id: item.id,
//       title: item.snippet.title,
//       description: item.snippet.description,
//       thumbnail: {
//         url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//         width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//         height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//       },
//       duration: formatDuration(item.contentDetails.duration),
//       publishedAt: item.snippet.publishedAt,
//       viewCount: item.statistics.viewCount || '0',
//       likeCount: item.statistics.likeCount || '0',
//       tags: item.snippet.tags || [],
//     }))
//   } catch (error) {
//     console.error('Error searching videos:', error)
//     return []
//   }
// }
// import { YouTubePlaylist, YouTubeVideo, YouTubeApiResponse, PlaylistsByClass } from '@/types/youtube'

// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
// const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3'
// const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

// if (!YOUTUBE_API_KEY) {
//   console.warn('YouTube API key is not set')
// }

// // In-memory cache structure
// interface CacheEntry<T> {
//   data: T
//   timestamp: number
// }

// // Simple in-memory cache (you might want to use Redis or database in production)
// const cache = new Map<string, CacheEntry<any>>()

// // Helper function to check if cache entry is valid
// function isCacheValid(entry: CacheEntry<any>): boolean {
//   return Date.now() - entry.timestamp < CACHE_DURATION
// }

// // Helper function to get from cache or fetch fresh data
// async function getCachedOrFresh<T>(
//   cacheKey: string,
//   fetchFunction: () => Promise<T>
// ): Promise<T> {
//   // Check if we have valid cached data
//   const cached = cache.get(cacheKey)
//   if (cached && isCacheValid(cached)) {
//     console.log(`Using cached data for: ${cacheKey}`)
//     return cached.data as T
//   }

//   // Fetch fresh data
//   console.log(`Fetching fresh data for: ${cacheKey}`)
//   const freshData = await fetchFunction()
  
//   // Store in cache
//   cache.set(cacheKey, {
//     data: freshData,
//     timestamp: Date.now()
//   })

//   return freshData
// }

// // Alternative: File-based caching (good for server environments)
// import fs from 'fs/promises'
// import path from 'path'

// const CACHE_DIR = path.join(process.cwd(), '.cache')

// async function ensureCacheDir() {
//   try {
//     await fs.access(CACHE_DIR)
//   } catch {
//     await fs.mkdir(CACHE_DIR, { recursive: true })
//   }
// }

// async function getCachedOrFreshFile<T>(
//   cacheKey: string,
//   fetchFunction: () => Promise<T>
// ): Promise<T> {
//   await ensureCacheDir()
//   const cacheFile = path.join(CACHE_DIR, `${cacheKey}.json`)

//   try {
//     // Try to read from cache file
//     const cacheContent = await fs.readFile(cacheFile, 'utf-8')
//     const cached: CacheEntry<T> = JSON.parse(cacheContent)
    
//     if (isCacheValid(cached)) {
//       console.log(`Using cached file data for: ${cacheKey}`)
//       return cached.data
//     }
//   } catch (error) {
//     // Cache file doesn't exist or is invalid
//     console.log(`No valid cache found for: ${cacheKey}`)
//   }

//   // Fetch fresh data
//   console.log(`Fetching fresh data for: ${cacheKey}`)
//   const freshData = await fetchFunction()
  
//   // Store in cache file
//   const cacheEntry: CacheEntry<T> = {
//     data: freshData,
//     timestamp: Date.now()
//   }
  
//   await fs.writeFile(cacheFile, JSON.stringify(cacheEntry, null, 2))
//   return freshData
// }

// // Helper function to format duration from ISO 8601 to human readable
// export function formatDuration(duration: string): string {
//   const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
//   if (!match) return '0:00'

//   const hours = parseInt(match[1]?.replace('H', '') || '0')
//   const minutes = parseInt(match[2]?.replace('M', '') || '0')
//   const seconds = parseInt(match[3]?.replace('S', '') || '0')

//   if (hours > 0) {
//     return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
//   }
//   return `${minutes}:${seconds.toString().padStart(2, '0')}`
// }

// // Helper function to format view count
// export function formatViewCount(count: string): string {
//   const num = parseInt(count)
//   if (num >= 1000000) {
//     return `${(num / 1000000).toFixed(1)}M`
//   } else if (num >= 1000) {
//     return `${(num / 1000).toFixed(1)}K`
//   }
//   return num.toString()
// }

// // Fetch playlists from a YouTube channel with caching
// export async function getChannelPlaylists(channelId: string, maxResults: number = 50): Promise<YouTubePlaylist[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   const cacheKey = `playlists_${channelId}_${maxResults}`
  
//   return getCachedOrFresh(cacheKey, async () => {
//     try {
//       const response = await fetch(
//         `${YOUTUBE_BASE_URL}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`,
//         { cache: 'no-store' }
//       )

//       if (!response.ok) {
//         throw new Error(`YouTube API error: ${response.status}`)
//       }

//       const data: YouTubeApiResponse<any> = await response.json()

//       return data.items.map((item: any) => ({
//         id: item.id,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: {
//           url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//           width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//           height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//         },
//         videoCount: item.contentDetails.itemCount,
//         publishedAt: item.snippet.publishedAt,
//       }))
//     } catch (error) {
//       console.error('Error fetching playlists:', error)
//       return []
//     }
//   })
// }

// // Fetch videos from a specific playlist with caching
// export async function getPlaylistVideos(playlistId: string, maxResults: number = 50): Promise<YouTubeVideo[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   const cacheKey = `playlist_videos_${playlistId}_${maxResults}`
  
//   return getCachedOrFresh(cacheKey, async () => {
//     try {
//       // First, get the video IDs from the playlist
//       const playlistResponse = await fetch(
//         `${YOUTUBE_BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
//       )

//       if (!playlistResponse.ok) {
//         throw new Error(`YouTube API error: ${playlistResponse.status}`)
//       }

//       const playlistData: YouTubeApiResponse<any> = await playlistResponse.json()
//       const videoIds = playlistData.items
//         .map((item: any) => item.snippet.resourceId.videoId)
//         .filter((id: string) => id)
//         .join(',')

//       if (!videoIds) {
//         return []
//       }

//       // Then get detailed information about the videos
//       const videosResponse = await fetch(
//         `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
//       )

//       if (!videosResponse.ok) {
//         throw new Error(`YouTube API error: ${videosResponse.status}`)
//       }

//       const videosData: YouTubeApiResponse<any> = await videosResponse.json()

//       return videosData.items.map((item: any) => ({
//         id: item.id,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: {
//           url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//           width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//           height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//         },
//         duration: formatDuration(item.contentDetails.duration),
//         publishedAt: item.snippet.publishedAt,
//         viewCount: item.statistics.viewCount || '0',
//         likeCount: item.statistics.likeCount || '0',
//         tags: item.snippet.tags || [],
//       }))
//     } catch (error) {
//       console.error('Error fetching playlist videos:', error)
//       return []
//     }
//   })
// }

// // Categorize playlists by class (10, 12, JEE) based on playlist titles
// export function categorizePlaylistsByClass(playlists: YouTubePlaylist[]): PlaylistsByClass {
//   const categorized: PlaylistsByClass = {
//     'class-10': [],
//     'class-12': [],
//     'iit-jee': [],
//     'others': []
//   }

//   playlists.forEach(playlist => {
//     const title = playlist.title.toLowerCase()
    
//     if (title.includes('class 10') || title.includes('10th') || title.includes('x class')) {
//       categorized['class-10'].push(playlist)
//     } else if (title.includes('class 12') || title.includes('12th') || title.includes('xii class')) {
//       categorized['class-12'].push(playlist)
//     } else if (title.includes('jee') || title.includes('iit') || title.includes('neet') || title.includes('competitive')) {
//       categorized['iit-jee'].push(playlist)
//     } else {
//       categorized['others'].push(playlist)
//     }
//   })

//   return categorized
// }

// // Search for videos within a channel with caching
// export async function searchChannelVideos(channelId: string, query: string, maxResults: number = 20): Promise<YouTubeVideo[]> {
//   if (!YOUTUBE_API_KEY) {
//     throw new Error('YouTube API key is not configured')
//   }

//   const cacheKey = `search_${channelId}_${query}_${maxResults}`
  
//   return getCachedOrFresh(cacheKey, async () => {
//     try {
//       const response = await fetch(
//         `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
//       )

//       if (!response.ok) {
//         throw new Error(`YouTube API error: ${response.status}`)
//       }

//       const data: YouTubeApiResponse<any> = await response.json()
//       const videoIds = data.items.map((item: any) => item.id.videoId).join(',')

//       if (!videoIds) {
//         return []
//       }

//       // Get detailed video information
//       const videosResponse = await fetch(
//         `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
//       )

//       const videosData: YouTubeApiResponse<any> = await videosResponse.json()

//       return videosData.items.map((item: any) => ({
//         id: item.id,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: {
//           url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
//           width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
//           height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
//         },
//         duration: formatDuration(item.contentDetails.duration),
//         publishedAt: item.snippet.publishedAt,
//         viewCount: item.statistics.viewCount || '0',
//         likeCount: item.statistics.likeCount || '0',
//         tags: item.snippet.tags || [],
//       }))
//     } catch (error) {
//       console.error('Error searching videos:', error)
//       return []
//     }
//   })
// }

// // Utility functions for cache management
// export function clearCache() {
//   cache.clear()
//   console.log('Cache cleared')
// }

// export function getCacheStats() {
//   const stats = {
//     totalEntries: cache.size,
//     entries: Array.from(cache.entries()).map(([key, value]) => ({
//       key,
//       timestamp: new Date(value.timestamp).toISOString(),
//       age: Date.now() - value.timestamp,
//       isValid: isCacheValid(value)
//     }))
//   }
//   return stats
// }

// // For file-based caching, you can use getCachedOrFreshFile instead of getCachedOrFresh
// // Just replace the function calls in the export functions above

// // Example usage for force refresh:
// export async function forceRefreshChannelPlaylists(channelId: string, maxResults: number = 50): Promise<YouTubePlaylist[]> {
//   const cacheKey = `playlists_${channelId}_${maxResults}`
//   cache.delete(cacheKey) // Remove from cache to force refresh
//   return getChannelPlaylists(channelId, maxResults)
// }

import { YouTubePlaylist, YouTubeVideo, YouTubeApiResponse, PlaylistsByClass } from '@/types/youtube'
import fs from 'fs/promises'
import path from 'path'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

if (!YOUTUBE_API_KEY) {
  console.warn('YouTube API key is not set')
}

// YouTube API response types
interface YouTubePlaylistItem {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: { url: string; width: number; height: number }
      medium?: { url: string; width: number; height: number }
    }
    publishedAt: string
  }
  contentDetails: {
    itemCount: number
  }
}

interface YouTubePlaylistItemResponse {
  snippet: {
    resourceId: {
      videoId: string
    }
  }
}

interface YouTubeVideoItem {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: { url: string; width: number; height: number }
      medium?: { url: string; width: number; height: number }
    }
    publishedAt: string
    tags?: string[]
  }
  contentDetails: {
    duration: string
  }
  statistics: {
    viewCount?: string
    likeCount?: string
  }
}

interface YouTubeSearchItem {
  id: {
    videoId: string
  }
}

// In-memory cache structure
interface CacheEntry<T> {
  data: T
  timestamp: number
}

// Simple in-memory cache (you might want to use Redis or database in production)
const cache = new Map<string, CacheEntry<unknown>>()

// Helper function to check if cache entry is valid
function isCacheValid(entry: CacheEntry<unknown>): boolean {
  return Date.now() - entry.timestamp < CACHE_DURATION
}

// Helper function to get from cache or fetch fresh data
async function getCachedOrFresh<T>(
  cacheKey: string,
  fetchFunction: () => Promise<T>
): Promise<T> {
  // Check if we have valid cached data
  const cached = cache.get(cacheKey)
  if (cached && isCacheValid(cached)) {
    console.log(`Using cached data for: ${cacheKey}`)
    return cached.data as T
  }

  // Fetch fresh data
  console.log(`Fetching fresh data for: ${cacheKey}`)
  const freshData = await fetchFunction()
  
  // Store in cache
  cache.set(cacheKey, {
    data: freshData,
    timestamp: Date.now()
  })

  return freshData
}

// Alternative: File-based caching (good for server environments)
const CACHE_DIR = path.join(process.cwd(), '.cache')

async function ensureCacheDir() {
  try {
    await fs.access(CACHE_DIR)
  } catch {
    await fs.mkdir(CACHE_DIR, { recursive: true })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getCachedOrFreshFile<T>(
  cacheKey: string,
  fetchFunction: () => Promise<T>
): Promise<T> {
  await ensureCacheDir()
  const cacheFile = path.join(CACHE_DIR, `${cacheKey}.json`)

  try {
    // Try to read from cache file
    const cacheContent = await fs.readFile(cacheFile, 'utf-8')
    const cached: CacheEntry<T> = JSON.parse(cacheContent)
    
    if (isCacheValid(cached)) {
      console.log(`Using cached file data for: ${cacheKey}`)
      return cached.data
    }
  } catch {
    // Cache file doesn't exist or is invalid - silently continue to fetch fresh data
    console.log(`No valid cache found for: ${cacheKey}`)
  }

  // Fetch fresh data
  console.log(`Fetching fresh data for: ${cacheKey}`)
  const freshData = await fetchFunction()
  
  // Store in cache file
  const cacheEntry: CacheEntry<T> = {
    data: freshData,
    timestamp: Date.now()
  }
  
  await fs.writeFile(cacheFile, JSON.stringify(cacheEntry, null, 2))
  return freshData
}



// Helper function to format duration from ISO 8601 to human readable
export function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
  if (!match) return '0:00'

  const hours = parseInt(match[1]?.replace('H', '') || '0')
  const minutes = parseInt(match[2]?.replace('M', '') || '0')
  const seconds = parseInt(match[3]?.replace('S', '') || '0')

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

// Helper function to format view count
export function formatViewCount(count: string): string {
  const num = parseInt(count)
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toString()
}

// Fetch playlists from a YouTube channel with caching
export async function getChannelPlaylists(channelId: string, maxResults: number = 50): Promise<YouTubePlaylist[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured')
  }

  const cacheKey = `playlists_${channelId}_${maxResults}`
  
  return getCachedOrFresh(cacheKey, async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_BASE_URL}/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`,
        { cache: 'no-store' }
      )

      if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status}`)
      }

      const data: YouTubeApiResponse<YouTubePlaylistItem> = await response.json()

      return data.items.map((item: YouTubePlaylistItem) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: {
          url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
          width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
          height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
        },
        videoCount: item.contentDetails.itemCount,
        publishedAt: item.snippet.publishedAt,
      }))
    } catch (error) {
      console.error('Error fetching playlists:', error)
      return []
    }
  })
}

// Fetch videos from a specific playlist with caching
export async function getPlaylistVideos(playlistId: string, maxResults: number = 50): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured')
  }

  const cacheKey = `playlist_videos_${playlistId}_${maxResults}`
  
  return getCachedOrFresh(cacheKey, async () => {
    try {
      // First, get the video IDs from the playlist
      const playlistResponse = await fetch(
        `${YOUTUBE_BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
      )

      if (!playlistResponse.ok) {
        throw new Error(`YouTube API error: ${playlistResponse.status}`)
      }

      const playlistData: YouTubeApiResponse<YouTubePlaylistItemResponse> = await playlistResponse.json()
      const videoIds = playlistData.items
        .map((item: YouTubePlaylistItemResponse) => item.snippet.resourceId.videoId)
        .filter((id: string) => id)
        .join(',')

      if (!videoIds) {
        return []
      }

      // Then get detailed information about the videos
      const videosResponse = await fetch(
        `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      )

      if (!videosResponse.ok) {
        throw new Error(`YouTube API error: ${videosResponse.status}`)
      }

      const videosData: YouTubeApiResponse<YouTubeVideoItem> = await videosResponse.json()

      return videosData.items.map((item: YouTubeVideoItem) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: {
          url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
          width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
          height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
        },
        duration: formatDuration(item.contentDetails.duration),
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount || '0',
        likeCount: item.statistics.likeCount || '0',
        tags: item.snippet.tags || [],
      }))
    } catch (error) {
      console.error('Error fetching playlist videos:', error)
      return []
    }
  })
}

// Categorize playlists by class (10, 12, JEE) based on playlist titles
export function categorizePlaylistsByClass(playlists: YouTubePlaylist[]): PlaylistsByClass {
  const categorized: PlaylistsByClass = {
    'class-10': [],
    'class-12': [],
    'iit-jee': [],
    'others': []
  }

  playlists.forEach(playlist => {
    const title = playlist.title.toLowerCase()
    
    if (title.includes('class 10') || title.includes('10th') || title.includes('x class')) {
      categorized['class-10'].push(playlist)
    } else if (title.includes('class 12') || title.includes('12th') || title.includes('xii class')) {
      categorized['class-12'].push(playlist)
    } else if (title.includes('jee') || title.includes('iit') || title.includes('neet') || title.includes('competitive')) {
      categorized['iit-jee'].push(playlist)
    } else {
      categorized['others'].push(playlist)
    }
  })

  return categorized
}

// Search for videos within a channel with caching
export async function searchChannelVideos(channelId: string, query: string, maxResults: number = 20): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured')
  }

  const cacheKey = `search_${channelId}_${query}_${maxResults}`
  
  return getCachedOrFresh(cacheKey, async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_BASE_URL}/search?part=snippet&channelId=${channelId}&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
      )

      if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status}`)
      }

      const data: YouTubeApiResponse<YouTubeSearchItem> = await response.json()
      const videoIds = data.items.map((item: YouTubeSearchItem) => item.id.videoId).join(',')

      if (!videoIds) {
        return []
      }

      // Get detailed video information
      const videosResponse = await fetch(
        `${YOUTUBE_BASE_URL}/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      )

      const videosData: YouTubeApiResponse<YouTubeVideoItem> = await videosResponse.json()

      return videosData.items.map((item: YouTubeVideoItem) => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: {
          url: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
          width: item.snippet.thumbnails.medium?.width || item.snippet.thumbnails.default.width,
          height: item.snippet.thumbnails.medium?.height || item.snippet.thumbnails.default.height,
        },
        duration: formatDuration(item.contentDetails.duration),
        publishedAt: item.snippet.publishedAt,
        viewCount: item.statistics.viewCount || '0',
        likeCount: item.statistics.likeCount || '0',
        tags: item.snippet.tags || [],
      }))
    } catch (error) {
      console.error('Error searching videos:', error)
      return []
    }
  })
}

// Utility functions for cache management
export function clearCache() {
  cache.clear()
  console.log('Cache cleared')
}

export function getCacheStats() {
  const stats = {
    totalEntries: cache.size,
    entries: Array.from(cache.entries()).map(([key, value]) => ({
      key,
      timestamp: new Date(value.timestamp).toISOString(),
      age: Date.now() - value.timestamp,
      isValid: isCacheValid(value)
    }))
  }
  return stats
}

// Example usage for force refresh:
export async function forceRefreshChannelPlaylists(channelId: string, maxResults: number = 50): Promise<YouTubePlaylist[]> {
  const cacheKey = `playlists_${channelId}_${maxResults}`
  cache.delete(cacheKey) // Remove from cache to force refresh
  return getChannelPlaylists(channelId, maxResults)
}