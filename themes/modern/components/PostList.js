import React from 'react'
import Link from 'next/link'
import { StaggerContainer, StaggerItem } from '../utils/animations'

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div className="text-center py-10">暂无文章</div>
  }

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <StaggerItem key={post.id} index={index}>
          <Link
            href={`/${post.slug}`}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {post.pageCover && (
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={post.pageCover}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors duration-300">
                {post.title}
              </h2>
              {post.summary && (
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {post.summary}
                </p>
              )}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString()}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="mx-2">·</span>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}

export default PostList
