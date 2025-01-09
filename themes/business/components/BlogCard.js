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
          <div className="aspect-w-16 aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
            <img
              src={blogContent.image}
              alt="thumbnail"
              className="transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
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
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  )
}

const blogContent = {
  slug: "Making-Sense-of-React-Server-Components",
  author: "Nextify",
  date: "26th March, 2024",
  title: "Making Sense of React Server Components",
  description:
    "So, here's something that makes me feel old: React celebrated its 10th birthday this year!",
  image:
    "https://cdn.sanity.io/images/tpb4obti/production/50c13f886c039225be4e7e99023b8f1e2b4161b9-1792x1024.png",
  authorAvatar:
    "https://pbs.twimg.com/profile_images/1766283284370305025/QKXW5W3M_400x400.jpg",
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
