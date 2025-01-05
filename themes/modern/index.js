import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

// 主页布局
export const LayoutIndex = ({ children, meta }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <Hero />
      <Features />
      <main className='flex-1 container mx-auto px-4'>
        {children}
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

// 文章页布局
export const LayoutSlug = ({ children, meta }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <main className='flex-1 container mx-auto px-4 py-10'>
        <article className="prose dark:prose-invert lg:prose-lg mx-auto">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  )
}

// 其他页面布局复用文章页布局
export const LayoutPage = LayoutSlug
export const LayoutTag = LayoutSlug
export const LayoutSearch = LayoutSlug
export const LayoutArchive = LayoutSlug
export const Layout404 = LayoutSlug
export const LayoutCategoryIndex = LayoutSlug

const Layouts = {
  LayoutIndex,
  LayoutSlug,
  LayoutPage,
  LayoutTag,
  LayoutSearch,
  LayoutArchive,
  Layout404,
  LayoutCategoryIndex
}

export default Layouts
