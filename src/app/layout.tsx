import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ParticleBackground } from '@/components/ui/ParticleBackground'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Alex Johnson - Full Stack Developer & UI/UX Designer',
  description: 'Passionate full-stack developer and UI/UX designer creating exceptional digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: 'full stack developer, UI/UX designer, React, Next.js, Node.js, web development, portfolio',
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Alex Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    title: 'Alex Johnson - Full Stack Developer & UI/UX Designer',
    description: 'Passionate full-stack developer and UI/UX designer creating exceptional digital experiences.',
    siteName: 'Alex Johnson Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson - Full Stack Developer & UI/UX Designer',
    description: 'Passionate full-stack developer and UI/UX designer creating exceptional digital experiences.',
    creator: '@alexjohnsondev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <ParticleBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}