'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'React Specialist',
  'Node.js Expert',
  'Creative Problem Solver'
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentText = roles[currentRole]

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentText.slice(0, prev.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-500 via-dark-400 to-dark-300" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-cyan/20 to-accent-orange/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Alex Johnson</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 h-16 flex items-center justify-center"
          >
            <span className="text-gray-300">I'm a </span>
            <span className="ml-2 text-accent-purple font-medium min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences through innovative design 
            and cutting-edge technology. Let's build something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full font-medium text-white hover:shadow-2xl hover:shadow-accent-purple/25 transition-all duration-300 hover:scale-105"
              data-cursor="pointer"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center space-x-2 px-8 py-4 border border-gray-600 rounded-full font-medium text-gray-300 hover:border-accent-purple hover:text-accent-purple transition-all duration-300 hover:scale-105"
              data-cursor="pointer"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:bg-accent-purple/20 transition-all duration-300"
                data-cursor="pointer"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-cursor="pointer"
        >
          <ChevronDown size={32} className="text-gray-400 hover:text-accent-purple transition-colors" />
        </motion.button>
      </div>
    </section>
  )
}