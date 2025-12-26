'use client'

import { useEffect, useRef } from 'react'

interface GraphAnimatedProps {
  width?: number
  height?: number
  strokeColor?: string
  strokeWidth?: number
  data: number[]
  delay?: number // задержка перед повторением анимации в мс
  repeatDelay?: number
  title?: string
  subtitle?: string
}

export default function GraphAnimated({
  width = 600,
  height = 200,
  strokeColor = '#2469FE',
  strokeWidth = 6, // толще
  data,
  delay = 1000,
  repeatDelay = 3000,
  title = 'Views',
  subtitle = '24 hours',
}: GraphAnimatedProps) {
  const pathRef = useRef<SVGPathElement | null>(null)

  // нормализация данных, чтобы линия шла от нуля и заканчивалась вверху
  const minVal = Math.min(...data, 0)
  const maxVal = Math.max(...data, 0)

  const pathD = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((val - minVal) / (maxVal - minVal)) * height
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = length.toString()

    const animate = () => {
      path.style.transition = 'none'
      path.style.strokeDashoffset = length.toString()
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 3s ease-in-out'
        path.style.strokeDashoffset = '0'
      }, 100)
    }

    animate()
    const interval = setInterval(animate, 3000 + delay)
    return () => clearInterval(interval)
  }, [data, delay])

  return (
    <div className="relative w-full">
      {/* Заголовки сверху */}
      <div className="mb-4 flex justify-between">
        <div>
          <p className="text-gray-500 text-sm">{subtitle}</p>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-sm">vs last month</p>
          <h2 className="text-xl font-semibold">100k</h2>
        </div>
      </div>

      {/* SVG график */}
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

      {/* Текстовые подписи снизу */}
      <div className="text-gray-600 mt-4 flex justify-between text-sm">
        <span>0</span>
        <span>{Math.floor(maxVal / 2)}</span>
        <span>{maxVal}</span>
      </div>

      <div className="text-gray-700 mt-2">
        <h4 className="font-semibold">Data-Driven Decisions</h4>
        <p className="text-sm">
          Track performance metrics instantly to optimize content and strategy.
        </p>
      </div>
    </div>
  )
}
