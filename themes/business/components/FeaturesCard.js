'use client'

import { useState, useEffect } from 'react'
import { cn } from "../utils"
import { motion, AnimatePresence } from "framer-motion"

let notifications = [
  {
    name: "Payment received",
    description: "Stripe subscription",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Auth, simple and clean",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New Emails",
    description: "Create beautiful emails",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Easy Deploy",
    description: "Deploy your app with ease",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "New Order",
    description: "Someone purchased your product",
    time: "1m ago",
    icon: "🛍️",
    color: "#FF6B6B",
  },
  {
    name: "Server Status",
    description: "All systems operational",
    time: "30s ago",
    icon: "🚀",
    color: "#4CAF50",
  },
  {
    name: "Database Backup",
    description: "Backup completed successfully",
    time: "45s ago",
    icon: "💾",
    color: "#9C27B0",
  },
  {
    name: "API Update",
    description: "New version available v2.1.0",
    time: "1m ago",
    icon: "🔄",
    color: "#FF9800",
  },
  {
    name: "Security Alert",
    description: "Login from new device",
    time: "2m ago",
    icon: "🔒",
    color: "#F44336",
  },
  {
    name: "Analytics Report",
    description: "Monthly report is ready",
    time: "3m ago",
    icon: "📊",
    color: "#2196F3",
  },
  {
    name: "New Feature",
    description: "Dark mode is now available",
    time: "4m ago",
    icon: "✨",
    color: "#673AB7",
  },
  {
    name: "Task Completed",
    description: "Project milestone achieved",
    time: "5m ago",
    icon: "✅",
    color: "#4CAF50",
  },
]

notifications = Array.from({ length: 3 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
        delay: index * 0.1,
        opacity: { duration: 0.2 }
      }}
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-300 ease-in-out hover:scale-[103%] hover:-translate-y-1",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-night-800/40 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
          </div>
          <p className="text-sm font-normal text-gray-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturesCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayItems, setDisplayItems] = useState([])

  useEffect(() => {
    setDisplayItems(notifications.slice(0, 5).reverse())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % notifications.length
        const items = notifications.slice(
          nextIndex,
          nextIndex + 5
        ).concat(
          notifications.slice(
            0,
            Math.max(0, 5 - (notifications.length - nextIndex))
          )
        )
        setDisplayItems(items.reverse())
        return nextIndex
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex max-h-[435px] min-h-[435px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:border-night-600 dark:bg-night-800/50">
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {displayItems.map((notification, idx) => (
            <Notification 
              key={notification.name} 
              index={idx}
              {...notification} 
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
