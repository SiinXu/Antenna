'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
      delay: 0.1,
      ease: "easeOut"
    }
  }
}

const hoverVariants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.25 }
  },
  hover: { 
    scale: 1.025,
    transition: { 
      type: "spring",
      stiffness: 180,
      damping: 10
    }
  }
}

function WobbleCard({ containerClassName, children, className }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${containerClassName}`}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      whileHover={!prefersReducedMotion ? "hover" : "rest"}
      variants={hoverVariants}
      aria-label="Feature Card"
    >
      <div className={`relative p-6 ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}

export default function WobbleCardShow() {
  const { t } = useTranslation('common')
  const prefersReducedMotion = useReducedMotion()

  const imageHoverProps = prefersReducedMotion 
    ? {} 
    : {
        whileHover: { 
          rotate: 2,
          scale: 1.05,
          transition: { duration: 0.3 }
        }
      }

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="group col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-indigo-700/90 to-purple-700/90 min-h-[500px] lg:min-h-[300px] overflow-hidden backdrop-blur-lg"
      >
        <div className="relative z-10 max-w-xs space-y-4">
          <h2 className="text-balance text-left text-base font-bold tracking-tight text-white md:text-xl lg:text-3xl">
            {t('wobbleCard.card1.title')}
          </h2>
          <p className="text-left text-sm/6 text-indigo-100 opacity-90">
            {t('wobbleCard.card1.description')}
          </p>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700/50 to-purple-700/50 opacity-50 blur-2xl"></div>
        </div>
        <motion.img
          src="/images/market-insights.png"
          width={500}
          height={500}
          alt={t('wobbleCard.card1.imageAlt')}
          className="absolute -bottom-10 -right-4 w-64 rounded-2xl object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 lg:-right-[40%]"
          {...imageHoverProps}
        />
      </WobbleCard>

      <WobbleCard
        containerClassName="group col-span-1 min-h-[300px] bg-gradient-to-br from-pink-700/90 to-rose-700/90 backdrop-blur-lg"
      >
        <div className="relative z-10 space-y-4">
          <h2 className="max-w-80 text-balance text-left text-base font-bold tracking-tight text-white md:text-xl lg:text-3xl">
            {t('wobbleCard.card2.title')}
          </h2>
          <p className="text-left text-sm/6 text-pink-100 opacity-90">
            {t('wobbleCard.card2.description')}
          </p>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-700/50 to-rose-700/50 opacity-50 blur-2xl"></div>
        </div>
      </WobbleCard>

      <WobbleCard
        containerClassName="group col-span-1 lg:col-span-3 bg-gradient-to-br from-blue-700/90 to-cyan-700/90 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] overflow-hidden backdrop-blur-lg"
      >
        <div className="relative z-10 max-w-sm space-y-4">
          <h2 className="max-w-sm text-balance text-left text-base font-bold tracking-tight text-white md:max-w-lg md:text-xl lg:text-3xl">
            {t('wobbleCard.card3.title')}
          </h2>
          <p className="text-left text-sm/6 text-blue-100 opacity-90">
            {t('wobbleCard.card3.description')}
          </p>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-700/50 to-cyan-700/50 opacity-50 blur-2xl"></div>
        </div>
        <motion.img
          src="/images/publishing.png"
          width={500}
          height={500}
          alt={t('wobbleCard.card3.imageAlt')}
          className="absolute -bottom-10 -right-10 w-64 rounded-2xl object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:-right-[40%] lg:-right-[20%]"
          {...imageHoverProps}
        />
      </WobbleCard>
    </div>
  )
}
