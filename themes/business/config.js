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
    introducing: "欢迎使用 Antenna 触角",
    title: "AI 赋能营销，开启内容创作与用户运营新纪元",
    subTitle: "专为营销人员和内容创作者打造的 AI 智能工具",
    typewriterWords: [
      {
        text: "高效",
      },
      {
        text: "智能",
      },
      {
        text: "创作",
      },
      {
        text: "尽在",
      },
      {
        text: "Antenna.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ],
    buttons: [
      {
        text: "立即体验",
        href: "#features",
        type: "primary"
      },
    ]
  },
  FEATURES: {
    title: "核心功能",
    description: "五大核心功能模块，助力营销创新",
    items: [
      {
        title: "营销博客社区",
        description: "汇集优质营销原理方案和成功案例，打造你的专属营销智库。无论你是营销新手还是资深专家，都能在这里找到灵感和解决方案。",
        icon: "🌐"
      },
      {
        title: "AI 内容创作",
        description: "采用先进的 RAG 技术，深度理解你的需求，为你量身打造极具吸引力的营销文案。支持多种类型文案生成，包括邮件、文章、策划等。",
        icon: "🤖"
      },
      {
        title: "智能用户运营",
        description: "具备情绪分析能力，智能生成贴心回复。支持文档一键转 FAQ，提升用户体验。让用户运营更智能、更高效。",
        icon: "📊"
      },
      {
        title: "社交分享",
        description: "支持生成高度自定义的社交卡片和个人电子名片，让你在社交媒体上脱颖而出，提升品牌形象和影响力。",
        icon: "🔗"
      }
    ]
  },
  QUICK_START: {
    title: "开始使用",
    description: "立即体验 Antenna 触角，开启营销新纪元",
    code: "npm install @antenna/marketing-suite",
    language: "bash"
  }
}

export default CONFIG
