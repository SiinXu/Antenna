import React from 'react'
import Link from 'next/link'
import { CONFIG } from '../config'
import styles from '../style.module.css'
import animations from '../animations.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${animations.fadeIn}`}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={`${styles.footerBrand} ${animations.slideInLeft}`}>
            <Link href="/" className={`${styles.footerLogo} ${animations.linkHover}`}>
              {CONFIG.MODERN_LOGO || 'Modern Blog'}
            </Link>
            <p className={styles.footerDescription}>
              {CONFIG.MODERN_FOOTER_DESCRIPTION}
            </p>
            <div className="mt-6 flex space-x-4">
              {CONFIG.MODERN_FOOTER_SOCIAL.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.footerSocialLink} ${animations.hoverScale}`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {CONFIG.MODERN_FOOTER_LINKS.map((column, index) => (
            <div
              key={index}
              className={animations.fadeIn}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={styles.footerTitle}>
                {column.title}
              </h3>
              <ul className={styles.footerLinks}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.footerLink}>
                    <Link
                      href={link.url}
                      className={animations.linkHover}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`${styles.footerBottom} ${animations.fadeIn}`}>
          {new Date().getFullYear()} Modern Blog. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
