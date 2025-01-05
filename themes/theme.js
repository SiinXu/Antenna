import BLOG from '@/blog.config'
import getConfig from 'next/config'
import dynamic from 'next/dynamic'

// 在next.config.js中扫描所有主题
export const { THEMES = [] } = getConfig().publicRuntimeConfig

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
    return dynamic(() => import(`@/themes/${theme}`).then(mod => {
      const Layout = mod.default[layoutName]
      if (!Layout) {
        throw new Error(`Layout ${layoutName} not found in theme ${theme}`)
      }
      return Layout
    }), {
      loading: () => <div>Loading...</div>
    })
  } catch (error) {
    console.error(`Error loading layout ${layoutName} for theme ${theme}:`, error)
    return dynamic(() => import(`@/themes/${BLOG.THEME}`).then(mod => mod.default.LayoutIndex))
  }
}

/**
 * 切换主题时的特殊处理
 */
export const fixThemeDOM = () => {
  if (typeof window === 'undefined') return
  const elements = document.getElementsByClassName('notion-collection-page-properties')
  for (const element of elements) {
    element.remove()
  }
}

/**
 * 初始化主题
 * @param {Function} updateDarkMode - 更改主题状态函数
 * @param {boolean} defaultDarkMode - 默认深色模式
 */
export const initDarkMode = (updateDarkMode, defaultDarkMode) => {
  if (typeof window === 'undefined') return
  
  const darkMode = loadDarkModeFromLocalStorage()
  const isDark = darkMode ?? defaultDarkMode ?? isPreferDark()
  
  updateDarkMode(isDark)
  saveDarkModeToLocalStorage(isDark)
  
  if (isDark) {
    document.documentElement.classList.add('dark')
  }
}

/**
 * 是否优先深色模式
 */
export const isPreferDark = () => {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

/**
 * 读取深色模式
 */
export const loadDarkModeFromLocalStorage = () => {
  if (typeof window === 'undefined') return null
  const value = localStorage.getItem('darkMode')
  return value ? JSON.parse(value) : null
}

/**
 * 保存深色模式
 * @param {boolean} darkMode - 深色模式状态
 */
export const saveDarkModeToLocalStorage = (darkMode) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
}
