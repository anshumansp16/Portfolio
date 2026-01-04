'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navigation = {
  main: [
    { name: 'Work', href: '/work' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Connect', href: '/connect' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/anshumansp' },
    { name: 'GitHub', href: 'https://github.com/anshumansp' },
    { name: 'X', href: 'https://x.com/anshumansp' },
    { name: 'Email', href: 'mailto:anshuman@anshumansp.com' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-noir-void border-t border-white/[0.03] overflow-hidden">
      <div className="container-wide relative z-10 py-16 md:py-20">
        {/* Signature Layout: Left - Center - Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Left: Name + Role */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span
                className="text-platinum/60 transition-colors duration-300 group-hover:text-platinum/80 relative"
                style={{
                  fontFamily: 'var(--font-signature)',
                  fontSize: '2.2rem',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                Anshuman
                {/* The Line motif - final frame */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-graphite/40 via-graphite/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </Link>
            <p className="text-body-sm text-silver/50" style={{ fontWeight: 300 }}>
              Systems Architect
            </p>
          </div>

          {/* Center: Navigation */}
          <nav className="flex flex-col gap-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-body-sm text-silver/60 hover:text-platinum/80 transition-colors duration-300 w-fit"
                style={{ fontWeight: 300 }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: Contact Links */}
          <div className="flex flex-col gap-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-silver/60 hover:text-platinum/80 transition-colors duration-300 w-fit"
                style={{ fontWeight: 300 }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - Minimal */}
        <div className="mt-16 pt-8 border-t border-white/[0.02]">
          <p className="text-body-sm text-graphite/60" style={{ fontWeight: 300 }}>
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
