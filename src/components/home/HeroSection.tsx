"use client"

import Link from 'next/link'
import { ArrowRight, Play, Users, BookOpen, Award, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Learn CBSE & IIT-JEE Maths with Suraj Sir",
    "Master Complex Topics with Simple Methods",
    "Achieve Your Dream Scores in Mathematics"
  ]

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % texts.length)
      }, 3000)
      return () => clearInterval(interval)
    }, [texts.length]) // added texts.length as dependency


  const stats = [
    { icon: Users, value: "1000+", label: "Students Taught" },
    { icon: BookOpen, value: "50+", label: "Video Lessons" },
    { icon: Award, value: "95%+", label: "Success Rate" },
    { icon: TrendingUp, value: "5+", label: "Years Experience" }
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-start sm:justify-center items-center overflow-hidden pt-20 sm:pt-0">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-[#050529]"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with text rotation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="h-20 sm:h-24 lg:h-32 flex items-center justify-center">
              <span 
                key={currentText}
                className="animate-fade-in"
              >
                {texts[currentText]}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
            Simplifying Maths concepts for Class 10, Class 12, and IIT-JEE aspirants 
            with <span className="text-yellow-300 font-medium">easy explanations</span> and 
            <span className="text-yellow-300 font-medium"> practice questions</span>
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
            <Link
              href="/courses"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 btn-hover shadow-lg"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="https://www.youtube.com/@thetafyclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 btn-hover"
            >
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch on YouTube</span>
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection