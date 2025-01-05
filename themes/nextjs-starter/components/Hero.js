import CONFIG from '../config'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  if (!CONFIG.NEXTJS_STARTER_HERO_ENABLE) {
    return null
  }

  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <h1 className='text-4xl font-bold mb-6'>
        {CONFIG.NEXTJS_STARTER_HERO_TITLE_1}
      </h1>
      <p className='text-xl text-gray-600 mb-8 max-w-2xl'>
        {CONFIG.NEXTJS_STARTER_HERO_TITLE_2}
      </p>
      
      <div className='flex gap-4'>
        {CONFIG.NEXTJS_STARTER_HERO_BUTTON_2_TEXT && (
          <Link href={CONFIG.NEXTJS_STARTER_HERO_BUTTON_2_URL} className='flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
            {CONFIG.NEXTJS_STARTER_HERO_BUTTON_2_ICON && (
              <Image
                src={CONFIG.NEXTJS_STARTER_HERO_BUTTON_2_ICON}
                width={20}
                height={20}
                alt="icon"
                className="mr-2"
              />
            )}
            {CONFIG.NEXTJS_STARTER_HERO_BUTTON_2_TEXT}
          </Link>
        )}
      </div>

      {CONFIG.NEXTJS_STARTER_HERO_PREVIEW_IMAGE && (
        <div className='mt-12'>
          <Image
            src={CONFIG.NEXTJS_STARTER_HERO_PREVIEW_IMAGE}
            width={800}
            height={400}
            alt="Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Hero
