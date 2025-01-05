import Link from 'next/link'
import TypewriterEffectSmooth from './TypewriterEffectSmooth'
import ShimmerButton from './ShimmerButton'
import QuickStart from './QuickStart'
import BLOG from '@/blog.config'

const Hero = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Antenna.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900">
      <div className="text-center space-y-12 max-w-4xl px-4">
        <TypewriterEffectSmooth words={words} />
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          {BLOG.DESCRIPTION}
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <ShimmerButton>
            <a href="#features" className="px-8">
              Get Started
            </a>
          </ShimmerButton>
          <a 
            href={BLOG.CONTACT_URL || '#contact'} 
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Contact Us
          </a>
        </div>
        
        <QuickStart />
      </div>
    </div>
  )
}

export default Hero
