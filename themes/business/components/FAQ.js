'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="overflow-hidden"
      initial={false}
    >
      <button
        className="flex w-full items-center justify-between rounded-2xl bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
        onClick={onClick}
      >
        <span className="text-sm sm:text-base font-medium text-white">{question}</span>
        <svg
          className={'h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 transition-transform duration-300 ' + 
            (isOpen ? 'rotate-180 transform' : '')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-neutral-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()

  const faqs = [
    { key: 'what_is' },
    { key: 'how_works' },
    { key: 'pricing' },
    { key: 'support' },
    { key: 'security' },
    { key: 'cancel' }
  ]

  return (
    <div className="mx-auto mt-16 sm:mt-24 md:mt-32 w-full max-w-3xl px-4 sm:px-6">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent">
          {t('faq.title')}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400">
          {t('faq.subtitle')}
        </p>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={t(`faq.items.${faq.key}.question`)}
            answer={t(`faq.items.${faq.key}.answer`)}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  )
}
