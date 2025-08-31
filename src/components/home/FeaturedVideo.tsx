'use client'
import Image from "next/image"

import { useState } from 'react'
import { Play, X } from 'lucide-react'

const FeaturedVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  
  // Replace with your actual featured video ID
  const featuredVideoId = "dQw4w9WgXcQ" // Example YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Masterclass</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our most popular differentiation masterclass and see why thousands of students love learning with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            {/* Video Thumbnail */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={thumbnailUrl || "/api/placeholder/800/450"}
                alt="Featured Video Thumbnail"
                width={800}
                height={450}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/api/placeholder/800/450"
                }}
              />

              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 text-red-600 ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                  Complete Differentiation Masterclass
                </h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Master the fundamentals of differentiation with clear explanations and solved examples
                </p>
                <div className="flex items-center space-x-4 mt-4 text-gray-300 text-sm">
                  <span>45 minutes</span>
                  <span>•</span>
                  <span>150K+ views</span>
                  <span>•</span>
                  <span>98% liked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">150K+</div>
              <div className="text-gray-600 text-sm sm:text-base">Views</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">4.9K</div>
              <div className="text-gray-600 text-sm sm:text-base">Likes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Comments</div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative w-full max-w-4xl">
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Video Player */}
              <div className="video-responsive bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&rel=0`}
                  title="Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedVideo