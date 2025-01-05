'use client'

import { useEffect } from 'react'
import Header from './components/Header'

export default function Layout({ children }) {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>{children}</main>
    </div>
  )
}
