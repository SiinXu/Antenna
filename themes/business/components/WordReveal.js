'use client'

import { motion } from 'framer-motion'

const words = [
  "Intelligent",
  "Efficient",
  "Powerful",
  "Automated",
  "Scalable",
  "Data-Driven"
]

export default function WordReveal() {
  return (
    <div className="flex flex-col pt-40">
      <div className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        Marketing Growth
      </div>
      <div className="relative h-16 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -384], // 6 words * 64px height
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute flex flex-col gap-4 pt-4"
        >
          {[...words, ...words].map((word, i) => (
            <div
              key={i}
              className="text-4xl font-bold text-indigo-500"
            >
              {word}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
