'use client'

import React, { useRef } from 'react'

const TiltFx = ({ children }) => {
  const ref = useRef(null)
  let lastCall = 0
  let resetTimeout

  const handleMouseMove = (e) => {
    if ('ontouchstart' in window) return

    clearTimeout(resetTimeout)

    const now = Date.now()
    if (now - lastCall < 16) return
    lastCall = now

    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const deltaX = (offsetX - centerX) / centerX
    const deltaY = (offsetY - centerY) / centerY

    const rotateX = -deltaY * 15
    const rotateY = -deltaX * 15

    window.requestAnimationFrame(() => {
      element.style.transform = `perspective(1000px) translate3d(0, 0, 30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
  }

  const handleMouseLeave = () => {
    if ('ontouchstart' in window) return

    const element = ref.current
    if (element) {
      resetTimeout = setTimeout(() => {
        element.style.transform = 'none'
      }, 100)
    }
  }

  return (
    <div
      ref={ref}
      className="transition-transform duration-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

const Column = ({ children, alignItems = 'center', gap = '0', fillWidth = false, position = 'static' }) => {
  return (
    <div
      className={`flex flex-col ${
        alignItems === 'center' ? 'items-center' : ''
      } ${gap ? `gap-${gap}` : ''} ${
        fillWidth ? 'w-full' : ''
      } ${position}`}
    >
      {children}
    </div>
  )
}

const Heading = ({ children, align = 'left', as: Component = 'h2', variant = 'default' }) => {
  const variantStyles = {
    'display-default-l': 'text-4xl md:text-5xl font-bold',
    default: 'text-2xl font-bold'
  }

  return (
    <Component
      className={`${variantStyles[variant] || variantStyles.default} ${
        align === 'center' ? 'text-center' : ''
      } text-gray-900 dark:text-white`}
    >
      {children}
    </Component>
  )
}

const CodeBlock = ({ compact = false, maxWidth, codeInstances = [] }) => {
  return (
    <div
      className={`w-full ${maxWidth ? `max-w-[${maxWidth}rem]` : ''} ${
        compact ? 'p-4' : 'p-6'
      } rounded-lg bg-gray-900`}
    >
      {codeInstances.map((instance, index) => (
        <div key={index} className="text-gray-300">
          <pre className="overflow-x-auto">
            <code className={`language-${instance.language}`}>
              {instance.code}
            </code>
          </pre>
        </div>
      ))}
    </div>
  )
}

const QuickStart = () => {
  return (
    <TiltFx>
      <Column alignItems="center" gap="12" fillWidth position="relative">
        <Column alignItems="center" gap="12" fillWidth>
          <Heading align="center" as="h2" variant="display-default-l">
            Quick start
          </Heading>
          <CodeBlock
            compact
            maxWidth={40}
            codeInstances={[
              {
                code: `git clone https://github.com/once-ui-system/nextjs-starter.git`,
                language: "tsx",
                label: "tsx",
              },
            ]}
          />
        </Column>
      </Column>
    </TiltFx>
  )
}

export default QuickStart
