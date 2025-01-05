'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const comments = [
  {
    name: "Alex Thompson",
    role: "Founder, TechStart",
    comment: "Saasfly helped us launch our product in record time. The components are beautiful and the documentation is excellent.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Sarah Chen",
    role: "CTO, DataFlow",
    comment: "The best investment we've made. Saved us months of development time and the support is incredible.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Michael Rodriguez",
    role: "Developer",
    comment: "As a solo developer, Saasfly gave me everything I needed to build and launch my SaaS. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
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
