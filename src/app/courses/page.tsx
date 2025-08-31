// 'use client'
// import { useState } from 'react'
// import { BookOpen, Users, Clock, PlayCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

// export default function CoursesPage() {
//   // State to track which course's topics are expanded
// const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

// const toggleTopics = (courseId: string) => {
//   setExpandedCourse(expandedCourse === courseId ? null : courseId)
// }


//   const courses = [
//     {
//       id: 'class-10',
//       title: 'CBSE Class 10 Mathematics',
//       description:
//         'Complete Class 10 CBSE Maths syllabus with step-by-step explanations and practice questions. Perfect foundation for higher mathematics.',
//       image: '/images/class-10-thumb.jpg',
//       topics: [
//         'Real Numbers',
//         'Polynomials',
//         'Linear Equations',
//         'Quadratic Equations',
//         'Arithmetic Progressions',
//         'Coordinate Geometry',
//         'Triangles',
//         'Circles',
//         'Constructions',
//         'Areas & Volumes',
//         'Statistics',
//         'Probability',
//       ],
//       highlights: [
//         'NCERT Solutions Explained',
//         'Previous Year Questions',
//         'Sample Papers with Solutions',
//         'Important Formulas Sheet',
//       ],
//       color: 'from-green-500 to-emerald-600',
//       bgColor: "bg-[#050529]",
//       borderGradient: 'from-green-400 via-emerald-500 to-green-600',
//     },
//     {
//       id: 'class-12',
//       title: 'CBSE Class 12 Mathematics',
//       description:
//         'Comprehensive Class 12 Maths including Calculus, Vectors, Probability and more. Essential for board exams and competitive preparation.',
//       image: '/images/class-12-thumb.jpg',
//       topics: [
//         'Relations & Functions',
//         'Inverse Trigonometric Functions',
//         'Matrices & Determinants',
//         'Continuity & Differentiability',
//         'Applications of Derivatives',
//         'Integrals',
//         'Applications of Integrals',
//         'Differential Equations',
//         'Vector Algebra',
//         'Three Dimensional Geometry',
//         'Linear Programming',
//         'Probability',
//       ],
//       highlights: [
//         'Detailed Theory Explanations',
//         'Board Exam Pattern Questions',
//         'Calculus Made Simple',
//         'Integration Techniques Mastery',
//       ],
//       color: 'from-blue-500 to-blue-600',
//       bgColor: "bg-[#050529]",
//       borderGradient: 'from-blue-400 via-cyan-500 to-blue-600',
//     },
//     {
//       id: 'iit-jee',
//       title: 'IIT-JEE Mathematics',
//       description:
//         'Target JEE with detailed problem-solving, previous year questions, and advanced concepts. Complete preparation for JEE Main & Advanced.',
//       image: '/images/jee-thumb.jpg',
//       topics: [
//         'Complex Numbers',
//         'Quadratic Equations & Expressions',
//         'Sequences & Series',
//         'Permutations & Combinations',
//         'Binomial Theorem',
//         'Mathematical Induction',
//         'Matrices & Determinants',
//         'Functions',
//         'Limits & Continuity',
//         'Differentiation',
//         'Applications of Derivatives',
//         'Integration',
//         'Definite Integration',
//         'Differential Equations',
//         'Coordinate Geometry',
//         'Vector & 3D Geometry',
//         'Probability',
//         'Mathematical Reasoning',
//       ],
//       highlights: [
//         'JEE Main & Advanced Pattern',
//         'Previous 20 Years Questions',
//         'Rank Booster Problems',
//         'Time-Saving Techniques',
//       ],
//       color: 'from-purple-500 to-indigo-600',
//       bgColor: "bg-[#050529]",
//       borderGradient: 'from-purple-400 via-pink-500 to-indigo-600',
//     },
//   ]

//   // Animated border wrapper
//   const AnimatedBorderWrapper = ({ children, courseType, className = "" }) => {
//     const getBorderColors = (type) => {
//       switch (type) {
//         case 'class-10':
//           return { color1: '#10b981', color2: '#059669', color3: '#047857' }
//         case 'class-12':
//           return { color1: '#3b82f6', color2: '#06b6d4', color3: '#2563eb' }
//         default: // iit-jee
//           return { color1: '#8b5cf6', color2: '#ec4899', color3: '#6366f1' }
//       }
//     }

//     const colors = getBorderColors(courseType)
    
//     return (
//       <div className={`relative p-1 rounded-3xl overflow-hidden ${className}`}>
//         {/* Rotating border */}
//         <div 
//           className="absolute inset-0 rounded-3xl animate-spin"
//           style={{
//             background: `conic-gradient(from 0deg, transparent, ${colors.color1}, ${colors.color2}, ${colors.color3}, transparent)`,
//             animationDuration: '4s',
//             animationTimingFunction: 'linear',
//             animationIterationCount: 'infinite',
//             opacity: '0.6'
//           }}
//         />
        
//         {/* Pulsing border */}
//         <div 
//           className="absolute inset-0 rounded-3xl animate-pulse"
//           style={{
//             background: `linear-gradient(45deg, transparent, ${colors.color1}, transparent, ${colors.color2}, transparent)`,
//             animationDuration: '2s',
//             opacity: '0.4'
//           }}
//         />
        
//         {/* Content */}
//         <div className="relative z-10 bg-[#050529] rounded-3xl">
//           {children}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-black">

//       {/* Hero Section */}
//       <section className="py-30 bg-[#050529]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//             Explore Our <span className="text-yellow-300">Mathematics Courses</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Comprehensive courses designed to help you master mathematics and excel in your exams
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
//               <Users className="h-5 w-5" />
//               <span>1000+ Students</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
//               <PlayCircle className="h-5 w-5" />
//               <span>50+ Videos</span>
//             </div>
//             <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
//               <Clock className="h-5 w-5" />
//               <span>100+ Hours</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-12">
//             {courses.map((course, index) => (
//               <div
//                 key={course.id}
//                 className="course-card group transition-all duration-500 hover:scale-[1.02]"
//               >
//                 <AnimatedBorderWrapper 
//                   courseType={course.id}
//                   className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
//                 >
//                   <div className="p-8 lg:p-12 shadow-2xl">
//                     <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//                       <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
//                         <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
//                           {course.title}
//                         </h2>

//                         <p className="text-lg text-white mb-6 group-hover:text-gray-100 transition-colors duration-300">{course.description}</p>

//                         {/* Topics Dropdown */}
//                         <div className="mb-8">
//                           <button
//                             onClick={() => toggleTopics(course.id)}
//                             className="flex items-center justify-between w-full bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group-hover:bg-gray-50"
//                           >
//                             <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
//                               <BookOpen className="h-5 w-5 text-gray-600" />
//                               <span>Topics Covered ({course.topics.length})</span>
//                             </h3>
//                             {expandedCourse === course.id ? (
//                               <ChevronUp className="h-5 w-5 text-gray-600" />
//                             ) : (
//                               <ChevronDown className="h-5 w-5 text-gray-600" />
//                             )}
//                           </button>

//                           {expandedCourse === course.id && (
//                             <div className="mt-4 bg-white rounded-xl p-6 shadow-lg border border-gray-200 animate-in slide-in-from-top duration-300">
//                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                                 {course.topics.map((topic, topicIndex) => (
//                                   <div
//                                     key={topic}
//                                     className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 animate-in slide-in-from-left"
//                                     style={{ animationDelay: `${topicIndex * 50}ms` }}
//                                   >
//                                     <div className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full flex-shrink-0`}></div>
//                                     <span className="text-gray-700 text-sm font-medium">{topic}</span>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>

//                         {/* Highlights */}
//                         <div className="mb-8">
//                           <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
//                             Course Highlights
//                           </h3>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                             {course.highlights.map((highlight) => (
//                               <div
//                                 key={highlight}
//                                 className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg hover:bg-white/60 transition-colors duration-300"
//                               >
//                                 <div className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full flex-shrink-0`}></div>
//                                 <span className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">{highlight}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Explore Button */}
//                         <a
//                           href={`/courses/${course.id}`}
//                           className={`inline-flex items-center space-x-2 bg-gradient-to-r ${course.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
//                         >
//                           <span>Explore Course</span>
//                           <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
//                         </a>
//                       </div>

//                       {/* Course Image */}
//                       <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
//                         <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-500">
//                           <a 
//                             href={`/courses/${course.id}`}
//                             className="block group cursor-pointer"
//                           >
//                             <div className="relative overflow-hidden rounded-xl">
//                               <div className="image-aspect-ratio course-image-container">
//                                 <img
//                                   src={`/${course.id}.jpg`}
//                                   alt={course.title}
//                                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
//                                   loading="lazy"
//                                 />
//                               </div>
//                               {/* Overlay on hover */}
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
//                                 <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                                   <PlayCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 drop-shadow-lg" />
//                                   <p className="font-semibold text-sm sm:text-base drop-shadow-md">View Course</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </a>
//                           <div className="mt-3 sm:mt-4 text-center">
//                             <p className="text-xs sm:text-sm text-gray-600 font-medium hover:text-gray-700 transition-colors duration-300">
//                               Click to explore course details
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </AnimatedBorderWrapper>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//             Ready to Start Your Mathematics Journey?
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Join thousands of successful students and transform your understanding of mathematics
//           </p>
//           <a
//             href="https://www.youtube.com/@thetafyclasses"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors hover:scale-105 duration-300"
//           >
//             <PlayCircle className="h-6 w-6" />
//             <span>Watch Free Videos on YouTube</span>
//           </a>
//         </div>
//       </section>
//     </div>
//   )
// }

'use client'
import { useState, ReactNode } from 'react'
import Image from "next/image"

