'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TypewriterEffectSmooth from './TypewriterEffectSmooth'
import ShimmerButton from './ShimmerButton'
import QuickStart from './QuickStart'
import BLOG from '@/blog.config'

export default function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Antenna.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-fuchsia-500/20 to-indigo-500/20 animate-pulse" />
        <motion.div
          className="absolute -inset-[10px] opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle at center, white 0.5px, transparent 0.5px)',
            backgroundSize: '32px 32px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '32px 32px'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-rose-100 via-fuchsia-100 to-indigo-100 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl"
        >
          Your AI-Powered Marketing Growth Engine
        </motion.h1>

        <TypewriterEffectSmooth words={words} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-gray-300"
        >
          {BLOG.DESCRIPTION}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center gap-6"
        >
          <ShimmerButton>
            <Link href="#features" className="px-8">
              Get Started
            </Link>
          </ShimmerButton>
          <Link 
            href={BLOG.CONTACT_URL || '#contact'} 
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>

        <QuickStart />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-sm text-gray-400"
        >
          Trusted by over 1,000 businesses and individuals to enhance their marketing efficiency.
        </motion.p>
      </div>
    </div>
  )
}
