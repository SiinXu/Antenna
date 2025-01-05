import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CONFIG } from '../config'
import styles from '../style.module.css'
import animations from '../animations.module.css'

const Hero = () => {
  if (!CONFIG.MODERN_HERO_ENABLE) {
    return null
  }

  return (
    <section className={`${styles.hero} ${animations.fadeIn}`}>
      <div className={`${styles.container} ${styles.heroContent}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className={`lg:w-1/2 mb-10 lg:mb-0 ${animations.slideInLeft}`}>
            <h1 className={`${styles.heroTitle} ${animations.gradientText}`}>
              {CONFIG.MODERN_HERO_TITLE_1}
            </h1>
            <p className={`${styles.heroSubtitle} ${animations.fadeIn}`} style={{ animationDelay: '0.2s' }}>
              {CONFIG.MODERN_HERO_TITLE_2}
            </p>
            <Link
              href={CONFIG.MODERN_HERO_BUTTON_URL}
              className={`${styles.button} ${styles.buttonPrimary} ${animations.buttonHover} ${animations.buttonPulse}`}
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
            <div className={`lg:w-1/2 ${animations.slideInRight}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 dark:opacity-40"></div>
                <Image
                  src={CONFIG.MODERN_HERO_IMAGE}
                  width={600}
                  height={400}
                  alt="Hero"
                  className={`relative rounded-xl shadow-lg ${animations.imageHover}`}
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
