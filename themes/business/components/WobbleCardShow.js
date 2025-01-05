'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const WobbleCard = ({ children, containerClassName = '', className = '' }) => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height
    setMousePosition({ x: e.clientX - left, y: e.clientY - top })
    ref.current.style.transform = `
      perspective(1000px)
      rotateY(${(x - 0.5) * 20}deg)
      rotateX(${(y - 0.5) * -20}deg)
      translateZ(20px)
    `
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-3xl transition-all duration-200 ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`relative z-10 h-full p-8 ${className}`}>
        {children}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] backdrop-blur-[2px]" />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
    </motion.div>
  )
}

export default function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="group col-span-1 lg:col-span-2 h-full bg-[radial-gradient(ellipse_at_top,#2B3A6D,#1A1F2E)] min-h-[500px] lg:min-h-[300px] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-shadow duration-500"
      >
        <div className="max-w-xs">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            In-Depth Market Insights
          </h2>
          <p className="mt-4 text-left text-base/6 text-white/80">
            Intelligently analyze market trends, competitive landscape, and customer needs, providing data-driven decision support to make your marketing strategies more precise and effective.
          </p>
        </div>
        <img
          src="/market-insights.webp"
          width={500}
          height={500}
          alt="market insights demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain mix-blend-luminosity lg:-right-[40%]"
        />
      </WobbleCard>

      <WobbleCard containerClassName="group col-span-1 min-h-[300px] bg-[radial-gradient(ellipse_at_top,#3B3A6D,#1A1F2E)] hover:shadow-[0_0_50px_rgba(129,140,248,0.3)] transition-shadow duration-500">
        <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          AI Content Engine
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white/80">
          Unleash your creativity! Generate high-quality, platform-specific marketing content at scale, including articles, scripts, social media captions, images, and more.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="group col-span-1 lg:col-span-3 bg-[radial-gradient(ellipse_at_top,#2D3A6D,#1A1F2E)] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] hover:shadow-[0_0_50px_rgba(79,70,229,0.3)] transition-shadow duration-500">
        <div className="max-w-sm">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Smart Multi-Platform Publishing
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white/80">
            Say goodbye to tedious operations! Publish to major platforms with one click, scheduled posting, and multi-account management, significantly increasing your operational efficiency.
          </p>
        </div>
        <img
          src="/multi-platform.webp"
          width={500}
          height={500}
          alt="publishing demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain mix-blend-luminosity md:-right-[40%] lg:-right-[20%]"
        />
      </WobbleCard>
    </div>
  )
}
