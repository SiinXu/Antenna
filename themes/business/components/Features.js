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

const Features = () => {
  const features = [
    {
      title: 'Modern Design',
      description: 'Clean and modern interface that puts your content first',
      icon: '🎨'
    },
    {
      title: 'Fast Performance',
      description: 'Built with Next.js and optimized for speed',
      icon: '⚡'
    },
    {
      title: 'SEO Friendly',
      description: 'Optimized for search engines out of the box',
      icon: '🔍'
    },
    {
      title: 'Dark Mode',
      description: 'Built-in dark mode support for better viewing',
      icon: '🌙'
    }
  ]

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
