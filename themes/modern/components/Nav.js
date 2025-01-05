import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'

const Nav = () => {
  const { isDarkMode, toggleDarkMode } = useGlobal()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {CONFIG.MODERN_LOGO && (
              <Image
                src={isDarkMode ? CONFIG.MODERN_LOGO_WHITE || CONFIG.MODERN_LOGO : CONFIG.MODERN_LOGO}
                alt="Logo"
                width={32}
                height={32}
              />
            )}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Modern Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              博客
            </Link>
            <Link href="/archive" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              归档
            </Link>
            <Link href="/search" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              搜索
            </Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                博客
              </Link>
              <Link
                href="/archive"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                归档
              </Link>
              <Link
                href="/search"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                搜索
              </Link>
              
              {/* Dark Mode Toggle (Mobile) */}
              <button
                onClick={() => {
                  toggleDarkMode()
                  setIsMenuOpen(false)
                }}
                className="flex items-center text-gray-600 dark:text-gray-300"
              >
                <span className="mr-2">{isDarkMode ? '切换日间模式' : '切换夜间模式'}</span>
                <span>{isDarkMode ? '🌞' : '🌙'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
