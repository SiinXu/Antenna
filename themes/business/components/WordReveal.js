'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-white"
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function WordReveal({ section = 'features' }) {
  const { t } = useTranslation('common')
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const title = section === 'features' ? t('features.title') : t('questions.title')
  const description = section === 'features' ? t('features.description') : t('questions.description')
  const words = title.split(' ')

  return (
    <div ref={targetRef} className="relative z-0">
      <div className="sticky top-1/3">
        <p className="flex flex-wrap p-5 text-2xl font-bold text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
        <p className="mt-4 text-lg text-neutral-400 md:text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}
