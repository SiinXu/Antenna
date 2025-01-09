'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const questions = [
  {
    question: "什么是 Antenna 触角？",
    answer: "Antenna 触角是一款专为营销人员和内容创作者打造的 AI 智能工具。它深度融合了营销博客社区、AI 内容创作、智能用户运营、社交分享和灵感记录五大核心功能模块，旨在帮助用户高效创作优质内容，提升用户运营效率，并激发无限创意。"
  },
  {
    question: "如何使用 AI 内容创作功能？",
    answer: "我们采用先进的 RAG（检索增强生成）技术，能够深入理解你提供的产品信息、目标用户、市场环境以及你所选择的营销原理。支持生成多种类型的营销文案，包括邮件、文章、策划、贴文、短视频脚本和长视频脚本等。"
  },
  {
    question: "智能用户运营有哪些特点？",
    answer: "我们的系统具备先进的情绪分析能力，能够深入理解用户文字背后的情绪，智能生成更贴心、更人性化的回复。同时支持文档一键转 FAQ 功能，方便用户快速获取所需信息。"
  },
  {
    question: "社交分享功能如何使用？",
    answer: "我们支持生成高度自定义的社交卡片，让你的分享内容在社交媒体上脱颖而出。你还可以创建专属的个人电子名片，在各种场合展示你的专业形象，拓展人脉资源。"
  },
  {
    question: "灵感记录功能有什么特点？",
    answer: "你可以随时与触角进行实时语音交流，展开头脑风暴。对话内容实时展示，关键点自动记录在 Noteboard 中，并结合 Hume AI 参数提供情绪分析，让你的创意过程更加直观、高效。"
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
        常见问题
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
