import BLOG from '@/blog.config'
import getConfig from 'next/config'
import dynamic from 'next/dynamic'

// 在next.config.js中扫描所有主题
export const { THEMES = [] } = getConfig().publicRuntimeConfig

/**
 * 获取基础布局组件
 * @param {string} theme - 主题名称
 * @returns {Component} React组件
 */
export const getBaseLayoutByTheme = (theme = BLOG.THEME) => {
  return dynamic(() => import(`@/themes/${theme}`).then(mod => {
    const Layout = mod.LayoutIndex || mod.default?.LayoutIndex
    if (!Layout) {
      throw new Error(`Layout not found in theme ${theme}`)
    }
    return Layout
  }), {
    loading: () => <div>Loading...</div>,
    ssr: true
  })
}

/**
 * 动态加载主题布局组件
 * @param {object} props - 组件属性
 * @returns {Component} React组件
 */
export const DynamicLayout = ({ theme, layout, ...props }) => {
  const themeToUse = theme || BLOG.THEME
  const LayoutComponent = dynamic(() => import(`@/themes/${themeToUse}`).then(mod => {
    const Layout = mod[layout] || mod.LayoutIndex
    return Layout
  }), {
    loading: () => <div>Loading...</div>,
    ssr: true
  })

  return <LayoutComponent layoutName={layout} {...props} />
}

/**
 * 获取主题配置
 * @param {string} themeQuery - 主题查询参数（支持多个主题用逗号分隔）
 * @returns {Promise<object>} 主题配置对象
 */
export const getThemeConfig = async themeQuery => {
  // 如果 themeQuery 存在且不等于默认主题，处理多主题情况
  if (typeof themeQuery === 'string' && themeQuery.trim()) {
    // 取 themeQuery 中第一个主题（以逗号为分隔符）
    const themeName = themeQuery.split(',')[0].trim()

    // 如果 themeQuery 不等于当前默认主题，则加载指定主题的配置
    if (themeName !== BLOG.THEME) {
      try {
        // 动态导入主题配置
        const themeModule = await import(`@/themes/${themeName}/config.js`)
        return themeModule.default
      } catch (error) {
        console.error(`Error loading theme configuration for ${themeName}:`, error)
        // 加载失败时返回默认主题配置
        const defaultTheme = await import(`@/themes/${BLOG.THEME}/config.js`)
        return defaultTheme.default
      }
    }
  }

  // 默认主题配置
  try {
    const defaultTheme = await import(`@/themes/${BLOG.THEME}/config.js`)
    return defaultTheme.default
  } catch (error) {
    console.error('Error loading default theme configuration:', error)
    return {}
  }
}

/**
 * 获取主题布局组件
 * @param {string} layoutName - 布局名称
 * @param {string} theme - 主题名称
 * @returns {Promise<Component>} React组件
 */
export const getLayoutByTheme = ({ layoutName = 'LayoutIndex', theme = BLOG.THEME }) => {
  try {
    return import(`@/themes/${theme}`).then(mod => mod[layoutName] || mod.LayoutIndex)
  } catch (error) {
    console.error(`Error loading layout ${layoutName} for theme ${theme}:`, error)
    return import(`@/themes/${BLOG.THEME}`).then(mod => mod.LayoutIndex)
  }
}

// 切换主题时的特殊处理
export const fixThemeDOM = () => {
  if (typeof window !== 'undefined') {
    const elements = document.getElementsByClassName('notion-collection-card-cover')
    for (const element of elements) {
      element.style.maxHeight = 'none'
    }
  }
}

// 初始化主题
export const initDarkMode = (updateDarkMode, defaultDarkMode) => {
  if (typeof window !== 'undefined') {
    const isDark = loadDarkModeFromLocalStorage()
    if (isDark === null) {
      const prefersDark = isPreferDark()
      updateDarkMode(prefersDark)
      saveDarkModeToLocalStorage(prefersDark)
    } else {
      updateDarkMode(isDark)
      saveDarkModeToLocalStorage(isDark)
    }

    // 监听系统主题变化
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeMediaQuery.addListener((e) => {
      updateDarkMode(e.matches)
      saveDarkModeToLocalStorage(e.matches)
    })
  } else {
    updateDarkMode(defaultDarkMode)
  }
}

// 是否优先深色模式
export const isPreferDark = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return false
}

// 读取深色模式
export const loadDarkModeFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('darkMode')
    return value ? JSON.parse(value) : null
  }
  return null
}

// 保存深色模式
export const saveDarkModeToLocalStorage = (darkMode) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }
}
