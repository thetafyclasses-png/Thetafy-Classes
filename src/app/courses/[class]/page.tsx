// 'use client'
// import Image from "next/image";

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import { PlayCircle, Clock, Users, BookOpen, Search, Filter, ArrowLeft } from 'lucide-react'
// import { YouTubePlaylist } from '@/types/youtube'
// import LoadingSpinner from '@/components/common/LoadingSpinner'

// export default function ClassPage() {
//   const params = useParams()
//   const className = params.class as string

//   const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([])
//   const [filteredPlaylists, setFilteredPlaylists] = useState<YouTubePlaylist[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [sortBy, setSortBy] = useState<'title' | 'date' | 'videoCount'>('title')

//   // Class information mapping
//   const classInfo = {
//     'class-10': {
//       title: 'CBSE Class 10 Mathematics',
//       description: 'Master the fundamentals of Class 10 CBSE Mathematics with comprehensive video lessons, practice problems, and exam preparation.',
//       color: 'from-green-500 to-emerald-600',
//       bgColor: 'bg-green-50',
//       subjects: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Coordinate Geometry', 'Triangles', 'Circles', 'Areas & Volumes', 'Statistics', 'Probability']
//     },
//     'class-12': {
//       title: 'CBSE Class 12 Mathematics',
//       description: 'Advanced mathematics concepts for Class 12 CBSE including Calculus, Vectors, and Probability with detailed explanations and board exam preparation.',
//       color: 'from-blue-500 to-blue-600',
//       bgColor: 'bg-blue-50',
//       subjects: ['Relations & Functions', 'Inverse Trigonometry', 'Matrices', 'Determinants', 'Continuity & Differentiability', 'Applications of Derivatives', 'Integrals', 'Differential Equations', 'Vector Algebra', '3D Geometry', 'Linear Programming', 'Probability']
//     },
//     'iit-jee': {
//       title: 'IIT-JEE Mathematics',
//       description: 'Complete JEE preparation with advanced problem-solving techniques, previous year questions, and competitive exam strategies.',
//       color: 'from-purple-500 to-indigo-600',
//       bgColor: 'bg-purple-50',
//       subjects: ['Complex Numbers', 'Sequences & Series', 'Permutations & Combinations', 'Functions', 'Limits & Continuity', 'Differentiation', 'Integration', 'Coordinate Geometry', 'Vector & 3D Geometry', 'Probability', 'Mathematical Reasoning']
//     }
//   }

//   const currentClass = classInfo[className as keyof typeof classInfo]

//   useEffect(() => {
//     fetchPlaylists()
//   }, [className])

//   useEffect(() => {
//     filterAndSortPlaylists()
//   }, [playlists, searchQuery, sortBy])

//   const fetchPlaylists = async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(`/api/youtube/playlists?class=${className}`)
//       const data = await response.json()
//       setPlaylists(data.playlists || [])
//     } catch (error) {
//       console.error('Error fetching playlists:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const filterAndSortPlaylists = () => {
//     let filtered = playlists.filter(playlist =>
//       playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     // Sort playlists
//     filtered.sort((a, b) => {
//       switch (sortBy) {
//         case 'title':
//           return a.title.localeCompare(b.title)
//         case 'date':
//           return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
//         case 'videoCount':
//           return b.videoCount - a.videoCount
//         default:
//           return 0
//       }
//     })

//     setFilteredPlaylists(filtered)
//   }

//   if (!currentClass) {
//     return (
//       <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Class Not Found</h1>
//           <p className="text-gray-600 mb-8">The requested class page does not exist.</p>
//           <Link
//             href="/courses"
//             className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span>Back to Courses</span>
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className=" min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className={`py-30 bg-[#050529]`}>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center text-white">
//             <Link
//               href="/courses"
//               className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               <span>Back to Courses</span>
//             </Link>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//               {currentClass.title}
//             </h1>
//             <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
//               {currentClass.description}
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
//                 <BookOpen className="h-5 w-5" />
//                 <span>{playlists.length} Playlists</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
//                 <PlayCircle className="h-5 w-5" />
//                 <span>{playlists.reduce((total, playlist) => total + playlist.videoCount, 0)} Videos</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="py-8 bg-white shadow-sm">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             {/* Search */}
//             <div className="relative flex-1 max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search playlists..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             {/* Sort Filter */}
//             <div className="flex items-center space-x-2">
//               <Filter className="h-5 w-5 text-gray-500" />
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as any)}
//                 className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="title">Sort by Title</option>
//                 <option value="date">Sort by Date</option>
//                 <option value="videoCount">Sort by Video Count</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Playlists Grid */}
//       <section className="py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {loading ? (
//             <LoadingSpinner />
//           ) : filteredPlaylists.length === 0 ? (
//             <div className="text-center py-12">
//               <BookOpen className="h-24 w-24 text-gray-300 mx-auto mb-6" />
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">No Playlists Found</h2>
//               <p className="text-gray-600 mb-8">
//                 {searchQuery 
//                   ? `No playlists match your search for "${searchQuery}"`
//                   : 'No playlists available for this class yet.'
//                 }
//               </p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredPlaylists.map((playlist) => (
//                 <Link
//                   key={playlist.id}
//                   href={`/courses/${className}/${playlist.id}`}
//                   className="group"
//                 >
//                   <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
//                     {/* Thumbnail */}
//                     <div className="relative">
//                       <img 
//                         src={playlist.thumbnail.url}
//                         alt={playlist.title} 
//                         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
//                       />
//                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
//                       <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
//                         {playlist.videoCount} videos
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
//                         {playlist.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                         {playlist.description}
//                       </p>
                      
