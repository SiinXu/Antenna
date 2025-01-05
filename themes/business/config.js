const CONFIG = {
  name: 'business',
  title: 'Business Theme',
  description: 'A professional business theme for your website',
  author: 'Antenna',
  github: '',
  version: '1.0.0',
  features: {
    darkMode: true,
    i18n: true,
    search: true,
    comment: true,
    tags: true,
    categories: true,
    toc: true
  },
  socials: {
    github: '',
    twitter: '',
    linkedin: ''
  },
  analytics: {
    google: '',
    baidu: ''
  },
  comment: {
    gitalk: {
      clientID: '',
      clientSecret: '',
      repo: '',
      owner: '',
      admin: ['']
    }
  },
  HERO: {
    introducing: "Introducing Antenna",
    title: "Antenna: A new way to build your blog",
    subTitle: "Your complete All-in-One solution for building blog services.",
    typewriterWords: [
      {
        text: "Build",
      },
      {
        text: "awesome",
      },
      {
        text: "blogs",
      },
      {
        text: "with",
      },
      {
        text: "Antenna.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ],
    buttons: [
      {
        text: "Get Started",
        href: "#features",
        type: "primary"
      },
      {
        text: "View on GitHub",
        href: "https://github.com/once-ui-system/nextjs-starter.git",
        type: "secondary"
      }
    ]
  },
  FEATURES: {
    title: "Amazing Features",
    description: "Everything you need to build amazing blogs",
    items: [
      {
        title: "Modern Design",
        description: "Clean and modern interface that puts your content first",
        icon: "🎨"
      },
      {
        title: "Fast Performance",
        description: "Built with Next.js and optimized for speed",
        icon: "⚡"
      },
      {
        title: "SEO Friendly",
        description: "Optimized for search engines out of the box",
        icon: "🔍"
      },
      {
        title: "Dark Mode",
        description: "Built-in dark mode support for better viewing",
        icon: "🌙"
      }
    ]
  },
  QUICK_START: {
    title: "Quick start",
    code: "git clone https://github.com/once-ui-system/nextjs-starter.git",
    language: "tsx"
  }
}

export default CONFIG
