import { useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Header from './components/Header'
import Footer from './components/Footer'
import CONFIG from './config'

const BusinessLayout = ({ children, layoutName, ...props }) => {
  // Add Tailwind dark mode class based on theme
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header {...props} />
      
      {(!layoutName || layoutName === 'LayoutIndex') && (
        <>
          <Hero {...props} />
          <Features />
        </>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer {...props} />
    </div>
  )
}

export const LayoutIndex = props => <BusinessLayout {...props} />
export const LayoutSearch = props => <BusinessLayout {...props} />
export const LayoutArchive = props => <BusinessLayout {...props} />
export const LayoutSlug = props => <BusinessLayout {...props} />
export const Layout404 = props => <BusinessLayout {...props} />
export const LayoutCategoryIndex = props => <BusinessLayout {...props} />
export const LayoutPostList = props => <BusinessLayout {...props} />
export const LayoutTagIndex = props => <BusinessLayout {...props} />

export { CONFIG }
