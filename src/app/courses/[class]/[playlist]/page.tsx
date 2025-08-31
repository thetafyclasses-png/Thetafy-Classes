// 'use client'

// import { useState, useEffect } from 'react'
// import { useParams } from 'next/navigation'
// import Link from 'next/link'
// import { Play, Clock, Eye, ThumbsUp, ArrowLeft, List, Grid, Search } from 'lucide-react'
// import { YouTubeVideo, YouTubePlaylist } from '@/types/youtube'
// import LoadingSpinner from '@/components/common/LoadingSpinner'
// import VideoPlayer from '@/components/courses/VideoPlayer'

// export default function PlaylistPage() {
//   const params = useParams()
//   const className = params.class as string
//   const playlistId = params.playlist as string

//   const [playlist, setPlaylist] = useState<YouTubePlaylist | null>(null)
//   const [videos, setVideos] = useState<YouTubeVideo[]>([])
//   const [filteredVideos, setFilteredVideos] = useState<YouTubeVideo[]>([])
//   const [currentVideo, setCurrentVideo] = useState<YouTubeVideo | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

//   useEffect(() => {
//     fetchPlaylistData()
//   }, [playlistId])

//   useEffect(() => {
//     filterVideos()
//   }, [videos, searchQuery])

//   const fetchPlaylistData = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(`/api/youtube/videos?playlistId=${playlistId}`)
//       const data = await response.json()
      
//       if (data.videos && data.videos.length > 0) {
//         setVideos(data.videos)
//         setCurrentVideo(data.videos[0]) // Set first video as current
        
//         // Create playlist object from first video data
//         setPlaylist({
//           id: playlistId,
//           title: `${getClassTitle(className)} Playlist`,
//           description: 'Complete video series for this topic',
//           thumbnail: data.videos[0].thumbnail,
//           videoCount: data.videos.length,
//           publishedAt: data.videos[0].publishedAt
//         })
//       }
//     } catch (error) {
//       console.error('Error fetching playlist data:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const filterVideos = () => {
//     if (!searchQuery.trim()) {
//       setFilteredVideos(videos)
//     } else {
//       const filtered = videos.filter(video =>
//         video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         video.description.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//       setFilteredVideos(filtered)
//     }
//   }

//   const getClassTitle = (className: string) => {
//     const titles = {
//       'class-10': 'Class 10 CBSE',
//       'class-12': 'Class 12 CBSE',
//       'iit-jee': 'IIT-JEE'
//     }
//     return titles[className as keyof typeof titles] || className
//   }

//   const formatViewCount = (count: string) => {
//     const num = parseInt(count)
//     if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
//     if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
//     return num.toString()
//   }

//   const formatPublishDate = (dateString: string) => {
//     const date = new Date(dateString)
//     const now = new Date()
//     const diffTime = Math.abs(now.getTime() - date.getTime())
//     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
//     if (diffDays < 7) return `${diffDays} days ago`
//     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
//     if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
//     return `${Math.floor(diffDays / 365)} years ago`
//   }

//   if (loading) {
//     return (
//       <div className="pt-20 min-h-screen bg-gray-50">
//         <LoadingSpinner text="Loading playlist videos..." />
//       </div>
//     )
//   }

//   if (!playlist || videos.length === 0) {
//     return (
//       <div className="pt-20 min-h-screen bg-[#313157] flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Playlist Not Found</h1>
//           <p className="text-gray-600 mb-8">The requested playlist could not be loaded.</p>
//           <Link
//             href={`/courses/${className}`}
//             className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span>Back to {getClassTitle(className)}</span>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-[#1e1d1e]">
//       {/* Breadcrumb */}
//       <div className="bg-white shadow-sm pt-18">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <nav className="flex items-center space-x-2 text-sm">
//             <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
//             <span className="text-gray-400">/</span>
//             <Link href={`/courses/${className}`} className="text-blue-600 hover:text-blue-800">
//               {getClassTitle(className)}
//             </Link>
//             <span className="text-gray-400">/</span>
//             <span className="text-gray-600">{playlist.title}</span>
//           </nav>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Video Player Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {currentVideo && (
//               <>
//                 <VideoPlayer videoId={currentVideo.id} />
                
//                 {/* Video Info */}
//                 <div className="bg-white rounded-2xl p-6 shadow-lg">
//                   <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//                     {currentVideo.title}
//                   </h1>
                  
