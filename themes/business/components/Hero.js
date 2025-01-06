'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import TypewriterEffectSmooth from './TypewriterEffectSmooth'

export default function Hero() {
  const { t } = useLanguage()

  const words = [
    {
      text: t('hero.subtitle.build'),
      className: 'text-white',
    },
    {
      text: t('hero.subtitle.awesome'),
      className: 'text-indigo-500 dark:text-indigo-500',
    },
    {
      text: t('hero.subtitle.apps'),
      className: 'text-white',
    },
    {
      text: t('hero.subtitle.with'),
      className: 'text-white',
    },
    {
      text: t('hero.subtitle.antenna'),
      className: 'text-purple-500 dark:text-purple-500',
    },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,58,109,0.4),rgba(26,31,46,0.7))]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Main title with gradient */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Typewriter effect */}
          <div className="my-8">
            <TypewriterEffectSmooth words={words} />
          </div>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-8 text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition duration-300"
            >
              {t('hero.getStarted')}
            </a>
            <a
              href="#"
              className="rounded-full bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition duration-300"
            >
              {t('hero.contactUs')}
            </a>
          </motion.div>

          {/* Join us text */}
          <motion.p
            className="mt-8 text-xs sm:text-sm text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('hero.joinUs')}
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}
