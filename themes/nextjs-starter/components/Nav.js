import CONFIG from '../config'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between py-4 px-6'>
      <div className='flex items-center'>
        {CONFIG.NEXTJS_STARTER_LOGO && (
          <Image
            src={CONFIG.NEXTJS_STARTER_LOGO}
            width={40}
            height={40}
            alt="Logo"
            className="mr-2"
          />
        )}
        <Link href="/" className='text-xl font-bold'>
          Next.js Starter
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        {CONFIG.NEXTJS_STARTER_NAV_BUTTON_1_TEXT && (
          <Link href={CONFIG.NEXTJS_STARTER_NAV_BUTTON_1_URL} className='text-gray-600 hover:text-gray-900'>
            {CONFIG.NEXTJS_STARTER_NAV_BUTTON_1_TEXT}
          </Link>
        )}
        {CONFIG.NEXTJS_STARTER_NAV_BUTTON_2_TEXT && (
          <Link href={CONFIG.NEXTJS_STARTER_NAV_BUTTON_2_URL} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
            {CONFIG.NEXTJS_STARTER_NAV_BUTTON_2_TEXT}
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav
