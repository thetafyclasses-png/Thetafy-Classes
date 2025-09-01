import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "../components/layout/Header"
import Footer from "@/components/layout/Footer"
import Script from "next/script"
import GAListener from "@/components/GAListener"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* ✅ Favicon & PWA Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Google Analytics */}
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
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* ✅ Page view tracking */}
        <GAListener />
      </body>
    </html>
  )
}
