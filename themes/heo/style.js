/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #ffffff;
        position: relative;
        overflow-x: hidden;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 动态背景
      body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(230, 230, 250, 0.8) 25%,
          rgba(230, 230, 250, 0.6) 50%,
          rgba(183, 193, 255, 0.4) 75%,
          rgba(183, 193, 255, 0.2) 100%
        );
        animation: gradientBG 15s ease infinite;
        background-size: 400% 400%;
      }

      // 添加动态光晕效果
      body::after {
        content: "";
        position: fixed;
        top: 50%;
        left: 50%;
        width: 80vw;
        height: 80vw;
        transform: translate(-50%, -50%);
        background: radial-gradient(
          circle,
          rgba(230, 230, 250, 0.4) 0%,
          rgba(230, 230, 250, 0.1) 45%,
          transparent 70%
        );
        animation: pulse 10s ease-in-out infinite;
        z-index: -1;
      }

      @keyframes gradientBG {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes pulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.3;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
        }
      }

      // 添加毛玻璃效果的基础样式
      .glass-morphism {
        background: rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(183, 193, 255, 0.15) !important;
      }

      // 导航栏毛玻璃效果
      #theme-heo nav {
        background: rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(183, 193, 255, 0.15) !important;
      }

      // 首页卡片毛玻璃效果
      .group.overflow-hidden.border.rounded-xl.transition-all {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.1) !important;
        transition: all 0.3s ease !important;
      }

      .group.overflow-hidden.border.rounded-xl.transition-all:hover {
        transform: translateY(-5px) !important;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(147, 51, 234, 0.1)) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.2) !important;
      }

      // 暗色模式下的首页卡片
      html[data-theme="dark"] .group.overflow-hidden.border.rounded-xl.transition-all {
        background: rgba(30, 41, 59, 0.2) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
      }

      html[data-theme="dark"] .group.overflow-hidden.border.rounded-xl.transition-all:hover {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(147, 51, 234, 0.15)) !important;
        transform: translateY(-5px) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.2) !important;
      }

      // 右侧卡片渐变效果
      [class*="bg-[#4f65f0]"],
      [class*="dark:bg-blue-600"],
      [class*="dark:bg-blue-500"] {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.7), rgba(147, 51, 234, 0.35)) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.2) !important;
      }

      [class*="bg-[#4f65f0]"]:hover,
      [class*="dark:bg-blue-600"]:hover,
      [class*="dark:bg-blue-500"]:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.25) !important;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.55)) !important;
      }

      // 暗色模式下强制覆盖
      @media (prefers-color-scheme: dark) {
        [class*="dark:bg-blue-600"],
        [class*="dark:bg-blue-500"] {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(147, 51, 234, 0.45)) !important;
        }
      }

      // 按钮毛玻璃效果
      .bg-indigo-600,
      .bg-blue-600,
      .bg-indigo-400,
      .dark\:bg-indigo-600 {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.1) !important;
        transition: all 0.3s ease !important;
      }

      // 暗色模式下的按钮
      html[data-theme="dark"] .bg-indigo-600,
      html[data-theme="dark"] .bg-blue-600,
      html[data-theme="dark"] .bg-indigo-400,
      html[data-theme="dark"] .dark\:bg-indigo-600 {
        background: rgba(30, 41, 59, 0.2) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
      }

      // 按钮悬停效果
      .bg-indigo-600:hover,
      .bg-blue-600:hover,
      .bg-indigo-400:hover,
      .dark\:bg-indigo-600:hover {
        transform: translateY(-2px) !important;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.15)) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.2) !important;
      }

      // 暗色模式下的按钮悬停效果
      html[data-theme="dark"] .bg-indigo-600:hover,
      html[data-theme="dark"] .bg-blue-600:hover,
      html[data-theme="dark"] .bg-indigo-400:hover,
      html[data-theme="dark"] .dark\:bg-indigo-600:hover {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.25)) !important;
      }

      // 导航按钮样式
      .nav-link {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1)) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.1) !important;
        transition: all 0.3s ease !important;
      }

      // 必看精选按钮
      .nav-link:nth-child(1) {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.1)) !important;
      }

      // 热门文章按钮
      .nav-link:nth-child(2) {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(236, 72, 153, 0.1)) !important;
      }

      // 实用教程按钮
      .nav-link:nth-child(3) {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.1)) !important;
      }

      // 暗色模式下的导航按钮
      html[data-theme="dark"] .nav-link {
        border: 1px solid rgba(255, 255, 255, 0.05) !important;
      }

      // 导航按钮悬停效果
      .nav-link:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.15) !important;
      }

      // 必看精选按钮悬停
      .nav-link:nth-child(1):hover {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.2)) !important;
      }

      // 热门文章按钮悬停
      .nav-link:nth-child(2):hover {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(236, 72, 153, 0.2)) !important;
      }

      // 实用教程按钮悬停
      .nav-link:nth-child(3):hover {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.2)) !important;
      }

      // 侧边栏毛玻璃效果
      #theme-heo .slide-over {
        background: rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(183, 193, 255, 0.15) !important;
      }

      // 搜索框毛玻璃效果
      #theme-heo .search-box {
        background: rgba(255, 255, 255, 0.3) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(183, 193, 255, 0.15) !important;
      }

      // 标签按钮毛玻璃效果
      span[class*='bg-indigo'],
      span[class*='bg-blue'],
      span[class*='hover:bg'] {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.1) !important;
        transition: all 0.3s ease !important;
        border-radius: 8px !important;
        padding: 4px 12px !important;
      }

      // 暗色模式下的标签按钮
      html[data-theme="dark"] span[class*='bg-indigo'],
      html[data-theme="dark"] span[class*='bg-blue'],
      html[data-theme="dark"] span[class*='hover:bg'] {
        background: rgba(30, 41, 59, 0.2) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
      }

      // 标签按钮悬停效果
      span[class*='bg-indigo']:hover,
      span[class*='bg-blue']:hover,
      span[class*='hover:bg']:hover {
        transform: translateY(-2px) !important;
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.15)) !important;
        box-shadow: 0 12px 40px 0 rgba(37, 99, 235, 0.2) !important;
      }

      // 暗色模式下的标签按钮悬停效果
      html[data-theme="dark"] span[class*='bg-indigo']:hover,
      html[data-theme="dark"] span[class*='bg-blue']:hover,
      html[data-theme="dark"] span[class*='hover:bg']:hover {
        background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.25)) !important;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  )
}

export { Style }
