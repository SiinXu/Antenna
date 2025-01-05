import React from 'react'
import { motion } from 'framer-motion'
import { AnimateOnScroll } from '../utils/animations'
import Link from 'next/link'
import Image from 'next/image'
import { CONFIG } from '../config'

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* 背景动画 */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 2, 2, 1, 1],
              x: [0, 200, 200, 0, 0],
              y: [0, -100, 100, -100, 0],
              backgroundColor: [
                'rgb(59, 130, 246)',
                'rgb(147, 51, 234)',
                'rgb(236, 72, 153)',
                'rgb(59, 130, 246)',
                'rgb(59, 130, 246)'
              ]
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 2
            }}
            style={{
              width: '30vw',
              height: '30vw',
              left: `${i * 30}%`,
              top: '30%'
            }}
          />
        ))}
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center px-4">
        <AnimateOnScroll>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {CONFIG.MODERN_HERO_TITLE_1}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {CONFIG.MODERN_HERO_TITLE_2}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Link
            href={CONFIG.MODERN_HERO_BUTTON_URL}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {CONFIG.MODERN_HERO_BUTTON_TEXT}
            {CONFIG.MODERN_HERO_BUTTON_ICON && (
              <Image
                src={CONFIG.MODERN_HERO_BUTTON_ICON}
                width={20}
                height={20}
                alt="icon"
                className="ml-2"
              />
            )}
          </Link>
        </AnimateOnScroll>

        {/* 滚动指示器 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
