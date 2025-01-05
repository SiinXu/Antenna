'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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
  return (
    <motion.div
      className={'relative flex flex-col rounded-3xl ' + 
        (popular
          ? 'bg-[radial-gradient(ellipse_at_top,#3B3A6D,#1A1F2E)]'
          : 'bg-white/5') + 
        ' p-8 backdrop-blur-sm'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 flex items-baseline text-white">
          <span className="text-5xl font-bold tracking-tight">${price}</span>
          <span className="ml-1 text-2xl">/month</span>
        </div>
      </div>

      <ul className="mb-8 space-y-4 text-sm text-neutral-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="mr-3 h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={'mt-auto rounded-full px-6 py-3 text-sm font-medium transition hover:brightness-110 ' +
          (popular
            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
            : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20')}
      >
        Get started
      </button>
    </motion.div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="mx-auto mt-32 w-full max-w-7xl px-6">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-3xl font-bold text-transparent">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-neutral-400">
          Choose the perfect plan for your marketing needs
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm">
          <button
            className={'relative rounded-full px-4 py-1 text-sm font-medium transition ' +
              (!annual ? 'text-white' : 'text-neutral-400')}
            onClick={() => setAnnual(false)}
          >
            Monthly
            {!annual && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                layoutId="pricing-toggle"
                style={{ zIndex: -1 }}
              />
            )}
          </button>
          <button
            className={'relative rounded-full px-4 py-1 text-sm font-medium transition ' +
              (annual ? 'text-white' : 'text-neutral-400')}
            onClick={() => setAnnual(true)}
          >
            Annual
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

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <PricingCard
          title="Starter"
          price={annual ? '49' : '59'}
          features={features.starter}
          popular={false}
        />
        <PricingCard
          title="Pro"
          price={annual ? '99' : '119'}
          features={features.pro}
          popular={true}
        />
        <PricingCard
          title="Enterprise"
          price={annual ? '299' : '349'}
          features={features.enterprise}
          popular={false}
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-neutral-400">
          All prices in USD. Need something different?{' '}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300">
            Contact us
          </a>{' '}
          for custom pricing.
        </p>
      </div>
    </div>
  )
}
