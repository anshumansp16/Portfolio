'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TextReveal } from '@/components/motion/TextReveal'
import { RotatingText } from '@/components/motion/RotatingText'
import { ScrollIndicator } from '@/components/motion/ScrollIndicator'
import { GradientMesh } from '@/components/motion/GradientMesh'

const rotatingWords = [
  'AI-Driven Solutions',
  'Enterprise Systems',
  'Scalable Platforms',
  'Intelligent Automation',
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir-primary">
      {/* Gradient Mesh Background */}
      <GradientMesh />

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Small Label */}
          <motion.p
            className="text-label text-graphite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SENIOR AI ARCHITECT & SYSTEMS BUILDER
          </motion.p>

          {/* Main Title with Text Reveal */}
          <h1 className="text-display-xl font-display font-normal text-platinum max-w-5xl">
            <TextReveal delay={0.4}>ANSHUMAN PARMAR</TextReveal>
          </h1>

          {/* Tagline with Rotating Text */}
          <motion.div
            className="text-headline-md font-sans font-medium text-silver max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="inline-block">Architecting</span>{' '}
            <RotatingText
              words={rotatingWords}
              className="text-gradient inline-block min-w-[280px] md:min-w-[400px]"
            />{' '}
            <span className="inline-block">that Transform Business</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-body text-graphite max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            At the intersection of artificial intelligence and enterprise scalability,
            I build systems that don't just work—they fundamentally transform how
            businesses operate in the AI-first era.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <a
              href="/work"
              className="luxury-button group"
            >
              <span className="relative z-10">Explore My Work</span>
            </a>
            <a
              href="/connect"
              className="luxury-button group border-graphite text-silver hover:border-silver hover:text-platinum"
            >
              <span className="relative z-10">Let's Connect</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator />
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(229, 231, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(229, 231, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </section>
  )
}
