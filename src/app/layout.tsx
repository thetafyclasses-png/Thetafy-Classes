// import type { Metadata } from 'next'
// import { Inter, Poppins } from 'next/font/google'
// import './globals.css'
// import Header from '../components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Script from "next/script";

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// })

// export const metadata: Metadata = {
//   title: 'thetafyclasses',
//   description: 'Learn CBSE & IIT-JEE Maths with Suraj Sir. Simplifying Maths concepts for Class 10, Class 12, and IIT-JEE aspirants with easy explanations and practice questions.',
//   keywords: 'maths teacher, CBSE, IIT-JEE, Class 10, Class 12, mathematics, online teaching',
//   authors: [{ name: 'Suraj Sir' }],
//   openGraph: {
//     title: 'thetafyclasses',
//     description: 'Learn CBSE & IIT-JEE Maths with expert guidance and simplified explanations.',
//     type: 'website',
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <body className="font-sans bg-gray-50">
//         <Header />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
// import type { Metadata } from 'next'
// import { Inter, Poppins } from 'next/font/google'
// import './globals.css'
// import Header from '../components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import Script from 'next/script'
// import GAListener from '@/components/GAListener'

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
// })

// const poppins = Poppins({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// })

// export const metadata: Metadata = {
//   title: "Thetafy Classes | CBSE & IIT-JEE Maths",
//   description:
//     "Learn CBSE & IIT-JEE Maths with Suraj Sir. Simplified explanations for Class 10, Class 12, and IIT-JEE aspirants.",
//   keywords: [
//     "Class 10 Maths",
//     "Class 12 Maths",
//     "IIT JEE Maths",
//     "CBSE Mathematics",
//     "Maths online coaching",
//   ],
//   authors: [{ name: "Suraj Sir" }],
//   openGraph: {
//     title: "Thetafy Classes | CBSE & IIT-JEE Maths",
//     description:
//       "Simplify Maths with Thetafy Classes. Learn CBSE & IIT-JEE Maths concepts with clarity.",
//     url: "https://yourdomain.com",
//     siteName: "Thetafy Classes",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Thetafy Classes - Learn Maths",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Thetafy Classes | CBSE & IIT-JEE Maths",
//     description: "Learn CBSE & IIT-JEE Maths with Suraj Sir.",
//     images: ["https://yourdomain.com/og-image.png"],
//   },
//   alternates: {
//     canonical: "https://thetafyclasses.com",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <head>
//         {process.env.NEXT_PUBLIC_GA_ID && (
//           <>
//             <Script
//               src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
//               strategy="afterInteractive"
//             />
//             <Script id="ga4-init" strategy="afterInteractive">
//               {`
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
//               `}
//             </Script>
//           </>
//         )}
//       </head>
//       <body className="font-sans bg-gray-50">
//         <Header />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//         {/* ✅ This ensures page views are tracked */}
//         <GAListener />
//       </body>
//     </html>
//   )
// }
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'
import GAListener from '@/components/GAListener'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thetafyclasses.com"),
  title: "Thetafy Classes | CBSE & IIT-JEE Maths",
  description:
    "Learn CBSE & IIT-JEE Maths with Suraj Sir. Simplified explanations for Class 10, Class 12, and IIT-JEE aspirants.",
  keywords: [
    "Thetafy Classes",
    "Class 10 Maths",
    "Class 12 Maths",
    "IIT JEE Maths",
    "CBSE Mathematics",
    "Maths online coaching",
    "Suraj Sir Maths",
    "NCERT Solutions",
    "Board Exam Preparation",
    "IIT JEE Coaching",
  ],
  authors: [{ name: "Suraj Sir", url: "https://thetafyclasses.com" }],
  openGraph: {
    title: "Thetafy Classes | CBSE & IIT-JEE Maths",
    description:
      "Simplify Maths with Thetafy Classes. Learn CBSE & IIT-JEE Maths concepts with clarity.",
    url: "https://thetafyclasses.com",
    siteName: "Thetafy Classes",
    images: [
      {
        url: "https://thetafyclasses.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thetafy Classes - Learn Maths",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thetafy Classes | CBSE & IIT-JEE Maths",
    description: "Learn CBSE & IIT-JEE Maths with Suraj Sir.",
    images: ["https://thetafyclasses.com/og-image.png"],
    creator: "@thetafyclasses",
  },
  alternates: {
    canonical: "https://thetafyclasses.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans bg-gray-50">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* ✅ Page view tracking */}
        <GAListener />
      </body>
    </html>
  )
}
