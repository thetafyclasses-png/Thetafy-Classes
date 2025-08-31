// 'use client'

// import { CheckCircle, Award, Users, BookOpen, TrendingUp, Clock, Target, Zap } from 'lucide-react'

// const WhyLearnSection = () => {
//   const highlights = [
//     {
//       icon: Award,
//       title: "5+ Years Experience",
//       description: "Decade of expertise in teaching CBSE and competitive mathematics",
//       color: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: Zap,
//       title: "Simplified Explanations",
//       description: "Complex topics broken down into easy-to-understand concepts",
//       color: "from-green-500 to-green-600"
//     },
//     {
//       icon: BookOpen,
//       title: "Complete Study Materials",
//       description: "Notes, formula sheets, and previous year questions available",
//       color: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: Users,
//       title: "1000+ Students Benefited",
//       description: "Thousands of students have achieved their dream scores",
//       color: "from-red-500 to-red-600"
//     },
//     {
//       icon: Target,
//       title: "Exam-Focused Approach",
//       description: "Strategic preparation targeting specific exam patterns",
//       color: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: Clock,
//       title: "Flexible Learning",
//       description: "Learn at your own pace with 24/7 access to video content",
//       color: "from-indigo-500 to-indigo-600"
//     }
//   ]

//   // const achievements = [
//   //   { number: "95%", label: "Average Score Improvement", icon: TrendingUp },
//   //   { number: "1000+", label: "Students Taught", icon: Users },
//   //   { number: "500+", label: "Video Lessons", icon: BookOpen },
//   //   { number: "5+", label: "Years Experience", icon: Award }
//   // ]

//   return (
//     <section className="py-20 bg-[#313157]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Why Learn with <span className="gradient-text">Suraj Sir?</span>
//           </h2>
//           <p className="text-xl text-white max-w-3xl mx-auto">
//             Join thousands of successful students who have transformed their mathematics journey with our proven teaching methods
//           </p>
//         </div>

//         {/* Highlights Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {highlights.map((highlight, index) => (
//             <div 
//               key={highlight.title}
//               className="group bg-gray-50 rounded-2xl p-8 card-hover animate-slide-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 <highlight.icon className="h-8 w-8 text-white" />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//                 {highlight.title}
//               </h3>
              
//               <p className="text-gray-600 leading-relaxed">
//                 {highlight.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Achievement Stats */}
//         {/* <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 lg:p-12">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
//               Proven Track Record
//             </h3>
//             <p className="text-blue-100 text-lg max-w-2xl mx-auto">
//               Numbers that speak for our commitment to student success
//             </p>
//           </div>

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {achievements.map((achievement, index) => (
//               <div 
//                 key={achievement.label}
//                 className="text-center animate-slide-up"
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
//                   <achievement.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
//                   {achievement.number}
//                 </div>
//                 <div className="text-blue-100 font-medium">
//                   {achievement.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Teaching Philosophy */}
//         <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
//               My Teaching <span className="gradient-text">Philosophy</span>
//             </h3>
//             <p className="text-lg text-white mb-8 leading-relaxed">
//               Mathematics is not about memorizing formulas—it's about understanding patterns, 
//               developing logical thinking, and building confidence to solve any problem. 
//               My approach focuses on conceptual clarity first, then application.
//             </p>

//             <div className="space-y-4">
//               {[
//                 "Start with fundamentals and build complexity gradually",
//                 "Use real-world examples to make abstract concepts tangible",
//                 "Practice with varied problem types for complete mastery",
//                 "Regular assessments to track progress and identify gaps",
//                 "Personal attention to every student's learning needs"
//               ].map((point, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
//                   <p className="text-white">{point}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 lg:p-12">
//               <div className="text-center">
//                 <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
//                   <BookOpen className="h-16 w-16 text-white" />
//                 </div>
//                 <blockquote className="text-xl font-medium text-gray-800 italic mb-4">
//                   "The best teachers are those who show you where to look, but don't tell you what to see."
//                 </blockquote>
//                 <p className="text-gray-600 font-semibold">- Teaching Motto</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WhyLearnSection

'use client'

import { CheckCircle, Award, Users, BookOpen, Clock, Target, Zap } from 'lucide-react'

const WhyLearnSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Decade of expertise in teaching CBSE and competitive mathematics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Simplified Explanations",
      description: "Complex topics broken down into easy-to-understand concepts",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Complete Study Materials",
      description: "Notes, formula sheets, and previous year questions available",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "1000+ Students Benefited",
      description: "Thousands of students have achieved their dream scores",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Target,
      title: "Exam-Focused Approach",
      description: "Strategic preparation targeting specific exam patterns",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Learn at your own pace with 24/7 access to video content",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-20 bg-[#313157]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Learn with <span className="gradient-text">Suraj Sir?</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Join thousands of successful students who have transformed their mathematics journey with our proven teaching methods
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className="group bg-gray-50 rounded-2xl p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              My Teaching <span className="gradient-text">Philosophy</span>
            </h3>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Mathematics is not about memorizing formulas—it&apos;s about understanding patterns, 
              developing logical thinking, and building confidence to solve any problem. 
              My approach focuses on conceptual clarity first, then application.
            </p>

            <div className="space-y-4">
              {[
                "Start with fundamentals and build complexity gradually",
                "Use real-world examples to make abstract concepts tangible",
                "Practice with varied problem types for complete mastery",
                "Regular assessments to track progress and identify gaps",
                "Personal attention to every student&apos;s learning needs"
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <blockquote className="text-xl font-medium text-gray-800 italic mb-4">
                  &quot;The best teachers are those who show you where to look, but don&apos;t tell you what to see.&quot;
                </blockquote>
                <p className="text-gray-600 font-semibold">- Teaching Motto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLearnSection
