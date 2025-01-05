export const CONFIG = {
  // 基础配置，继承自 NotionNext 配置
  MODERN_LOGO: '',
  MODERN_LOGO_WHITE: '',

  // Hero Section
  MODERN_HERO_ENABLE: true,
  MODERN_HERO_TITLE_1: '现代化的博客系统',
  MODERN_HERO_TITLE_2: '基于 Notion 的下一代博客平台，让创作更简单',
  MODERN_HERO_BUTTON_TEXT: '开始使用',
  MODERN_HERO_BUTTON_URL: '#features',
  MODERN_HERO_BUTTON_ICON: '',
  MODERN_HERO_IMAGE: '',

  // Features Section
  MODERN_FEATURES_TITLE: '为什么选择我们',
  MODERN_FEATURES_DESCRIPTION: '简单而强大的功能',
  MODERN_FEATURES: [
    {
      title: 'Notion 驱动',
      description: '使用 Notion 作为 CMS，享受最好的写作体验',
      icon: '📝'
    },
    {
      title: '美观易用',
      description: '精心设计的界面，让您的博客与众不同',
      icon: '🎨'
    },
    {
      title: 'SEO 友好',
      description: '针对搜索引擎优化，让您的内容被更多人看到',
      icon: '🔍'
    },
    {
      title: '快速部署',
      description: '一键部署到 Vercel，快速上线您的博客',
      icon: '🚀'
    }
  ],

  // Stats Section
  MODERN_STATS: [
    { number: '10K+', label: '活跃用户' },
    { number: '50K+', label: '文章发布' },
    { number: '99.9%', label: '正常运行时间' },
    { number: '24/7', label: '技术支持' }
  ],

  // CTA Section
  MODERN_CTA_TITLE: '准备好开始了吗？',
  MODERN_CTA_DESCRIPTION: '加入我们，开始您的创作之旅',
  MODERN_CTA_BUTTON_TEXT: '立即开始',
  MODERN_CTA_BUTTON_URL: '/start',

  // Footer Section
  MODERN_FOOTER_DESCRIPTION: '让创作更简单，让分享更有趣',
  MODERN_FOOTER_LINKS: [
    {
      title: '产品',
      links: [
        { text: '特性', url: '/features' },
        { text: '定价', url: '/pricing' },
        { text: '文档', url: '/docs' }
      ]
    },
    {
      title: '资源',
      links: [
        { text: '博客', url: '/blog' },
        { text: '社区', url: '/community' },
        { text: '帮助中心', url: '/help' }
      ]
    },
    {
      title: '关于',
      links: [
        { text: '关于我们', url: '/about' },
        { text: '联系我们', url: '/contact' },
        { text: '加入我们', url: '/careers' }
      ]
    }
  ],
  MODERN_FOOTER_SOCIAL: [
    { icon: '𝕏', url: 'https://twitter.com' },
    { icon: '𝔾', url: 'https://github.com' },
    { icon: '𝕃', url: 'https://linkedin.com' }
  ]
}

export default CONFIG
