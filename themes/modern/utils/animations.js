import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react'

// 渐入动画
export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

// 缩放动画
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

// 滑入动画
export const slideVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

// 弹跳动画
export const bounceVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  }
}

// 交错动画
export const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
}

// 自定义动画Hook
export const useAnimateOnScroll = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls, inView }
}

// 动画容器组件
export const AnimateOnScroll = ({ children, variants = fadeInVariants, className = '' }) => {
  const { ref, controls } = useAnimateOnScroll()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 交错动画容器组件
export const StaggerContainer = ({ children, className = '', delayStep = 0.1 }) => {
  const { ref, controls } = useAnimateOnScroll()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: delayStep
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画子项组件
export const StaggerItem = ({ children, index = 0, className = '' }) => {
  return (
    <motion.div
      variants={staggerVariants}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  )
}
