'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-dark-400 z-50">
      <div
        className="h-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  )
}