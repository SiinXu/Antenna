import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CONFIG from '../config'

const Hero = () => {
  if (!CONFIG.MODERN_HERO_ENABLE) {
    return null
  }

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              {CONFIG.MODERN_HERO_TITLE_1}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {CONFIG.MODERN_HERO_TITLE_2}
            </p>
            <Link
              href={CONFIG.MODERN_HERO_BUTTON_URL}
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
          </div>

          {/* Right Image */}
          {CONFIG.MODERN_HERO_IMAGE && (
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 dark:opacity-40"></div>
                <Image
                  src={CONFIG.MODERN_HERO_IMAGE}
                  width={600}
                  height={400}
                  alt="Hero"
                  className="relative rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
