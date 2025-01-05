import CONFIG from './config'
import { useGlobal } from '@/lib/global'
import React from 'react'
import styles from './style.module.css'

export const LayoutIndex = ({ children, meta }) => {
  const { theme } = useGlobal()

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default { LayoutIndex }
