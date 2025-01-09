'use client'

import { FollowerPointerCard } from "./ui/following-pointer"

export function BlogCard() {
  return (
    <div className="w-full sm:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px]">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <div className="relative w-full h-auto overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
        <img
  src={blogContent.image}
  alt="thumbnail"
  className="w-full h-auto transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
/>
          </div>
          <div className="p-3 sm:p-4 md:p-5">
            <h2 className="my-2 sm:my-3 md:my-4 text-base sm:text-lg font-bold text-zinc-700 dark:text-zinc-300">
              {blogContent.title}
            </h2>
            <h2 className="my-2 sm:my-3 md:my-4 text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
              {blogContent.description}
            </h2>
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-row items-center justify-between">
              <span className="text-xs sm:text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 block rounded-xl bg-black px-4 sm:px-6 py-1.5 sm:py-2 text-xs font-bold text-white hover:bg-zinc-800 transition-colors">
                Go
              </div>
              <a href="https://antenna-share.incidental.site/" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  )
}

const blogContent = {
  slug: "Antenna-AI-Powered-Marketing-Platform",
  author: "Antenna",
  date: "1月9日, 2025",
  title: "一键生成专属社交卡片，让分享更出彩！",
  description: "想要在社交媒体上脱颖而出？Antenna 触角的社交卡片功能，助您轻松打造个性化、高颜值的分享名片！",
  image: "https://i.pinimg.com/originals/91/dd/57/91dd57e1d835179e5376956e987785d7.gif",
  authorAvatar: "https://i.pinimg.com/originals/fa/46/e8/fa46e806b0f83a681cd8ef43488ec761.gif",
}

const TitleComponent = ({
  title,
  avatar,
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-white">{title}</p>
  </div>
)
