'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const features = {
  starter: [
    'AI Content Generation (up to 100 pieces/month)',
    'Basic Analytics',
    'Single User',
    '2 Social Media Accounts',
    'Email Support'
  ],
  pro: [
    'AI Content Generation (unlimited)',
    'Advanced Analytics & Insights',
    'Up to 5 Team Members',
    '10 Social Media Accounts',
    'Priority Support',
    'Custom Templates',
    'API Access'
  ],
  enterprise: [
    'Everything in Pro',
    'Unlimited Team Members',
    'Unlimited Social Media Accounts',
    'Dedicated Account Manager',
    'Custom AI Training',
    'SLA Support',
    'Advanced Security Features'
  ]
}

const PricingCard = ({ title, price, features, popular }) => {
  const { t } = useLanguage()
  
  return (
    <motion.div
      className={'relative flex flex-col rounded-3xl ' + 
        (popular
          ? 'bg-[radial-gradient(ellipse_at_top,#3B3A6D,#1A1F2E)]'
          : 'bg-white/5') + 
        ' p-4 sm:p-6 lg:p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        backgroundColor: popular ? 'rgba(59, 58, 109, 0.8)' : 'rgba(255, 255, 255, 0.1)',
      }}
    >
      {popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-white">
          {t('pricing.mostPopular')}
        </div>
      )}

      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        <div className="mt-3 sm:mt-4 flex items-baseline text-white">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight">${price}</span>
          <span className="ml-1 text-xl sm:text-2xl">/月</span>
        </div>
      </div>

      <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={'mt-auto w-full rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition hover:brightness-110 ' +
          (popular
            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
            : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20')}
      >
        {t('pricing.getStarted')}
      </button>
    </motion.div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const { t } = useLanguage()

  return (
    <div className="mx-auto mt-16 sm:mt-24 md:mt-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent">
          {t('pricing.title')}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400">
          {t('pricing.subtitle')}
        </p>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center">
        <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm">
          <button
            className={'relative rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium transition ' +
              (!annual ? 'text-white' : 'text-neutral-400')}
            onClick={() => setAnnual(false)}
          >
            {t('pricing.monthly')}
            {!annual && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                layoutId="pricing-toggle"
                style={{ zIndex: -1 }}
              />
            )}
          </button>
          <button
            className={'relative rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium transition ' +
              (annual ? 'text-white' : 'text-neutral-400')}
            onClick={() => setAnnual(true)}
          >
            {t('pricing.annual')}
            {annual && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                layoutId="pricing-toggle"
                style={{ zIndex: -1 }}
              />
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title={t('pricing.plans.starter.title')}
          price={annual ? '49' : '59'}
          features={features.starter}
          popular={false}
        />
        <PricingCard
          title={t('pricing.plans.pro.title')}
          price={annual ? '99' : '119'}
          features={features.pro}
          popular={true}
        />
        <PricingCard
          title={t('pricing.plans.enterprise.title')}
          price={annual ? '299' : '349'}
          features={features.enterprise}
          popular={false}
        />
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
        <p className="text-xs sm:text-sm text-neutral-400">
          {t('pricing.customPricing')}{' '}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300">
            {t('pricing.contactUs')}
          </a>{' '}
          {t('pricing.forPricing')}
        </p>
      </div>
    </div>
  )
}
