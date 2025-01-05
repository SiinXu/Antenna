import React from 'react'
import Link from 'next/link'
import { CONFIG } from '../config'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            {CONFIG.MODERN_CTA_TITLE}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {CONFIG.MODERN_CTA_DESCRIPTION}
          </p>
          <Link
            href={CONFIG.MODERN_CTA_BUTTON_URL}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {CONFIG.MODERN_CTA_BUTTON_TEXT}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
