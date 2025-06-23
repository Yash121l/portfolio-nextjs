'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex@example.com',
    href: 'mailto:alex@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-gray-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-blue-400',
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent-purple">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, whether 
                it's a freelance project, full-time position, or just a chat about 
                technology and development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    data-cursor="pointer"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 glass rounded-full transition-all duration-300 ${social.color}`}
                      data-cursor="pointer"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-purple">
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                Sorry, there was an error sending your message. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg font-medium text-white hover:shadow-2xl hover:shadow-accent-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-cursor="pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}