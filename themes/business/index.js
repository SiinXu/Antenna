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
        <Footer />
      </div>
    )
  }

  // 对于其他所有布局，显示完整的营销页面内容
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header {...props} />
      <main className="mx-auto max-w-screen-2xl">
        {/* 营销页面内容 */}
        <MarketingHero {...props} />

        {/* Features Section */}
        <section className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-[60%] flex flex-col pr-0 lg:pr-4 pt-4 lg:pt-40">
              <WobbleCardShow />
            </div>
            <div className="w-full lg:w-[40%] h-full">
              <WordReveal />
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="px-[120px]">
            <Questions />
          </div>
        </section>



        {/* Pricing Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="relative">
            {/* 背景发光效果 */}
            <div className="absolute left-1/2 top-1/2 h-full w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,58,109,0.25),rgba(26,31,46,0)_70%)] blur-xl dark:bg-[radial-gradient(ellipse_at_center,rgba(59,58,109,0.15),rgba(26,31,46,0)_70%)]" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Pricing />
            </motion.div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <TiltFx>
              <div className="w-full max-w-4xl mx-auto rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-zinc-800">
                <QuickStart />
              </div>
            </TiltFx>
          </motion.div>
        </section>

        {/* Comments Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
            <div>
              <h1 className="mb-6 text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100 md:text-5xl">
                用户真实评价
              </h1>
            </div>
            <div className="mb-6 text-xl text-zinc-800 dark:text-zinc-100 md:text-xl">
              不要只听我们说，来看看<span className="font-bold">真实用户</span>是如何评价 Antenna 的
            </div>

            <div className="w-full overflow-x-hidden">
              <Comments />
            </div>
          </div>
        </section>
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
