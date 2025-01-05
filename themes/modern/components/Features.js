import React, { useEffect, useRef } from 'react'
import { CONFIG } from '../config'
import styles from '../style.module.css'
import animations from '../animations.module.css'

const Features = () => {
  const featuresRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animations.revealed)
          }
        })
      },
      { threshold: 0.1 }
    )

    featuresRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={`text-center mb-16 ${animations.fadeIn}`}>
          <h2 className={`${styles.heroTitle} ${animations.gradientText}`}>
            {CONFIG.MODERN_FEATURES_TITLE}
          </h2>
          <p className={styles.heroSubtitle}>
            {CONFIG.MODERN_FEATURES_DESCRIPTION}
          </p>
        </div>

        <div className={styles.featureGrid}>
          {CONFIG.MODERN_FEATURES.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className={`${styles.featureCard} ${animations.cardHover} ${animations.revealOnScroll}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${styles.featureIcon} ${animations.scaleIn}`}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={`${styles.container} ${styles.statsGrid}`}>
            {CONFIG.MODERN_STATS.map((stat, index) => (
              <div
                key={index}
                className={`${animations.fadeIn}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${styles.statNumber} ${animations.scaleIn}`}>
                  {stat.number}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
