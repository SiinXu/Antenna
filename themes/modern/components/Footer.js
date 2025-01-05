import React from 'react'
import Link from 'next/link'
import { CONFIG } from '../config'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {CONFIG.MODERN_LOGO || 'Modern Blog'}
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {CONFIG.MODERN_FOOTER_DESCRIPTION}
            </p>
            <div className="mt-6 flex space-x-4">
              {CONFIG.MODERN_FOOTER_SOCIAL.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {CONFIG.MODERN_FOOTER_LINKS.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} Modern Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
