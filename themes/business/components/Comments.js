'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const comments = [
  {
    name: "张明",
    role: "营销总监",
    comment: "触角的 AI 内容创作功能让我们的营销效率提升了数倍 🚀 RAG 技术确实很强大，生成的内容既专业又吸引人。特别是情绪分析功能，帮助我们更好地理解和服务用户 ✨",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang"
  },
  {
    name: "李婷",
    role: "新媒体运营",
    comment: "作为一名内容创作者，触角就像我的私人助手 🌟 它不仅能帮我生成高质量的文案，还能将文档快速转化为 FAQ，大大提升了工作效率。社交卡片功能也很赞！💯",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li"
  },
  {
    name: "王浩",
    role: "创业者",
    comment: "触角的营销博客社区是一个宝藏 💎 在这里不仅能获取最新的营销知识，还能用 AI 工具立即实践。灵感记录功能特别实用，让我随时捕捉创意火花 ⚡️",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang"
  },
  {
    name: "陈雨",
    role: "品牌经理",
    comment: "触角帮助我们打造了一致性的品牌声音 🎯 AI 生成的内容完美契合我们的品牌调性，社交分享功能更是让我们的品牌传播事半功倍 🔥",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen"
  },
  {
    name: "林小美",
    role: "自媒体博主",
    comment: "实时语音对话功能太棒了！🎉 经常在散步时和触角头脑风暴，很多绝妙的创意都是这样产生的。而且情绪分析让我更了解粉丝的需求 💝",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lin"
  },
  {
    name: "赵晓琳",
    role: "电商运营",
    comment: "用触角优化了我们的客户服务流程 👍 智能回复和情绪分析帮我们提高了用户满意度。一键转 FAQ 的功能也为客服团队节省了大量时间 ⏰",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao"
  }
]

const Comment = ({ name, role, comment, avatar }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="mx-4 flex min-w-[300px] flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:min-w-[400px]"
    >
      <div className="mb-4 flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <div className="font-semibold text-zinc-800 dark:text-zinc-100">{name}</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">{role}</div>
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-300">{comment}</p>
    </motion.div>
  )
}

export default function Comments() {
  const controls = useAnimationControls()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: [0, -1200],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      })
    }
    animate()
  }, [controls])

  return (
    <div className="flex w-full overflow-x-hidden py-8">
      <motion.div 
        animate={controls}
        className="flex gap-6"
      >
        {[...comments, ...comments].map((comment, index) => (
          <Comment key={`${comment.name}-${index}`} {...comment} />
        ))}
      </motion.div>
    </div>
  )
}
