import React from 'react'
import Link from 'next/link'
import { CONFIG } from '../config'
import styles from '../style.module.css'
import animations from '../animations.module.css'

const CTA = () => {
  return (
    <section className={`${styles.cta} ${animations.fadeIn}`}>
      <div className={styles.container}>
        <h2 className={`${styles.ctaTitle} ${animations.slideInLeft}`}>
          {CONFIG.MODERN_CTA_TITLE}
        </h2>
        <p className={`${styles.ctaDescription} ${animations.slideInRight}`}>
          {CONFIG.MODERN_CTA_DESCRIPTION}
        </p>
        <Link
          href={CONFIG.MODERN_CTA_BUTTON_URL}
          className={`${styles.button} ${styles.buttonPrimary} ${animations.buttonHover} ${animations.buttonPulse}`}
        >
          {CONFIG.MODERN_CTA_BUTTON_TEXT}
        </Link>
      </div>
    </section>
  )
}

export default CTA
