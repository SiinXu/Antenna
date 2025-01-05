'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const questions = [
  {
    question: "What is Antenna?",
    answer: "Antenna is an AI-powered intelligent marketing platform built for businesses and marketing professionals. Leveraging cutting-edge AI, we provide an all-in-one solution encompassing market analysis, customer persona building, content creation, smart multi-platform publishing, leads management, and marketing performance analytics."
  },
  {
    question: "How does Antenna boost marketing efficiency?",
    answer: "Antenna uses AI to automate and optimize various marketing tasks, from content creation to multi-platform publishing and analytics. Our platform can increase marketing efficiency by over 10x through intelligent automation, data-driven insights, and streamlined workflows."
  },
  {
    question: "What platforms does Antenna support?",
    answer: "Antenna supports major platforms including WeChat, Weibo, Xiaohongshu, Douyin, and more. Our smart publishing system allows you to manage multiple accounts, schedule posts, and track performance across all platforms from a single dashboard."
  },
  {
    question: "How does the AI content engine work?",
    answer: "Our AI content engine uses advanced language models and marketing expertise to generate high-quality, platform-specific content. It can create articles, social media posts, ad copy, and more, while maintaining your brand voice and meeting platform-specific requirements."
  },
  {
    question: "Is Antenna suitable for small businesses?",
    answer: "Yes! Antenna is designed to scale with your needs. Whether you're a solopreneur or a large enterprise, our platform provides the tools and automation you need to compete effectively in the digital marketing space."
  }
]

const Question = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="cursor-pointer border-b border-zinc-200 py-6 dark:border-zinc-800"
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(79, 70, 229, 0.1)' : 'transparent' }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {question}
        </h3>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
        >
          +
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0
        }}
        className="overflow-hidden"
      >
        <p className="text-zinc-600 dark:text-zinc-400">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="w-full max-w-3xl">
      <h2 className="mb-8 text-3xl font-bold text-zinc-800 dark:text-zinc-100">
        Frequently Asked Questions
      </h2>
      <div>
        {questions.map((q, i) => (
          <Question
            key={i}
            {...q}
            isOpen={i === openIndex}
            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
          />
        ))}
      </div>
    </div>
  )
}
