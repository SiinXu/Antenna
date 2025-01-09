import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ feature, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200" />
      <div className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const features = [
  {
    title: '营销博客社区',
    description: '汇集大量优质的营销原理方案和成功案例，无论你是营销新手还是资深专家，都能在这里找到灵感和解决方案，提升你的营销技能和策略水平。',
    icon: '📚'
  },
  {
    title: 'AI 内容创作',
    description: '采用先进的 RAG 技术，深入理解你的需求，为你量身打造极具吸引力的营销文案。支持多种类型的内容创作，包括邮件、文章、策划、贴文等。',
    icon: '✨'
  },
  {
    title: '智能用户运营',
    description: '具备先进的情绪分析能力，能够深入理解用户情绪，智能生成贴心的回复。支持文档一键转 FAQ，提升用户体验。',
    icon: '👥'
  },
  {
    title: '社交分享',
    description: '支持生成高度自定义的社交卡片，让你的分享内容在社交媒体上脱颖而出。创建专属的个人电子名片，打造专业形象。',
    icon: '🔄'
  },
  {
    title: '灵感记录',
    description: '随时进行实时语音对话，展开头脑风暴，捕捉灵感火花。对话内容实时展示，关键点自动记录，并提供情绪分析。',
    icon: '💡'
  },
  {
    title: '持续进化',
    description: '不断学习最新的营销理论和实践，持续优化功能和性能，始终保持领先。为你提供一站式的智能营销解决方案。',
    icon: '🔄'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Amazing Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to build amazing products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
