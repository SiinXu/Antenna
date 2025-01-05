import CONFIG from './config'
import { useGlobal } from '@/lib/global'
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import styles from './style.module.css'

export const LayoutIndex = ({ children, meta }) => {
  const { theme } = useGlobal()

  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      <Hero />
      <Features />
      <main className='flex-1 container mx-auto px-4'>{children}</main>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default { LayoutIndex }
