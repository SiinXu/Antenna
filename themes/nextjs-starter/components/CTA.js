import React from 'react'
import Link from 'next/link'
import CONFIG from '../config'

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {CONFIG.NEXTJS_STARTER_CTA_TITLE}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {CONFIG.NEXTJS_STARTER_CTA_DESCRIPTION}
        </p>
        <Link
          href={CONFIG.NEXTJS_STARTER_CTA_BUTTON_URL}
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          {CONFIG.NEXTJS_STARTER_CTA_BUTTON_TEXT}
        </Link>
      </div>
    </section>
  )
}

export default CTA