//                       <div className="flex items-center justify-between text-gray-500 text-sm">
//                         <div className="flex items-center space-x-2">
//                           <Clock className="h-4 w-4" />
//                           <span>{new Date(playlist.publishedAt).toLocaleDateString()}</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <PlayCircle className="h-4 w-4" />
//                           <span>{playlist.videoCount} videos</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }


'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { PlayCircle, Clock, BookOpen, Search, Filter, ArrowLeft } from 'lucide-react'
import { YouTubePlaylist } from '@/types/youtube'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import Image from 'next/image'

export default function ClassPage() {
  const params = useParams()
  const className = params.class as string

  const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([])
  const [filteredPlaylists, setFilteredPlaylists] = useState<YouTubePlaylist[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'title' | 'date' | 'videoCount'>('title')

  // Class information mapping
  const classInfo = {
    'class-10': {
      title: 'CBSE Class 10 Mathematics',
      description:
        'Master the fundamentals of Class 10 CBSE Mathematics with comprehensive video lessons, practice problems, and exam preparation.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      subjects: [
        'Real Numbers',
        'Polynomials',
        'Linear Equations',
        'Quadratic Equations',
        'Arithmetic Progressions',
        'Coordinate Geometry',
        'Triangles',
        'Circles',
        'Areas & Volumes',
        'Statistics',
        'Probability',
      ],
    },
    'class-12': {
      title: 'CBSE Class 12 Mathematics',
      description:
        'Advanced mathematics concepts for Class 12 CBSE including Calculus, Vectors, and Probability with detailed explanations and board exam preparation.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      subjects: [
        'Relations & Functions',
        'Inverse Trigonometry',
        'Matrices',
        'Determinants',
        'Continuity & Differentiability',
        'Applications of Derivatives',
        'Integrals',
        'Differential Equations',
        'Vector Algebra',
        '3D Geometry',
        'Linear Programming',
        'Probability',
      ],
    },
    'iit-jee': {
      title: 'IIT-JEE Mathematics',
      description:
        'Complete JEE preparation with advanced problem-solving techniques, previous year questions, and competitive exam strategies.',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      subjects: [
        'Complex Numbers',
        'Sequences & Series',
        'Permutations & Combinations',
        'Functions',
        'Limits & Continuity',
        'Differentiation',
        'Integration',
        'Coordinate Geometry',
        'Vector & 3D Geometry',
        'Probability',
        'Mathematical Reasoning',
      ],
    },
  }

  const currentClass = classInfo[className as keyof typeof classInfo]

  const fetchPlaylists = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/youtube/playlists?class=${className}`)
      const data = await response.json()
      setPlaylists(data.playlists || [])
    } catch (error) {
      console.error('Error fetching playlists:', error)
    } finally {
      setLoading(false)
    }
  }, [className])

  const filterAndSortPlaylists = useCallback(() => {
    const filtered = playlists.filter(
      (playlist) =>
        playlist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Sort playlists
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'date':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        case 'videoCount':
          return b.videoCount - a.videoCount
        default:
          return 0
      }
    })

    setFilteredPlaylists(filtered)
  }, [playlists, searchQuery, sortBy])

  useEffect(() => {
    fetchPlaylists()
  }, [fetchPlaylists])

  useEffect(() => {
    filterAndSortPlaylists()
  }, [filterAndSortPlaylists])

  if (!currentClass) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Class Not Found</h1>
          <p className="text-gray-600 mb-8">The requested class page does not exist.</p>
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className=" min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`py-30 bg-[#050529]`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link
              href="/courses"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Courses</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{currentClass.title}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{currentClass.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <BookOpen className="h-5 w-5" />
                <span>{playlists.length} Playlists</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
                <PlayCircle className="h-5 w-5" />
                <span>{playlists.reduce((total, playlist) => total + playlist.videoCount, 0)} Videos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search playlists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'title' | 'date' | 'videoCount')}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="title">Sort by Title</option>
                <option value="date">Sort by Date</option>
                <option value="videoCount">Sort by Video Count</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Playlists Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <LoadingSpinner />
          ) : filteredPlaylists.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Playlists Found</h2>
              <p className="text-gray-600 mb-8">
                {searchQuery ? `No playlists match your search for "${searchQuery}"` : 'No playlists available for this class yet.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlaylists.map((playlist) => (
                <Link key={playlist.id} href={`/courses/${className}/${playlist.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
                    {/* Thumbnail */}
                    <div className="relative w-full h-48">
                      <Image
                        src={playlist.thumbnail.url}
                        alt={playlist.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {playlist.videoCount} videos
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {playlist.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{playlist.description}</p>

                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(playlist.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <PlayCircle className="h-4 w-4" />
                          <span>{playlist.videoCount} videos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

