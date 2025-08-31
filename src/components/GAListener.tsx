// 'use client'

// import { useEffect } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'

// export default function GAListener() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
//   const GA_ID = process.env.NEXT_PUBLIC_GA_ID

//   useEffect(() => {
//     if (!GA_ID || typeof window.gtag !== 'function') {
//       if (process.env.NODE_ENV === "development") {
//         console.warn("GA not ready or GA_ID missing:", GA_ID)
//       }
//       return
// }


//     const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')

//     console.log("GA page_view sent:", url)

//     window.gtag('event', 'page_view', {
//       page_title: document.title,
//       page_location: window.location.href,
//       page_path: pathname,
//     })
//   }, [pathname, searchParams, GA_ID])

//   return null
// }


'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Component that uses useSearchParams
function GAListenerContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== 'function') {
      if (process.env.NODE_ENV === "development") {
        console.warn("GA not ready or GA_ID missing:", GA_ID)
      }
      return
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')

    console.log("GA page_view sent:", url)

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    })
  }, [pathname, searchParams, GA_ID])

  return null
}

// Main GA Listener with Suspense boundary
export default function GAListener() {
  return (
    <Suspense fallback={null}>
      <GAListenerContent />
    </Suspense>
  )
}