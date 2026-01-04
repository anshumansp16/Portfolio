'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/ui/Container'

export function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <section ref={ref} className="section-padding-lg bg-noir-void relative overflow-hidden">
      {/* Decorative Line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-graphite to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <Container size="narrow">
        <div className="text-center space-y-8">
          {/* Label */}
          <motion.p
            className="text-label text-graphite"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MY PHILOSOPHY
          </motion.p>

          {/* Quote with Scroll-Driven Opacity */}
          <motion.blockquote
            className="text-headline-md md:text-display-md font-display italic text-platinum"
            style={{ opacity, y }}
          >
            "At the intersection of artificial intelligence and enterprise
            scalability, I architect systems that don't just work—they
            fundamentally transform how businesses operate in the AI-first era."
          </motion.blockquote>

          {/* Decorative Elements */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-graphite" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal-brilliant animate-glow-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-graphite" />
          </motion.div>
        </div>
      </Container>

      {/* Bottom Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-graphite to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />
    </section>
  )
}