//                   <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
//                     <div className="flex items-center space-x-2">
//                       <Eye className="h-4 w-4" />
//                       <span>{formatViewCount(currentVideo.viewCount)} views</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <ThumbsUp className="h-4 w-4" />
//                       <span>{formatViewCount(currentVideo.likeCount)} likes</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Clock className="h-4 w-4" />
//                       <span>{currentVideo.duration}</span>
//                     </div>
//                     <span>{formatPublishDate(currentVideo.publishedAt)}</span>
//                   </div>

//                   {currentVideo.description && (
//                     <div className="border-t pt-6">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
//                       <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
//                         {currentVideo.description.length > 500 
//                           ? `${currentVideo.description.substring(0, 500)}...` 
//                           : currentVideo.description
//                         }
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Playlist Sidebar */}
//           <div className="space-y-6">
//             {/* Playlist Header */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">{playlist.title}</h2>
//               <p className="text-gray-600 text-sm mb-4">{playlist.videoCount} videos</p>
              
//               {/* Search */}
//               <div className="relative mb-4">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search videos..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               {/* View Toggle */}
//               <div className="flex items-center space-x-2 mb-4">
//                 <button
//                   onClick={() => setViewMode('list')}
//                   className={`p-2 rounded-lg transition-colors ${
//                     viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
//                   }`}
//                 >
//                   <List className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('grid')}
//                   className={`p-2 rounded-lg transition-colors ${
//                     viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
//                   }`}
//                 >
//                   <Grid className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Videos List */}
//             <div className="bg-white rounded-2xl shadow-lg max-h-[600px] overflow-y-auto">
//               <div className="p-4">
//                 {filteredVideos.length === 0 ? (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">No videos found</p>
//                   </div>
//                 ) : (
//                   <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4' : 'space-y-3'}>
//                     {filteredVideos.map((video, index) => (
//                       <button
//                         key={video.id}
//                         onClick={() => setCurrentVideo(video)}
//                         className={`w-full text-left p-3 rounded-lg transition-all hover:bg-gray-50 ${
//                           currentVideo?.id === video.id ? 'bg-blue-50 border-2 border-blue-200' : 'border-2 border-transparent'
//                         }`}
//                       >
//                         <div className={viewMode === 'list' ? 'flex space-x-3' : 'space-y-2'}>
//                           <div className={`relative flex-shrink-0 ${viewMode === 'list' ? 'w-32 h-20' : 'w-full h-24'}`}>
//                             <img
//                               src={video.thumbnail.url}
//                               alt={video.title}
//                               className="w-full h-full object-cover rounded-lg"
//                             />
//                             <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
//                               {video.duration}
//                             </div>
//                             {currentVideo?.id === video.id && (
//                               <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                                 <Play className="h-6 w-6 text-blue-600" fill="currentColor" />
//                               </div>
//                             )}
//                           </div>
                          
//                           <div className={`min-w-0 ${viewMode === 'list' ? 'flex-1' : ''}`}>
//                             <h3 className={`font-medium text-gray-900 line-clamp-2 mb-1 ${
//                               viewMode === 'list' ? 'text-sm' : 'text-xs'
//                             }`}>
//                               {video.title}
//                             </h3>
//                             <div className={`text-gray-500 ${viewMode === 'list' ? 'text-xs' : 'text-xs'}`}>
//                               <div className="flex items-center space-x-2">
//                                 <span>{formatViewCount(video.viewCount)} views</span>
//                                 <span>•</span>
//                                 <span>{formatPublishDate(video.publishedAt)}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Clock, Eye, ThumbsUp, ArrowLeft, List, Grid, Search } from 'lucide-react'
import { YouTubeVideo, YouTubePlaylist } from '@/types/youtube'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import VideoPlayer from '@/components/courses/VideoPlayer'

