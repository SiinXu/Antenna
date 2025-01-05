'use client'

import React, { useRef, useState } from "react"

export const FollowerPointerCard = ({
  children,
  title,
  className,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isInside, setIsInside] = useState(false)

  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsInside(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsInside(false)
    setOpacity(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className="group relative rounded-xl border border-zinc-600 bg-zinc-900 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">{title}</div>
        </div>
        {children}
      </div>
    </div>
  )
}
