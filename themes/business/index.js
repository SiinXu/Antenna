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

const BusinessLayout = ({ children, layoutName, ...props }) => {
  const { theme } = useTheme()
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // 如果是博客布局，只显示基本结构
  if (layoutName === 'blog') {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
        <Header {...props} />
        <main>{children}</main>
      </div>
    )
  }

  // 对于其他所有布局，显示完整的营销页面内容
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header {...props} />
      <main>
        {/* 营销页面内容 */}
        <MarketingHero {...props} />

        {/* Features Section */}
        <section className="hidden h-[100vh] w-full xl:block">
          <div className="flex h-full w-full justify-between px-[220px]">
            <div className="flex w-[60%] flex-col pr-4 pt-40">
              <WobbleCardShow />
            </div>
            <div className="h-full w-[40%]">
              <div className="flex flex-col pl-[120px]">
                <WordReveal />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="hidden h-[100vh] w-full xl:block">
          <div className="flex h-full w-full justify-between px-[220px]">
            <div className="flex w-[60%] flex-col pr-4 pt-40">
              <div className="px-[120px]">
                <Questions />
              </div>
            </div>
            <div className="h-full w-[40%]">
              <div className="flex flex-col pl-[120px]">
                <WordReveal />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile FAQ Section */}
        <section className="w-full px-8 xl:hidden">
          <Questions />
        </section>

        {/* Testimonials Section */}
        <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
          <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
            <div>
              <h1 className="mb-6 text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100 md:text-5xl">
                What People Are Saying
              </h1>
            </div>
            <div className="mb-6 text-xl text-zinc-800 dark:text-zinc-100 md:text-xl">
              Don't just take our word for it. Here's what{" "}
              <span className="font-bold">real people</span> are saying about
              Antenna.
            </div>

            <div className="w-full overflow-x-hidden">
              <Comments />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative w-full overflow-hidden bg-zinc-50 px-8 py-20 dark:bg-black">
          {/* 背景发光效果 */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,58,109,0.3),rgba(26,31,46,0)_50%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(59,58,109,0.2),rgba(26,31,46,0)_50%)]" />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(120,119,198,0.2),rgba(26,31,46,0)_50%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(120,119,198,0.1),rgba(26,31,46,0)_50%)]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(76,75,142,0.2),rgba(26,31,46,0)_50%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(76,75,142,0.1),rgba(26,31,46,0)_50%)]" />
          
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-neutral-100 dark:to-neutral-300 md:text-4xl"
              >
                Choose Your Plan
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-center text-zinc-600 dark:text-neutral-400"
              >
                Get started with the perfect plan for your needs
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16 w-full"
              >
                <div className="relative">
                  {/* 卡片发光效果 */}
                  <div className="absolute left-1/2 top-1/2 h-full w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,58,109,0.25),rgba(26,31,46,0)_70%)] blur-xl dark:bg-[radial-gradient(ellipse_at_center,rgba(59,58,109,0.15),rgba(26,31,46,0)_70%)]" />
                  <Pricing />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
      </main>
      <Footer />
    </div>
  )
}

// 导出所有布局组件
export const LayoutIndex = props => <BusinessLayout layoutName="marketing" {...props} />
export const LayoutSearch = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutArchive = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutSlug = props => <BusinessLayout layoutName="blog" {...props} />
export const Layout404 = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutCategoryIndex = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutPostList = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutTagIndex = props => <BusinessLayout layoutName="blog" {...props} />

export { CONFIG }
export default BusinessLayout
