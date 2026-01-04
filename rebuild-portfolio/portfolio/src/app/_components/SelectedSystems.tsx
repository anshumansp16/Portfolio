'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

interface SystemProps {
  name: string
  purpose: string
  constraint: string
  index: number
}

function System({ name, purpose, constraint, index }: SystemProps) {
  return (
    <motion.div
      className="relative border-b border-white/[0.04] pb-12 md:pb-16 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* System Name */}
      <h3
        className="text-headline-md text-platinum mb-6"
        style={{
          fontWeight: 400,
          letterSpacing: '-0.02em',
        }}
      >
        {name}
      </h3>

      {/* Purpose */}
      <p
        className="text-body-lg text-platinum/80 mb-4"
        style={{
          fontWeight: 300,
          letterSpacing: '-0.01em',
          lineHeight: 1.7,
        }}
      >
        {purpose}
      </p>

      {/* Constraint */}
      <p
        className="text-body text-silver/50"
        style={{
          fontWeight: 300,
          letterSpacing: '0.01em',
        }}
      >
        {constraint}
      </p>
    </motion.div>
  )
}

const systems = [
  {
    name: 'Autonomous Operations Platform',
    purpose: 'Replaced manual escalation loops with deterministic workflows.',
    constraint: 'Handles peak concurrency with controlled failure modes.',
  },
  {
    name: 'Delivery & Release Architecture',
    purpose: 'Designed pipelines that shorten cycle time without compromising safety.',
    constraint: 'Built around rollback-first releases and observability.',
  },
  {
    name: 'Decision Systems',
    purpose: 'Models are treated as components, not magic.',
    constraint: 'Designed evaluation, drift monitoring, and incident playbooks.',
  },
]

export function SelectedSystems() {
  return (
    <section className="relative bg-noir-void py-32 md:py-40 overflow-hidden">
      {/* Subtle curve background (The Line motif) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 400 Q 300 200 600 400 T 1200 400"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-graphite"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <Container size="narrow">
        <div className="relative">
          {/* Label */}
          <motion.p
            className="text-label font-mono text-graphite mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SELECTED SYSTEMS
          </motion.p>

          {/* Systems */}
          <div className="space-y-12 md:space-y-16">
            {systems.map((system, index) => (
              <System key={system.name} {...system} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
