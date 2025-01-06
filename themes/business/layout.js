'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import MarketingHero from './components/MarketingHero'
import WobbleCardShow from './components/WobbleCardShow'
import WordReveal from './components/WordReveal'
import Questions from './components/Questions'
import Comments from './components/Comments'
import QuickStart, { TiltFx } from './components/QuickStart'
import Pricing from './components/Pricing'
import CONFIG from './config'

export default function BusinessLayout({ children, layoutName, ...props }) {
  const { theme } = useTheme()
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const renderMarketingContent = () => (
    <>
      <MarketingHero {...props} />

      {/* Features Section */}
      <section id="features" className="relative min-h-[150vh] w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 lg:flex-row xl:px-8">
          <div className="sticky top-24 w-full lg:w-1/2">
            <WobbleCardShow />
          </div>
          <div className="w-full lg:w-1/2">
            <WordReveal section="features" />
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="relative min-h-[150vh] w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 lg:flex-row xl:px-8">
          <div className="sticky top-24 w-full lg:w-1/2">
            <Questions />
          </div>
          <div className="w-full lg:w-1/2">
            <WordReveal section="questions" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Comments Section */}
      <Comments />

      {/* Quick Start Section */}
      <section className="w-full bg-zinc-50 px-8 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100 md:text-4xl"
            >
              Quick Start Guide
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltFx>
                <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-800">
                  <QuickStart />
                </div>
              </TiltFx>
            </motion.div>
          </div>
        </div>
      </section>

      {children}
    </>
  )

  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-white">
      <Header {...props} />
      <main className="flex-1">
        {layoutName === 'marketing' ? renderMarketingContent() : children}
      </main>
      {/* 只在营销页面显示 Footer */}
      {layoutName === 'marketing' && <Footer />}
    </div>
  )
}
