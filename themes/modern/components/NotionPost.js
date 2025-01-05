import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// 动态导入 Notion 组件
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

const NotionPost = ({ post, blockMap }) => {
  const router = useRouter()

  if (!post || !blockMap) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 文章头部 */}
      <header className="mb-12">
        {post.pageCover && (
          <div className="relative w-full h-[40vh] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.pageCover}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
          <time dateTime={post.publishDate}>
            {new Date(post.publishDate).toLocaleDateString()}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center space-x-2">
              <span>·</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Notion 内容 */}
      <article className="notion-post">
        <NotionRenderer
          recordMap={blockMap}
          components={{
            Code,
            Collection,
            Equation,
            Pdf,
            Modal,
            nextImage: Image,
            nextLink: Link
          }}
          mapPageUrl={id => `/p/${id}`}
          previewImages={true}
          darkMode={false}
          className="notion-page"
          showTableOfContents={true}
          minTableOfContentsItems={3}
        />
      </article>

      {/* 底部导航 */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          {post.prev && (
            <Link
              href={`/${post.prev.slug}`}
              className="flex items-center hover:text-blue-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>{post.prev.title}</span>
            </Link>
          )}
          {post.next && (
            <Link
              href={`/${post.next.slug}`}
              className="flex items-center hover:text-blue-500 transition-colors duration-200"
            >
              <span>{post.next.title}</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </div>
  )
}

export default NotionPost
