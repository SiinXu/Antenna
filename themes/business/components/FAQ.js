'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How does Antenna's AI content generation work?",
    answer: 'Antenna uses advanced AI models to analyze your brand voice, target audience, and marketing goals. It then generates high-quality, platform-specific content that aligns with your brand strategy while maintaining authenticity and engagement.'
  },
  {
    question: 'Can I schedule posts across different time zones?',
    answer: 'Yes! Antenna supports global scheduling with intelligent time zone management. You can schedule content for optimal posting times in different regions, and our analytics will help you identify the best times to post for maximum engagement.'
  },
  {
    question: 'How accurate are the market insights?',
    answer: 'Our market insights are powered by real-time data analysis across social media, news, and industry trends. We process millions of data points to provide actionable insights with high accuracy, helping you stay ahead of market trends.'
  },
  {
    question: 'Is there a limit to the number of social media accounts I can connect?',
    answer: 'The number of social media accounts you can connect depends on your plan. Starter plans include 2 accounts, Pro plans include 10 accounts, and Enterprise plans offer unlimited account connections.'
  },
  {
    question: 'Can I customize the AI to match my brand voice?',
    answer: 'Absolutely! Antenna learns from your existing content and brand guidelines to maintain consistency. Pro and Enterprise plans include advanced AI training options for even more precise brand voice matching.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer tiered support based on your plan. Starter plans include email support, Pro plans include priority support with faster response times, and Enterprise plans come with dedicated account managers and SLA-backed support.'
  }
]

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm"
      initial={false}
    >
      <button
        className="flex w-full items-center justify-between p-6 text-left"
        onClick={onToggle}
      >
        <span className="text-base font-medium text-white">{question}</span>
        <span className="ml-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="border-t border-white/10 p-6 text-sm text-neutral-300">
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

  return (
    <div className="mx-auto mt-32 w-full max-w-3xl px-6">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-3xl font-bold text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-neutral-400">
          Everything you need to know about Antenna and how it works.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-neutral-400">
          Still have questions?{' '}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  )
}
