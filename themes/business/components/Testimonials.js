'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    content: "Antenna has revolutionized our marketing workflow. The AI-powered content generation is incredibly accurate and saves us hours every day.",
    author: "Emily Chen",
    title: "Marketing Director, TechFlow",
    emoji: "😊"
  },
  {
    content: "The multi-platform publishing feature is a game-changer. We've increased our social media engagement by 300% since using Antenna.",
    author: "James Wilson",
    title: "Social Media Manager, GrowthX",
    emoji: "🌟"
  },
  {
    content: "As a content creator, Antenna's AI tools have been invaluable. It's like having a creative partner that understands your brand voice perfectly.",
    author: "Sophia Rodriguez",
    title: "Content Creator, CreativeHub",
    emoji: "✨"
  },
  {
    content: "The market insights feature helps us stay ahead of trends. It's like having a crystal ball for content strategy.",
    author: "Michael Park",
    title: "Strategy Director, FutureMedia",
    emoji: "🚀"
  },
  {
    content: "We've cut our content production time in half while maintaining high quality. Antenna is worth every penny.",
    author: "Lisa Thompson",
    title: "CEO, ContentPro",
    emoji: "💫"
  },
  {
    content: "The automated scheduling and analytics features have transformed how we manage our social media presence.",
    author: "David Kim",
    title: "Digital Marketing Lead, InnovateCo",
    emoji: "🎯"
  }
]

const TestimonialCard = ({ content, author, title, emoji }) => (
  <div className="flex w-[350px] flex-col gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
    <div className="text-4xl">{emoji}</div>
    <p className="text-sm/6 text-neutral-300">{content}</p>
    <div>
      <div className="font-medium text-white">{author}</div>
      <div className="text-sm text-neutral-400">{title}</div>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <div className="relative mx-auto mt-32 w-full max-w-7xl overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1A1F2E] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1A1F2E] to-transparent" />
      
      <div className="mb-16 text-center">
        <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-3xl font-bold text-transparent">
          What People Are Saying
        </h2>
        <p className="mt-4 text-neutral-400">
          Don't just take our word for it. Here's what our users are saying about Antenna.
        </p>
      </div>

      <div className="relative">
        {/* First row - moving right */}
        <motion.div
          className="mb-8 flex gap-8"
          animate={{
            x: [-1400, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...testimonials, ...testimonials].slice(0, 4).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>

        {/* Second row - moving left */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1400],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...testimonials, ...testimonials].slice(2, 6).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
