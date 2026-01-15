'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

interface NoteProps {
  title: string
  excerpt: string
  date: string
  index: number
}

function Note({ title, excerpt, date, index }: NoteProps) {
  return (
    <motion.article
      className="relative group cursor-pointer border-b border-white/[0.04] pb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Date */}
      <span
        className="font-mono text-graphite/50 block mb-3"
        style={{ fontSize: '10px', letterSpacing: '0.1em' }}
      >
        {date}
      </span>

      {/* Title */}
      <h3
        className="font-display text-platinum/90 mb-3 group-hover:text-platinum transition-colors duration-500"
        style={{
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-body text-silver/60 max-w-2xl"
        style={{
          fontWeight: 300,
          letterSpacing: '-0.01em',
          lineHeight: 1.7,
        }}
      >
        {excerpt}
      </p>

      {/* Read indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent-gold/0 via-accent-gold/30 to-accent-gold/0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', transformOrigin: 'left' }}
      />
    </motion.article>
  )
}

const notes = [
  {
    title: 'On Shipping Systems That Stay Shipped',
    excerpt: 'Most systems fail slowly, then all at once. The difference between reliable and fragile is usually just a few deliberate choices made early.',
    date: '2024',
  },
  {
    title: 'Failure-First Architecture',
    excerpt: 'Build for failure modes before success paths. When you design around what breaks, you stop pretending stability is the default.',
    date: '2024',
  },
  {
    title: 'Operational Leverage in Practice',
    excerpt: 'Leverage is doing more with the same. Automation that doesn\'t compound isn\'t leverage — it\'s just faster manual work.',
    date: '2023',
  },
]

export function Talks() {
  return (
    <section className="relative py-40 md:py-48">
      <Container size="narrow">
        {/* Section Label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="font-mono text-graphite/60"
            style={{ fontSize: '11px', letterSpacing: '0.1em' }}
          >
            FIELD NOTES
          </p>
        </motion.div>

        {/* Notes List */}
        <div className="space-y-12">
          {notes.map((note, index) => (
            <Note
              key={note.title}
              {...note}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