export default function PlaylistPage() {
  const params = useParams()
  const className = params.class as string
  const playlistId = params.playlist as string

  const [playlist, setPlaylist] = useState<YouTubePlaylist | null>(null)
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [filteredVideos, setFilteredVideos] = useState<YouTubeVideo[]>([])
  const [currentVideo, setCurrentVideo] = useState<YouTubeVideo | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')

  const getClassTitle = useCallback((className: string) => {
    const titles = {
      'class-10': 'Class 10 CBSE',
      'class-12': 'Class 12 CBSE',
      'iit-jee': 'IIT-JEE'
    }
    return titles[className as keyof typeof titles] || className
  }, [])

  const fetchPlaylistData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/youtube/videos?playlistId=${playlistId}`)
      const data = await response.json()
      
      if (data.videos && data.videos.length > 0) {
        setVideos(data.videos)
        setCurrentVideo(data.videos[0])

        setPlaylist({
          id: playlistId,
          title: `${getClassTitle(className)} Playlist`,
          description: 'Complete video series for this topic',
          thumbnail: data.videos[0].thumbnail,
          videoCount: data.videos.length,
          publishedAt: data.videos[0].publishedAt
        })
      }
    } catch (error) {
      console.error('Error fetching playlist data:', error)
    } finally {
      setLoading(false)
    }
  }, [playlistId, className, getClassTitle])

  const filterVideos = useCallback(() => {
    if (!searchQuery.trim()) {
      setFilteredVideos(videos)
    } else {
      const filtered = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredVideos(filtered)
    }
  }, [videos, searchQuery])

  useEffect(() => {
    fetchPlaylistData()
  }, [fetchPlaylistData])

  useEffect(() => {
    filterVideos()
  }, [filterVideos])

  const formatViewCount = (count: string) => {
    const num = parseInt(count)
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <LoadingSpinner text="Loading playlist videos..." />
      </div>
    )
  }

  if (!playlist || videos.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-[#313157] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Playlist Not Found</h1>
          <p className="text-gray-600 mb-8">The requested playlist could not be loaded.</p>
          <Link
            href={`/courses/${className}`}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to {getClassTitle(className)}</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1e1d1e]">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm pt-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/courses" className="text-blue-600 hover:text-blue-800">Courses</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/courses/${className}`} className="text-blue-600 hover:text-blue-800">
              {getClassTitle(className)}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{playlist.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2 space-y-6">
            {currentVideo && (
              <>
                <VideoPlayer videoId={currentVideo.id} />
                
                {/* Video Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {currentVideo.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{formatViewCount(currentVideo.viewCount)} views</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{formatViewCount(currentVideo.likeCount)} likes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{currentVideo.duration}</span>
                    </div>
                    <span>{formatPublishDate(currentVideo.publishedAt)}</span>
                  </div>

                  {currentVideo.description && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                        {currentVideo.description.length > 500 
                          ? `${currentVideo.description.substring(0, 500)}...` 
                          : currentVideo.description
                        }
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Playlist Sidebar */}
          <div className="space-y-6">
            {/* Playlist Header */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{playlist.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{playlist.videoCount} videos</p>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 mb-4">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Videos List */}
            <div className="bg-white rounded-2xl shadow-lg max-h-[600px] overflow-y-auto">
              <div className="p-4">
                {filteredVideos.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No videos found</p>
                  </div>
                ) : (
                  <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4' : 'space-y-3'}>
                    {filteredVideos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setCurrentVideo(video)}
                        className={`w-full text-left p-3 rounded-lg transition-all hover:bg-gray-50 ${
                          currentVideo?.id === video.id ? 'bg-blue-50 border-2 border-blue-200' : 'border-2 border-transparent'
                        }`}
                      >
                        <div className={viewMode === 'list' ? 'flex space-x-3' : 'space-y-2'}>
                          <div className={`relative flex-shrink-0 ${viewMode === 'list' ? 'w-32 h-20' : 'w-full h-24'}`}>
                            <Image
                              src={video.thumbnail.url}
                              alt={video.title}
                              width={320}
                              height={180}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                              {video.duration}
                            </div>
                            {currentVideo?.id === video.id && (
                              <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                <Play className="h-6 w-6 text-blue-600" fill="currentColor" />
                              </div>
                            )}
                          </div>
                          
                          <div className={`min-w-0 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                            <h3 className={`font-medium text-gray-900 line-clamp-2 mb-1 ${
                              viewMode === 'list' ? 'text-sm' : 'text-xs'
                            }`}>
                              {video.title}
                            </h3>
                            <div className="text-gray-500 text-xs">
                              <div className="flex items-center space-x-2">
                                <span>{formatViewCount(video.viewCount)} views</span>
                                <span>•</span>
                                <span>{formatPublishDate(video.publishedAt)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
