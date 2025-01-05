'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const TiltFx = ({ children }) => {
  const ref = useRef(null)
  let lastCall = 0
  let resetTimeout

  const handleMouseMove = (e) => {
    if ('ontouchstart' in window) return

    clearTimeout(resetTimeout)

    const now = Date.now()
    if (now - lastCall < 16) return
    lastCall = now

    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const deltaX = (offsetX - centerX) / centerX
    const deltaY = (offsetY - centerY) / centerY

    const rotateX = -deltaY * 15
    const rotateY = -deltaX * 15

    window.requestAnimationFrame(() => {
      element.style.transform = `perspective(1000px) translate3d(0, 0, 30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
  }

  const handleMouseLeave = () => {
    if ('ontouchstart' in window) return

    const element = ref.current
    if (element) {
      resetTimeout = setTimeout(() => {
        element.style.transform = 'none'
      }, 100)
    }
  }

  return (
    <div
      ref={ref}
      className="transition-transform duration-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const Column = ({ children, alignItems = 'center', gap = '0', fillWidth = false, position = 'static' }) => {
  return (
    <div
      className={`flex flex-col ${
        alignItems === 'center' ? 'items-center' : ''
      } ${gap ? `gap-${gap}` : ''} ${
        fillWidth ? 'w-full' : ''
      } ${position}`}
    >
      {children}
    </div>
  )
}

const Heading = ({ children, align = 'left', as: Component = 'h2', variant = 'default' }) => {
  const variantStyles = {
    'display-default-l': 'text-4xl md:text-5xl font-bold',
    default: 'text-2xl font-bold'
  }

  return (
    <Component
      className={`${variantStyles[variant] || variantStyles.default} ${
        align === 'center' ? 'text-center' : ''
      } text-gray-900 dark:text-white`}
    >
      {children}
    </Component>
  )
}

const CodeBlock = ({ compact = false, maxWidth, codeInstances = [] }) => {
  return (
    <div
      className={`w-full ${maxWidth ? `max-w-[${maxWidth}rem]` : ''} ${
        compact ? 'p-4' : 'p-6'
      } rounded-lg bg-gray-900`}
    >
      {codeInstances.map((instance, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {instance.code}
        </div>
      ))}
    </div>
  )
}

const QuickStart = () => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    setMousePosition({ x: e.clientX - left, y: e.clientY - top })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_at_top,#2B3A6D,#1A1F2E)] p-8 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-3xl font-bold text-transparent"
        >
          Quick Start Guide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 max-w-2xl text-neutral-300"
        >
          Get started with Antenna in minutes. Follow these simple steps to set up your marketing automation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">1. Connect Your Accounts</h3>
            <p className="mt-2 text-neutral-300">
              Link your social media and marketing platforms to Antenna for seamless integration.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">2. Set Up Your Profile</h3>
            <p className="mt-2 text-neutral-300">
              Configure your brand voice, target audience, and marketing preferences.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">3. Create Your First Campaign</h3>
            <p className="mt-2 text-neutral-300">
              Use our AI to generate content and schedule your first marketing campaign.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">4. Monitor & Optimize</h3>
            <p className="mt-2 text-neutral-300">
              Track your performance and let our AI optimize your marketing strategy.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated background effects */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] backdrop-blur-[2px]" />

      {/* Glowing orbs */}
      <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />
    </motion.div>
  )
}

export default QuickStart
