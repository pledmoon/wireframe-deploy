'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ProductImageProps {
  src?: string
  alt?: string
}

export default function ProductImage({ alt = '' }: ProductImageProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.4], [24, 0], { clamp: true })

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1], { clamp: true })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1], { clamp: true })

  return (
    <section className="relative flex w-full justify-center">
      <div className="w-full max-w-[1200px] [perspective:1200px]">
        <motion.div
          ref={targetRef}
          style={{
            rotateX,
            scale,
            opacity,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          className="relative overflow-hidden rounded-[32px] shadow-[0_12px_24px_4px_#2667ff1f]"
        >
          <Image
            src="/scale.png"
            alt={alt}
            width={1200}
            height={800}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
