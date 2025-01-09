'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = {
  starter: [
    '每月 100 次 AI 内容生成',
    '基础营销博客社区访问',
    '基础用户运营功能',
    '标准社交卡片',
    '社区支持'
  ],
  pro: [
    '每月 2000 次 AI 内容生成',
    '完整营销博客社区访问',
    '智能用户运营功能',
    '自定义社交卡片',
    '完整灵感记录功能',
    '优先技术支持',
    '基础数据分析'
  ],
  enterprise: [
    '无限次 AI 内容生成',
    'VIP 营销博客社区',
    '企业级用户运营方案',
    '品牌定制社交卡片',
    '企业知识库集成',
    '24/7 专属支持',
    '高级团队管理',
    '自定义数据分析',
    'API 接口访问',
    '专属培训服务'
  ]
}

const PricingCard = ({ title, price, features, popular, annual }) => {
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
          推荐
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 flex items-baseline text-white">
          <span className="text-5xl font-bold tracking-tight">{price}</span>
          <span className="ml-1 text-2xl">{annual ? '/年' : '/月'}</span>
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
        立即开始
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
          定价方案
        </h2>
        <p className="mt-4 text-neutral-400">
          选择适合你的方案
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative flex rounded-full bg-white/5 p-1 backdrop-blur-sm">
          <button
            className={'relative rounded-full px-4 py-1 text-sm font-medium transition ' +
              (!annual ? 'text-white' : 'text-neutral-400')}
            onClick={() => setAnnual(false)}
          >
            月付
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
            年付
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
          title="免费版"
          price={annual ? '¥0' : '¥0'}
          features={features.starter}
          popular={false}
          annual={annual}
        />
        <PricingCard
          title="个人版"
          price={annual ? '¥1788' : '¥199'}
          features={features.pro}
          popular={true}
          annual={annual}
        />
        <PricingCard
          title="企业版"
          price={annual ? '¥8988' : '¥999'}
          features={features.enterprise}
          popular={false}
          annual={annual}
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-neutral-400">
          所有价格均为人民币。需要定制价格？{' '}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300">
            联系我们
          </a>
        </p>
      </div>
    </div>
  )
}
