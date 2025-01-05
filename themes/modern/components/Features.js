import React from 'react'
import { CONFIG } from '../config'

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            {CONFIG.MODERN_FEATURES_TITLE}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {CONFIG.MODERN_FEATURES_DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.MODERN_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.MODERN_STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-700"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
