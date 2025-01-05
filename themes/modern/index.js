import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PostList from './components/PostList'

// 主页布局
const LayoutIndex = ({ posts }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <Hero />
      <Features />
      {/* 文章列表区域 */}
      <main className='flex-1 container mx-auto px-4 py-10'>
        <PostList posts={posts} />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

// 文章页布局
const LayoutSlug = ({ children, meta }) => {
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
const LayoutPage = LayoutSlug
const LayoutTag = LayoutSlug
const LayoutSearch = LayoutSlug
const LayoutArchive = LayoutSlug
const Layout404 = LayoutSlug
const LayoutCategoryIndex = LayoutSlug

// 导出所有布局组件
export {
  LayoutIndex,
  LayoutSlug,
  LayoutPage,
  LayoutTag,
  LayoutSearch,
  LayoutArchive,
  Layout404,
  LayoutCategoryIndex
}

// 默认导出
export default {
  LayoutIndex,
  LayoutSlug,
  LayoutPage,
  LayoutTag,
  LayoutSearch,
  LayoutArchive,
  Layout404,
  LayoutCategoryIndex
}
