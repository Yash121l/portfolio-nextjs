'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Zap, Heart } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Code Commits', value: '2000+' },
]

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Design First',
    description: 'Believing that great user experience starts with thoughtful and intuitive design.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing every aspect to deliver lightning-fast and responsive applications.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Genuinely loving what I do and constantly learning new technologies and techniques.',
  },
]

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer and UI/UX designer with a love for creating 
            digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-purple">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey into web development started 5 years ago when I built my first website 
                using HTML and CSS. What began as curiosity quickly turned into a passion for 
                creating digital experiences that solve real-world problems.
              </p>
              <p>
                Today, I specialize in modern web technologies like React, Next.js, and Node.js, 
                with a strong focus on user experience and performance. I believe that great 
                software is not just about functionality, but about creating delightful 
                interactions that users love.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing 
                to open-source projects, or enjoying a good cup of coffee while sketching out 
                ideas for my next project.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-accent-purple">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center p-6 glass rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}