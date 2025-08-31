// // import { Award, Users, BookOpen, Clock, Target, Heart, TrendingUp, Star } from 'lucide-react'
// // import Image from 'next/image'

// // export default function AboutPage() {
// //   const achievements = [
// //     { icon: Users, number: "1000+", label: "Students Taught" },
// //     { icon: BookOpen, number: "5+", label: "Years Experience" },
// //     { icon: TrendingUp, number: "95%", label: "Success Rate" },
// //     { icon: Star, number: "4.9", label: "Average Rating" }
// //   ]

  
// //   const values = [
// //     {
// //       icon: Heart,
// //       title: "Passion for Teaching",
// //       description: "Every lesson is crafted with genuine care and dedication to student success."
// //     },
// //     {
// //       icon: Target,
// //       title: "Result-Oriented",
// //       description: "Focus on practical problem-solving and exam-specific preparation strategies."
// //     },
// //     {
// //       icon: Users,
// //       title: "Student-Centric",
// //       description: "Personalized approach understanding each student's unique learning pace."
// //     }
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Hero Section */}
// //       <section className="py-30 bg-[#050529]">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="text-white">
// //               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
// //                 About <span className="text-yellow-300">Suraj Sir</span>
// //               </h1>
// //               <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
// //                 Passionate mathematics educator dedicated to transforming how students 
// //                 learn and excel in mathematics through innovative teaching methods.
// //               </p>
              
// //               {/* Quick Stats */}
// //               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //                 {achievements.map((achievement) => (
// //                   <div key={achievement.label} className="text-center">
// //                     <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
// //                       <achievement.icon className="h-6 w-6 text-white" />
// //                     </div>
// //                     <div className="text-2xl font-bold">{achievement.number}</div>
// //                     <div className="text-blue-200 text-sm">{achievement.label}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="relative">
// //               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
// //                 <div className="w-64 h-80 bg-gradient-to-b from-gray-200 to-gray-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
// //                   <Image 
// //                     src="/suraj.png" 
// //                     alt="Teacher" 
// //                     width={200} 
// //                     height={220} 
// //                     className="rounded-full object-cover" 
// //                   />
// //                 </div>
// //                 <div className="text-center text-white">
// //                   <h2 className="text-2xl font-bold mb-2">Suraj Chauhan</h2>
// //                   <p className="text-blue-200">Mathematics Educator & Mentor</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Story Section */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="text-center mb-16">
// //               <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Journey</h2>
// //               <p className="text-xl text-gray-600">
// //                 From a passionate mathematics student to an educator impacting thousands of lives
// //               </p>
// //             </div>

// //             <div className="prose prose-lg max-w-none text-gray-700">
// //               <p className="text-xl leading-relaxed mb-8">
// //                 Hi, I am Suraj Chauhan, and mathematics has been my passion since childhood. 
// //                 What started as a love for solving complex problems has evolved into a mission 
// //                 to help students across India excel in mathematics.
// //               </p>

// //               <p className="leading-relaxed mb-8">
// //                 My journey in education began over a decade ago when I realized that many 
// //                 students struggle with mathematics not because they lack intelligence, but 
// //                 because they have not been taught in a way that makes sense to them. 
// //                 This realization became the foundation of my teaching philosophy.
// //               </p>

// //               <p className="leading-relaxed mb-8">
// //                 Over the years, I have developed a unique teaching methodology that breaks down 
// //                 complex mathematical concepts into simple, digestible parts. Whether it is 
// //                 explaining calculus to a Class 12 student or helping a JEE aspirant master 
// //                 coordinate geometry, my approach remains the same: start with fundamentals, 
// //                 build confidence, and then tackle advanced problems.
// //               </p>

// //               <p className="leading-relaxed mb-8">
// //                 {`What drives me every day is seeing the "aha!" moment in a student's eyes when 
// //                 they finally understand a concept they've been struggling with. That moment of 
// //                 clarity, followed by growing confidence in their mathematical abilities, is why 
// //                 I chose to dedicate my life to teaching.`}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Teaching Philosophy */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Philosophy</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               {`Mathematics is not about memorization—it's about understanding patterns and developing logical thinking`}
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8 mb-16">
// //             {values.map((value) => (
// //               <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover">
// //                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
// //                   <value.icon className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
// //                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
// //             <div className="grid lg:grid-cols-2 gap-12 items-center">
// //               <div>
// //                 <h3 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h3>
// //                 <ul className="space-y-4">
// //                   {[
// //                     `Conceptual Clarity: Understanding 'why' before 'how'`,
// //                     `Step-by-step Problem Solving: Breaking complex problems into manageable steps`,
// //                     `Real-world Applications: Connecting mathematics to everyday life`,
// //                     `Practice with Purpose: Quality over quantity in problem selection`,
// //                     `Individual Attention: Recognizing each student's unique learning style`,
// //                     `Exam Strategy: Specific techniques for different exam patterns`
// //                   ].map((approach, index) => (
// //                     <li key={index} className="flex items-start space-x-3">
// //                       <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
// //                         <span className="text-white text-xs font-bold">{index + 1}</span>
// //                       </div>
// //                       <span className="text-gray-700">{approach}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
              
// //               <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
// //                 <blockquote className="text-center">
// //                   <p className="text-xl font-medium text-gray-800 italic mb-6">
// //                     {`"The beautiful thing about learning is that no one can take it away from you. 
// //                     My goal is to make that learning journey in mathematics as smooth and enjoyable as possible."`}
// //                   </p>
// //                   <footer className="text-gray-600 font-semibold">- Suraj Sir</footer>
// //                 </blockquote>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>


// //       {/* Call to Action */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Mathematics Journey?</h2>
// //           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
// //             Join thousands of students who have transformed their understanding of mathematics
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <a
// //               href="/courses"
// //               className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors btn-hover"
// //             >
// //               <BookOpen className="h-5 w-5" />
// //               <span>Explore Courses</span>
// //             </a>
// //             <a
// //               href="https://www.youtube.com/@thetafyclasses"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-hover"
// //             >
// //               <Users className="h-5 w-5" />
// //               <span>Watch Free Videos</span>
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }


// import { Users, BookOpen, Target, Heart, TrendingUp, Star } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function AboutPage() {
//   const achievements = [
//     { icon: Users, number: "1000+", label: "Students Taught" },
//     { icon: BookOpen, number: "5+", label: "Years Experience" },
//     { icon: TrendingUp, number: "95%", label: "Success Rate" },
//     { icon: Star, number: "4.9", label: "Average Rating" }
//   ]

//   const values = [
//     {
//       icon: Heart,
//       title: "Passion for Teaching",
//       description: "Every lesson is crafted with genuine care and dedication to student success."
//     },
//     {
//       icon: Target,
//       title: "Result-Oriented",
//       description: "Focus on practical problem-solving and exam-specific preparation strategies."
//     },
//     {
//       icon: Users,
//       title: "Student-Centric",
//       description: "Personalized approach understanding each student's unique learning pace."
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="py-30 bg-[#050529]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="text-white">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
//                 About <span className="text-yellow-300">Suraj Sir</span>
//               </h1>
//               <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
//                 Passionate mathematics educator dedicated to transforming how students 
//                 learn and excel in mathematics through innovative teaching methods.
//               </p>
              
//               {/* Quick Stats */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {achievements.map((achievement) => (
//                   <div key={achievement.label} className="text-center">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
//                       <achievement.icon className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="text-2xl font-bold">{achievement.number}</div>
//                     <div className="text-blue-200 text-sm">{achievement.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
//                 <div className="w-64 h-80 bg-gradient-to-b from-gray-200 to-gray-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
//                   <Image 
//                     src="/suraj.png" 
//                     alt="Teacher" 
//                     width={200} 
//                     height={220} 
//                     className="rounded-full object-cover" 
//                   />
//                 </div>
//                 <div className="text-center text-white">
//                   <h2 className="text-2xl font-bold mb-2">Suraj Chauhan</h2>
//                   <p className="text-blue-200">Mathematics Educator & Mentor</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Journey</h2>
//               <p className="text-xl text-gray-600">
//                 From a passionate mathematics student to an educator impacting thousands of lives
//               </p>
//             </div>

//             <div className="prose prose-lg max-w-none text-gray-700">
//               <p className="text-xl leading-relaxed mb-8">
//                 Hi, I am Suraj Chauhan, and mathematics has been my passion since childhood. 
//                 What started as a love for solving complex problems has evolved into a mission 
//                 to help students across India excel in mathematics.
//               </p>

//               <p className="leading-relaxed mb-8">
//                 My journey in education began over a decade ago when I realized that many 
//                 students struggle with mathematics not because they lack intelligence, but 
//                 because they have not been taught in a way that makes sense to them. 
//                 This realization became the foundation of my teaching philosophy.
//               </p>

//               <p className="leading-relaxed mb-8">
//                 Over the years, I have developed a unique teaching methodology that breaks down 
//                 complex mathematical concepts into simple, digestible parts. Whether it is 
//                 explaining calculus to a Class 12 student or helping a JEE aspirant master 
//                 coordinate geometry, my approach remains the same: start with fundamentals, 
//                 build confidence, and then tackle advanced problems.
//               </p>

//               <p className="leading-relaxed mb-8">
//                 {`What drives me every day is seeing the "aha!" moment in a student's eyes when 
//                 they finally understand a concept they've been struggling with. That moment of 
//                 clarity, followed by growing confidence in their mathematical abilities, is why 
//                 I chose to dedicate my life to teaching.`}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Teaching Philosophy */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Philosophy</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               {`Mathematics is not about memorization—it's about understanding patterns and developing logical thinking`}
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {values.map((value) => (
//               <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
//                   <value.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h3>
//                 <ul className="space-y-4">
//                   {[
//                     `Conceptual Clarity: Understanding 'why' before 'how'`,
//                     `Step-by-step Problem Solving: Breaking complex problems into manageable steps`,
//                     `Real-world Applications: Connecting mathematics to everyday life`,
//                     `Practice with Purpose: Quality over quantity in problem selection`,
//                     `Individual Attention: Recognizing each student's unique learning style`,
//                     `Exam Strategy: Specific techniques for different exam patterns`
//                   ].map((approach, index) => (
//                     <li key={index} className="flex items-start space-x-3">
//                       <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <span className="text-white text-xs font-bold">{index + 1}</span>
//                       </div>
//                       <span className="text-gray-700">{approach}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
//                 <blockquote className="text-center">
//                   <p className="text-xl font-medium text-gray-800 italic mb-6">
//                     {`"The beautiful thing about learning is that no one can take it away from you. 
//                     My goal is to make that learning journey in mathematics as smooth and enjoyable as possible."`}
//                   </p>
//                   <footer className="text-gray-600 font-semibold">- Suraj Sir</footer>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Mathematics Journey?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of students who have transformed their understanding of mathematics
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/courses"
//               className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors btn-hover"
//             >
//               <BookOpen className="h-5 w-5" />
//               <span>Explore Courses</span>
//             </Link>
//             <a
//               href="https://www.youtube.com/@thetafyclasses"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-hover"
//             >
//               <Users className="h-5 w-5" />
//               <span>Watch Free Videos</span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import { Suspense } from 'react'
import { Users, BookOpen, Target, Heart, TrendingUp, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Separate component for the main content
function AboutContent() {
  // If you need search parameters in the future, add useSearchParams() here
  // const searchParams = useSearchParams()
  
  const achievements = [
    { icon: Users, number: "1000+", label: "Students Taught" },
    { icon: BookOpen, number: "5+", label: "Years Experience" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Teaching",
      description: "Every lesson is crafted with genuine care and dedication to student success."
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Focus on practical problem-solving and exam-specific preparation strategies."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Personalized approach understanding each student's unique learning pace."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-30 bg-[#050529]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-yellow-300">Suraj Sir</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
                Passionate mathematics educator dedicated to transforming how students 
                learn and excel in mathematics through innovative teaching methods.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{achievement.number}</div>
                    <div className="text-blue-200 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="w-64 h-80 bg-gradient-to-b from-gray-200 to-gray-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Image 
                    src="/suraj.png" 
                    alt="Teacher" 
                    width={200} 
                    height={220} 
                    className="rounded-full object-cover" 
                  />
                </div>
                <div className="text-center text-white">
                  <h2 className="text-2xl font-bold mb-2">Suraj Chauhan</h2>
                  <p className="text-blue-200">Mathematics Educator & Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Journey</h2>
              <p className="text-xl text-gray-600">
                From a passionate mathematics student to an educator impacting thousands of lives
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Hi, I am Suraj Chauhan, and mathematics has been my passion since childhood. 
                What started as a love for solving complex problems has evolved into a mission 
                to help students across India excel in mathematics.
              </p>

              <p className="leading-relaxed mb-8">
                My journey in education began over a decade ago when I realized that many 
                students struggle with mathematics not because they lack intelligence, but 
                because they have not been taught in a way that makes sense to them. 
                This realization became the foundation of my teaching philosophy.
              </p>

              <p className="leading-relaxed mb-8">
                Over the years, I have developed a unique teaching methodology that breaks down 
                complex mathematical concepts into simple, digestible parts. Whether it is 
                explaining calculus to a Class 12 student or helping a JEE aspirant master 
                coordinate geometry, my approach remains the same: start with fundamentals, 
                build confidence, and then tackle advanced problems.
              </p>

              <p className="leading-relaxed mb-8">
                {`What drives me every day is seeing the "aha!" moment in a student's eyes when 
                they finally understand a concept they've been struggling with. That moment of 
                clarity, followed by growing confidence in their mathematical abilities, is why 
                I chose to dedicate my life to teaching.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {`Mathematics is not about memorization—it's about understanding patterns and developing logical thinking`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h3>
                <ul className="space-y-4">
                  {[
                    `Conceptual Clarity: Understanding 'why' before 'how'`,
                    `Step-by-step Problem Solving: Breaking complex problems into manageable steps`,
                    `Real-world Applications: Connecting mathematics to everyday life`,
                    `Practice with Purpose: Quality over quantity in problem selection`,
                    `Individual Attention: Recognizing each student's unique learning style`,
                    `Exam Strategy: Specific techniques for different exam patterns`
                  ].map((approach, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <blockquote className="text-center">
                  <p className="text-xl font-medium text-gray-800 italic mb-6">
                    {`"The beautiful thing about learning is that no one can take it away from you. 
                    My goal is to make that learning journey in mathematics as smooth and enjoyable as possible."`}
                  </p>
                  <footer className="text-gray-600 font-semibold">- Suraj Sir</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Mathematics Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their understanding of mathematics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors btn-hover"
            >
              <BookOpen className="h-5 w-5" />
              <span>Explore Courses</span>
            </Link>
            <a
              href="https://www.youtube.com/@thetafyclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-hover"
            >
              <Users className="h-5 w-5" />
              <span>Watch Free Videos</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Main About page component with Suspense boundary
export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>}>
      <AboutContent />
    </Suspense>
  )
}