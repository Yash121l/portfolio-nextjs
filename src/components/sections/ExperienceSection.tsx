'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
    achievements: [
      'Increased application performance by 40% through optimization',
      'Led a team of 5 developers on multiple projects',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects from conception to deployment. Worked closely with designers and product managers to deliver high-quality solutions.',
    achievements: [
      'Built 15+ responsive web applications',
      'Reduced bug reports by 50% through comprehensive testing',
      'Improved user engagement by 35% with UX enhancements',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'Jest'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    period: '2019 - 2020',
    description: 'Specialized in creating responsive, interactive user interfaces for various client projects. Collaborated with design teams to implement pixel-perfect designs.',
    achievements: [
      'Delivered 20+ client projects on time and within budget',
      'Improved website loading speeds by 45%',
      'Established component library used across all projects',
    ],
    technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'Figma'],
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'Boston, MA',
    period: '2015 - 2019',
    description: 'Graduated Magna Cum Laude with a focus on software engineering and web development.',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club',
    ],
  },
]

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Cloud Professional Developer',
  'MongoDB Certified Developer',
  'Certified Kubernetes Administrator',
]

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20 bg-dark-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my expertise 
            in web development and software engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-accent-purple"
            >
              Professional Experience
            </motion.h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="relative pl-8 pb-8 border-l-2 border-gray-700 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full" />
                  
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-accent-purple font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start">
                            <span className="text-accent-purple mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-purple">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-lg font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-accent-purple font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    {edu.location}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{edu.description}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-accent-purple mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-accent-purple">Certifications</h3>
              <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full mr-3" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full font-medium text-white hover:shadow-2xl hover:shadow-accent-purple/25 transition-all duration-300 hover:scale-105"
                data-cursor="pointer"
              >
                <ExternalLink size={18} />
                <span>Download Full Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}