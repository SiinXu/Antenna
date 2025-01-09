'use client'

import { motion } from 'framer-motion'

const words = [
  "营销博客社区",
  "AI 内容创作",
  "智能用户运营",
  "社交分享",
  "灵感记录",
  "一站式解决方案"
]

export default function WordReveal() {
  return (
    <div className="flex flex-col pt-40">
      <div className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        触角赋能营销
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
