'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Filter } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'PostgreSQL'],
    category: 'Frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Styled Components'],
    category: 'Frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'A RESTful API for a social media platform with user authentication, post management, and real-time messaging capabilities.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    category: 'Backend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with advanced animations, dark mode, and optimized performance.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    category: 'Frontend',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    category: 'Full Stack',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" ref={ref} className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in modern web development 
            and creative problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-accent-purple"
          >
            Highlighted Work
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300"
                      data-cursor="pointer"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300"
                      data-cursor="pointer"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-accent-purple transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Filter className="text-gray-400 mr-2" size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              data-cursor="pointer"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300"
                    data-cursor="pointer"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-white/20 transition-all duration-300"
                    data-cursor="pointer"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-accent-purple transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description.slice(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 rounded text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 rounded text-xs font-medium text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}