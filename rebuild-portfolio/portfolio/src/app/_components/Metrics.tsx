'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useCountUp } from '@/lib/hooks/useCountUp'
import { formatNumber } from '@/lib/utils'

interface MetricCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description: string
  decimals?: number
  index: number
}

function MetricCard({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  decimals = 0,
  index,
}: MetricCardProps) {
  const [hasStarted, setHasStarted] = useState(false)
  const { count, start } = useCountUp({
    end: value,
    duration: 2000,
    decimals,
    startOnMount: false,
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
            start()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted, start])

  return (
    <motion.div
      ref={ref}
      className="luxury-card group relative text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Glow Effect */}
      <div className="glow" />

      {/* Number */}
      <div className="text-6xl md:text-7xl font-bold text-platinum mb-4">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : formatNumber(Math.floor(count))}
        {suffix}
      </div>

      {/* Label */}
      <h3 className="text-headline-sm font-medium text-platinum mb-2">{label}</h3>

      {/* Description */}
      <p className="text-body-sm text-graphite">{description}</p>

      {/* Decorative Line */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-teal-brilliant to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
      />
    </motion.div>
  )
}

const metricsData = [
  {
    value: 50000,
    suffix: '+',
    label: 'Tasks Automated Daily',
    description: 'Across production systems',
    decimals: 0,
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'System Uptime',
    description: 'Enterprise-grade reliability',
    decimals: 1,
  },
  {
    value: 2.3,
    suffix: 'M',
    prefix: '$',
    label: 'Revenue Impact',
    description: 'Generated for clients',
    decimals: 1,
  },
  {
    value: 85,
    suffix: '%',
    label: 'AI Accuracy',
    description: 'Production model performance',
    decimals: 0,
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Concurrent Requests',
    description: 'Peak system throughput',
    decimals: 0,
  },
  {
    value: 60,
    suffix: '%',
    label: 'Deploy Time Reduction',
    description: 'Through automation',
    decimals: 0,
  },
]

export function Metrics() {
  return (
    <section className="section-padding bg-noir-primary relative">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-label text-graphite mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            IMPACT METRICS
          </motion.p>
          <motion.h2
            className="text-headline-lg text-platinum"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building Systems That Deliver Results
          </motion.h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {metricsData.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
