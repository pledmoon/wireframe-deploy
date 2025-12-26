// components/GraphAnimated.tsx
'use client'

import { useEffect, useRef } from 'react'

// components/GraphAnimated.tsx

// components/GraphAnimated.tsx

// components/GraphAnimated.tsx

// components/GraphAnimated.tsx

interface GraphAnimatedProps {
  width?: number
  height?: number
  strokeColor?: string
  strokeWidth?: number
  data: number[]
  delay?: number // задержка перед повторением анимации в мс
  repeatDelay?: number
}

export default function GraphAnimated({
  width = 600,
  height = 100,
  strokeColor = '#2469FE',
  strokeWidth = 4,
  data,
  delay = 1000,
}: GraphAnimatedProps) {
  const pathRef = useRef<SVGPathElement | null>(null)

  const pathD = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - (val / 100) * height
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = length.toString()

    const animate = () => {
      // сброс линии
      path.style.transition = 'none'
      path.style.strokeDashoffset = length.toString()

      // через небольшую задержку запускаем анимацию
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 2s ease-in-out'
        path.style.strokeDashoffset = '0'
      }, 100)
    }

    // первый запуск
    animate()

    // повторяем каждые (длительность анимации + delay)
    const interval = setInterval(animate, 2000 + delay)

    return () => clearInterval(interval)
  }, [pathD, delay])

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        ref={pathRef}
        d={pathD}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
