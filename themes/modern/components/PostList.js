import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StaggerContainer, StaggerItem } from '../utils/animations'

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          暂无文章
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          稍后再来看看吧
        </p>
      </div>
    )
  }

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {posts.map((post, index) => (
        <StaggerItem key={post.id} index={index}>
          <Link
            href={`/${post.slug}`}
            className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {post.pageCover && (
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <Image
                  src={post.pageCoverThumbnail || post.pageCover}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            )}
            <div className="flex-1 p-6">
              <div className="flex items-center mb-4 space-x-2">
                <time
                  dateTime={post.publishDate}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {new Date(post.publishDate).toLocaleDateString()}
                </time>
                {post.category && (
                  <>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-sm text-blue-500 dark:text-blue-400">
                      {post.category}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h2>
              {post.summary && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.summary}
                </p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

export default PostList
