'use client'

import React from 'react'
import Link from 'next/link'
import ShimmerButton from './ShimmerButton'
import TypewriterEffectSmooth from './TypewriterEffectSmooth'
import { BlogCard } from './BlogCard'
import { FeaturesCard } from './FeaturesCard'
import { MeteorsCard } from './MeteorsCard'
import CONFIG from '../config'

const meteors_data = {
  name: "Join our Discord",
  description:
    "Join our Discord server to chat with other developers and get help.",
  button_content: "Chat with us",
  url: "https://discord.gg/8SwSX43wnD",
}

const DocumentGuide = ({ children }) => {
  return (
    <div className="inline-flex items-center rounded-full bg-white/10 p-1 pr-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
      <div className="mr-1 rounded-full bg-zinc-200 px-2 py-0.5 text-xs dark:bg-zinc-800">
        New
      </div>
      {children}
    </div>
  )
}

const MarketingHero = () => {
  return (
    <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
      <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
        <div className="flex flex-col items-start">
          <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
            <Link href="https://document.saasfly.io" target="_blank">
              <DocumentGuide>
                {CONFIG.HERO.introducing}
              </DocumentGuide>
            </Link>

            <div className="mt-6">
              <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-7xl">
                {CONFIG.HERO.title}
              </h1>
            </div>

            <div>
              <span className="text-zinc-500 sm:text-xl">
                {CONFIG.HERO.subTitle}
              </span>
              <TypewriterEffectSmooth words={CONFIG.HERO.typewriterWords} />
            </div>

            <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
              {CONFIG.HERO.buttons.map((button, index) => (
                button.type === 'primary' ? (
                  <Link key={index} href={button.href}>
                    <ShimmerButton className="mx-auto flex justify-center">
                      <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                        {button.text}
                      </span>
                    </ShimmerButton>
                  </Link>
                ) : (
                  <Link key={index} href={button.href} target="_blank">
                    <div className="flex h-full items-center justify-center">
                      <svg
                        className="mr-2 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span className="text-base font-semibold">
                        {button.text}
                      </span>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="hidden h-full w-full xl:block">
          <div className="flex flex-col pt-28">
            <MeteorsCard meteor={meteors_data} />
            <div className="mt-4 flex w-full justify-between">
              <BlogCard />
              <div className="ml-4">
                <FeaturesCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingHero
