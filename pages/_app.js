// import '@/styles/animate.css' // @see https://animate.style/
import '@/styles/globals.css'
import '@/styles/utility-patterns.css'

// core styles shared by all of react-notion-x (required)
import '@/styles/notion.css' //  重写部分notion样式
import 'react-notion-x/src/styles.css' // 原版的react-notion-x

import useAdjustStyle from '@/hooks/useAdjustStyle'
import { GlobalContextProvider } from '@/lib/global'
import { getBaseLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useEffect } from 'react'
import { getQueryParam } from '../lib/utils'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { I18nProvider } from '../lib/i18n/I18nProvider'
import i18n from '../lib/i18n/i18n'

// 各种扩展插件 这个要阻塞引入
import BLOG from '@/blog.config'
import ExternalPlugins from '@/components/ExternalPlugins'
import SEO from '@/components/SEO'
import { zhCN } from '@clerk/localizations'
import dynamic from 'next/dynamic'
// import { ClerkProvider } from '@clerk/nextjs'
const ClerkProvider = dynamic(() =>
  import('@clerk/nextjs').then(m => m.ClerkProvider)
)

/**
 * App挂载DOM 入口文件
 * @param {*} param0
 * @returns
 */
const MyApp = ({ Component, pageProps }) => {
  // 一些可能出现 bug 的样式，可以统一放入该钩子进行调整
  useAdjustStyle()

  const route = useRouter()
  const theme = useMemo(() => {
    return (
      getQueryParam(route.asPath, 'theme') ||
      pageProps?.NOTION_CONFIG?.THEME ||
      BLOG.THEME
    )
  }, [route])

  // 整体布局
  const GLayout = useCallback(
    ({ children }) => {
      const Layout = getBaseLayoutByTheme(theme)
      return <Layout {...pageProps}>{children}</Layout>
    },
    [pageProps, theme]
  )

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang')
    if (langParam && ['en', 'zh'].includes(langParam)) {
      i18n.changeLanguage(langParam)
    }
  }, [])

  return (
    <I18nProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <GlobalContextProvider {...pageProps}>
            <SEO {...pageProps} />
            {enableClerk ? (
              <ClerkProvider localization={zhCN} />
            ) : (
              <></>
            )}
            <GLayout>
              <Component {...pageProps} />
            </GLayout>
            <ExternalPlugins {...pageProps} />
          </GlobalContextProvider>
        </LanguageProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default MyApp