import {
  BookOpen,
  Users,
  Clock,
  PlayCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

export default function CoursesPage() {
  // State to track which course's topics are expanded
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const toggleTopics = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId)
  }

  const courses = [
    {
      id: 'class-10',
      title: 'CBSE Class 10 Mathematics',
      description:
        'Complete Class 10 CBSE Maths syllabus with step-by-step explanations and practice questions. Perfect foundation for higher mathematics.',
      image: '/images/class-10-thumb.jpg',
      topics: [
        'Real Numbers',
        'Polynomials',
        'Linear Equations',
        'Quadratic Equations',
        'Arithmetic Progressions',
        'Coordinate Geometry',
        'Triangles',
        'Circles',
        'Constructions',
        'Areas & Volumes',
        'Statistics',
        'Probability',
      ],
      highlights: [
        'NCERT Solutions Explained',
        'Previous Year Questions',
        'Sample Papers with Solutions',
        'Important Formulas Sheet',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'class-12',
      title: 'CBSE Class 12 Mathematics',
      description:
        'Comprehensive Class 12 Maths including Calculus, Vectors, Probability and more. Essential for board exams and competitive preparation.',
      image: '/images/class-12-thumb.jpg',
      topics: [
        'Relations & Functions',
        'Inverse Trigonometric Functions',
        'Matrices & Determinants',
        'Continuity & Differentiability',
        'Applications of Derivatives',
        'Integrals',
        'Applications of Integrals',
        'Differential Equations',
        'Vector Algebra',
        'Three Dimensional Geometry',
        'Linear Programming',
        'Probability',
      ],
      highlights: [
        'Detailed Theory Explanations',
        'Board Exam Pattern Questions',
        'Calculus Made Simple',
        'Integration Techniques Mastery',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'iit-jee',
      title: 'IIT-JEE Mathematics',
      description:
        'Target JEE with detailed problem-solving, previous year questions, and advanced concepts. Complete preparation for JEE Main & Advanced.',
      image: '/images/jee-thumb.jpg',
      topics: [
        'Complex Numbers',
        'Quadratic Equations & Expressions',
        'Sequences & Series',
        'Permutations & Combinations',
        'Binomial Theorem',
        'Mathematical Induction',
        'Matrices & Determinants',
        'Functions',
        'Limits & Continuity',
        'Differentiation',
        'Applications of Derivatives',
        'Integration',
        'Definite Integration',
        'Differential Equations',
        'Coordinate Geometry',
        'Vector & 3D Geometry',
        'Probability',
        'Mathematical Reasoning',
      ],
      highlights: [
        'JEE Main & Advanced Pattern',
        'Previous 20 Years Questions',
        'Rank Booster Problems',
        'Time-Saving Techniques',
      ],
      color: 'from-purple-500 to-indigo-600',
    },
  ]

  // ✅ Typed Animated Border Wrapper
  interface AnimatedBorderWrapperProps {
    children: ReactNode
    courseType: string
    className?: string
  }

  const AnimatedBorderWrapper: React.FC<AnimatedBorderWrapperProps> = ({
    children,
    courseType,
    className = '',
  }) => {
    const getBorderColors = (type: string) => {
      switch (type) {
        case 'class-10':
          return { color1: '#10b981', color2: '#059669', color3: '#047857' }
        case 'class-12':
          return { color1: '#3b82f6', color2: '#06b6d4', color3: '#2563eb' }
        default: // iit-jee
          return { color1: '#8b5cf6', color2: '#ec4899', color3: '#6366f1' }
      }
    }

    const colors = getBorderColors(courseType)

    return (
      <div className={`relative p-1 rounded-3xl overflow-hidden ${className}`}>
        {/* Rotating border */}
        <div
          className="absolute inset-0 rounded-3xl animate-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${colors.color1}, ${colors.color2}, ${colors.color3}, transparent)`,
            animationDuration: '4s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            opacity: '0.6',
          }}
        />

        {/* Pulsing border */}
        <div
          className="absolute inset-0 rounded-3xl animate-pulse"
          style={{
            background: `linear-gradient(45deg, transparent, ${colors.color1}, transparent, ${colors.color2}, transparent)`,
            animationDuration: '2s',
            opacity: '0.4',
          }}
        />

        {/* Content */}
        <div className="relative z-10 bg-[#050529] rounded-3xl">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-30 bg-[#050529]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our{' '}
            <span className="text-yellow-300">Mathematics Courses</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive courses designed to help you master mathematics and
            excel in your exams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
              <Users className="h-5 w-5" />
              <span>1000+ Students</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
              <PlayCircle className="h-5 w-5" />
              <span>50+ Videos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-full">
              <Clock className="h-5 w-5" />
              <span>100+ Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="course-card group transition-all duration-500 hover:scale-[1.02]"
              >
                <AnimatedBorderWrapper
                  courseType={course.id}
                  className="hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  <div className="p-8 lg:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                          {course.title}
                        </h2>

                        <p className="text-lg text-white mb-6 group-hover:text-gray-100 transition-colors duration-300">
                          {course.description}
                        </p>

                        {/* Topics Dropdown */}
                        <div className="mb-8">
                          <button
                            onClick={() => toggleTopics(course.id)}
                            className="flex items-center justify-between w-full bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group-hover:bg-gray-50"
                          >
                            <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                              <BookOpen className="h-5 w-5 text-gray-600" />
                              <span>
                                Topics Covered ({course.topics.length})
                              </span>
                            </h3>
                            {expandedCourse === course.id ? (
                              <ChevronUp className="h-5 w-5 text-gray-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-600" />
                            )}
                          </button>

                          {expandedCourse === course.id && (
                            <div className="mt-4 bg-white rounded-xl p-6 shadow-lg border border-gray-200 animate-in slide-in-from-top duration-300">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {course.topics.map((topic, topicIndex) => (
                                  <div
                                    key={topic}
                                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 animate-in slide-in-from-left"
                                    style={{
                                      animationDelay: `${topicIndex * 50}ms`,
                                    }}
                                  >
                                    <div
                                      className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full flex-shrink-0`}
                                    ></div>
                                    <span className="text-gray-700 text-sm font-medium">
                                      {topic}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Highlights */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                            Course Highlights
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {course.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg hover:bg-white/60 transition-colors duration-300"
                              >
                                <div
                                  className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full flex-shrink-0`}
                                ></div>
                                <span className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Explore Button */}
                        <a
                          href={`/courses/${course.id}`}
                          className={`inline-flex items-center space-x-2 bg-gradient-to-r ${course.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
                        >
                          <span>Explore Course</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>

                      {/* Course Image */}
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-500">
                          <a
                            href={`/courses/${course.id}`}
                            className="block group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-xl">
                              <div className="relative w-full h-64">
                                <Image
                                  src={`/${course.id}.jpg`}
                                  alt={course.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                  priority={false} // or use "loading='lazy'" in older Next.js versions
                                />
                              </div>

                              {/* Overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  <PlayCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2 drop-shadow-lg" />
                                  <p className="font-semibold text-sm sm:text-base drop-shadow-md">
                                    View Course
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className="mt-3 sm:mt-4 text-center">
                            <p className="text-xs sm:text-sm text-gray-600 font-medium hover:text-gray-700 transition-colors duration-300">
                              Click to explore course details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedBorderWrapper>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Mathematics Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students and transform your
            understanding of mathematics
          </p>
          <a
            href="https://www.youtube.com/@thetafyclasses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors hover:scale-105 duration-300"
          >
            <PlayCircle className="h-6 w-6" />
            <span>Watch Free Videos on YouTube</span>
          </a>
        </div>
      </section>
    </div>
  )
}
