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
      <div className="text-3xl font-medium text-white/90 backdrop-blur-xl transition-all duration-700">
        触角 Antenna
      </div>
      <div className="relative h-40 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -720], // 6 words * 120px height
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute flex flex-col gap-10 pt-8"
        >
          {[...words, ...words].map((word, i) => (
            <div
              key={i}
              className="text-2xl font-medium relative group transition-all duration-700"
            >
              <span className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
              <span className="absolute inset-0 bg-white/10 blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700"></span>
              <span className="relative text-white/90 transition-all duration-700">
                {word}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
