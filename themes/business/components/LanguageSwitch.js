'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitch() {
  const { locale, switchLanguage } = useLanguage()

  return (
    <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm">
      <button
        className={'relative rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium transition ' +
          (locale === 'en' ? 'text-white' : 'text-neutral-400')}
        onClick={() => switchLanguage('en')}
      >
        English
        {locale === 'en' && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            layoutId="language-toggle"
            style={{ zIndex: -1 }}
          />
        )}
      </button>
      <button
        className={'relative rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium transition ' +
          (locale === 'zh' ? 'text-white' : 'text-neutral-400')}
        onClick={() => switchLanguage('zh')}
      >
        中文
        {locale === 'zh' && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            layoutId="language-toggle"
            style={{ zIndex: -1 }}
          />
        )}
      </button>
    </div>
  )
}
