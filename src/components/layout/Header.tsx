// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X, BookOpen, Youtube } from 'lucide-react'
// import Image from "next/image";


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Courses', href: '/courses' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-[#010136] backdrop-blur-sm shadow-lg' 
//           : 'bg-[#010136] backdrop-blur-sm'
//       }`}

//     >
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2 group">
//             <div className="relative  p-2 rounded-lg group-hover:scale-105 transition-transform w-10 h-10 overflow-hidden">
//               <Image 
//                 src="/logo.png"   // put your logo path here (public/images/logo.png)
//                 alt="Logo"
//                  // adjust size like h-6 w-6
//                 fill
//                 className="h-6 w-6 object-contain"
//               />
//             </div>
//             <div className="hidden sm:block">
//               <span className="text-xl md:text-2xl font-bold text-white">
//                 thetafy classes
//               </span>
//               <p className="text-xs text-white -mt-1">Suraj Sir</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           {/* Wrapper for nav + YouTube */}
//           <div className="hidden md:flex flex-1 items-center justify-between p-3">

//             {/* Centered nav links */}
//             <div className="flex justify-center flex-1 space-x-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-white hover:text-white font-medium transition-colors duration-200 relative group"
//                 >
//                   {item.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
//                 </Link>
//               ))}
//             </div>

//             {/* YouTube Button (right) */}
//             <a
//               href="https://www.youtube.com/@thetafyclasses"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 p-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors btn-hover ml-8"
//             >
//               <Youtube className="h-4 w-4" />
//               <span className="font-medium">YouTube</span>
//             </a>
//           </div>


//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div 
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             isMenuOpen 
//               ? 'max-h-96 opacity-100 pb-4' 
//               : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="pt-2 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-4 py-3 text-white hover:text-white hover:bg-white rounded-lg transition-colors font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
            
//             <a
//               href="https://www.youtube.com/@thetafyclasses"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 mx-4 mt-4 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors justify-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <Youtube className="h-4 w-4" />
//               <span className="font-medium">Watch on YouTube</span>
//             </a>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Header
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Youtube } from 'lucide-react'
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      shadow-[0_4px_20px_rgba(255,255,255,0.1),0_2px_8px_rgba(255,255,255,0.06)]
      bg-[#010136] ${isScrolled ? 'backdrop-blur-sm' : ''}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative p-2 rounded-lg group-hover:scale-105 transition-transform w-10 h-10 overflow-hidden">
              <Image 
                src="/logo.png"
                alt="Logo"
                fill
                className="h-6 w-6 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-bold text-white">thetafy classes</span>
              <p className="text-xs text-white -mt-1">Suraj Sir</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-between p-3">
            <div className="flex justify-center flex-1 space-x-8">
              {navItems.map(item => (
                <Link key={item.name} href={item.href}
                  className="text-white hover:text-gray-300 font-medium transition-colors duration-200 relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <a href="https://www.youtube.com/@thetafyclasses" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors ml-8">
              <Youtube className="h-4 w-4" />
              <span className="font-medium">YouTube</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
          ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="pt-2 space-y-2">
            {navItems.map(item => (
              <Link key={item.name} href={item.href}
                className="block px-4 py-3 text-white hover:text-gray-300 hover:bg-gray-700 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <a href="https://www.youtube.com/@thetafyclasses" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 mx-4 mt-4 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors justify-center"
              onClick={() => setIsMenuOpen(false)}>
              <Youtube className="h-4 w-4" />
              <span className="font-medium">Watch on YouTube</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
