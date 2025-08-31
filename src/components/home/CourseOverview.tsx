'use client'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Award, Target, TrendingUp, PlayCircle, Download } from 'lucide-react'

const CourseOverview = () => {
  const courses = [
    {
      title: "CBSE Class 10",
      description: "Complete Class 10 CBSE Maths syllabus with step-by-step explanations and practice questions.",
      keyFeatures: [
        "NCERT Solutions Explained",
        "Board Exam Question Bank",
        "Step-by-Step Problem Solving",
        "Formula Sheets & Quick Notes"
      ],
      link: "/courses/class-10",
      color: "from-green-400 to-green-600",
      bgPattern: "bg-green-50",
      badge: "Foundation Level"
    },
    {
      title: "CBSE Class 12",
      description: "Comprehensive Class 12 Maths including Differentiation, Integration, Vectors, Probability & more.",
      keyFeatures: [
        "Calculus Made Easy",
        "Board Exam Pattern Questions",
        "Competitive Exam Preparation",
        "Advanced Problem Techniques"
      ],
      link: "/courses/class-12",
      color: "from-blue-400 to-blue-600",
      bgPattern: "bg-blue-50",
      badge: "Intermediate Level"
    },
    {
      title: "IIT-JEE Mathematics",
      description: "Target JEE with detailed problem-solving, PYQs, and advanced concepts in Calculus, Algebra, and Coordinate Geometry.",
      keyFeatures: [
        "JEE Main & Advanced Strategy",
        "Previous 20 Years Questions",
        "Rank Booster Techniques",
        "Time Management Tips"
      ],
      link: "/courses/iit-jee",
      color: "from-purple-400 to-purple-600",
      bgPattern: "bg-purple-50",
      badge: "Advanced Level"
    }
  ]

  const courseHighlights = [
    {
      icon: PlayCircle,
      title: "HD Video Lectures",
      description: "Crystal clear explanations"
    },
    {
      icon: Download,
      title: "Downloadable Notes",
      description: "Study material included"
    },
    {
      icon: Target,
      title: "Exam Focused",
      description: "Syllabus aligned content"
    },
    {
      icon: Award,
      title: "Expert Teaching",
      description: "5+ years experience"
    }
  ]

  return (
    <section className="py-20 bg-[#313157]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Comprehensive mathematics courses designed to help you excel in CBSE and competitive exams
          </p>
          
          {/* Course Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {courseHighlights.map((highlight) => (
              <div key={highlight.title} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                <highlight.icon className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm">{highlight.title}</h3>
                <p className="text-xs text-gray-600 text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="space-y-8 lg:space-y-12">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className={`${course.bgPattern} rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-block bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    {course.badge}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {course.description}
                  </p>

                  {/* Removed stats grid */}

                  <a
                    href={course.link}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${course.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <span>View Course</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#03034A] rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-500" />
                      What You will Get
                    </h4>
                    <div className="space-y-4">
                      {course.keyFeatures.map((feature, featureIndex) => (
                        <div 
                          key={feature}
                          className="flex items-start space-x-3 animate-in slide-in-from-left duration-300"
                          style={{ animationDelay: `${featureIndex * 100}ms` }}
                        >
                          <CheckCircle className={`h-5 w-5 mt-0.5 text-green-500 flex-shrink-0`} />
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Success Metrics */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-white">Success Rate: 95%</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4 text-blue-500" />
                          <span className="text-white">Updated 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Excel in Mathematics?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their mathematics understanding with our structured approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>View All Courses</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://www.youtube.com/@thetafyclasses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105"
              >
                <PlayCircle className="h-5 w-5" />
                <span>Free YouTube Videos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverview
