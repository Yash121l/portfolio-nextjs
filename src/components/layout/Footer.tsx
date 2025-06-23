'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-500 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">Alex Johnson</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase())
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-accent-purple transition-colors text-sm"
                  data-cursor="pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all duration-300 group"
              data-cursor="pointer"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Back to Top
              </span>
              <ArrowUp size={16} className="text-accent-purple group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © {currentYear} Alex Johnson. Made with{' '}
            <Heart size={14} className="mx-1 text-red-500 animate-pulse" />{' '}
            and lots of coffee.
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-accent-purple/5 to-accent-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-cyan/5 to-accent-orange/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}