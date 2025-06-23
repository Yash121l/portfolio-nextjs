'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-blue-500' },
      { name: 'Framer Motion', level: 85, color: 'from-purple-500 to-pink-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800' },
      { name: 'PostgreSQL', level: 82, color: 'from-blue-700 to-indigo-700' },
      { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
      { name: 'GraphQL', level: 75, color: 'from-pink-500 to-rose-500' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Docker', level: 78, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 75, color: 'from-yellow-500 to-orange-500' },
      { name: 'Figma', level: 88, color: 'from-purple-500 to-indigo-500' },
      { name: 'Jest', level: 82, color: 'from-red-500 to-pink-500' },
    ],
  },
]

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',
  'MongoDB', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'Docker', 'AWS',
  'Git', 'Figma', 'Jest', 'Prisma', 'Redux', 'Socket.io'
]

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-20 bg-dark-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to 
            bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-accent-purple">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-accent-purple">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}