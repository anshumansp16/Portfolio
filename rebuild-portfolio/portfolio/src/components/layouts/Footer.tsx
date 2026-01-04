'use client'

import React from 'react'
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
    { name: 'X (Twitter)', href: 'https://x.com/anshumansp' },
    { name: 'Email', href: 'mailto:anshuman@anshumansp.com' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-noir-void border-t border-white/[0.06] overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 md:py-20">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span
                className="text-platinum transition-colors duration-200 group-hover:text-accent-gold"
                style={{
                  fontFamily: 'var(--font-signature)',
                  fontSize: '2.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                Anshuman
              </span>
            </Link>
            <p className="text-body-sm text-silver/70 max-w-xs">
              AI Architect & Systems Builder crafting enterprise solutions that
              transform business operations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-label text-graphite">NAVIGATE</h3>
            <nav className="flex flex-col gap-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="luxury-link text-body-sm text-silver hover:text-platinum w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-6">
            <h3 className="text-label text-graphite">CONNECT</h3>
            <div className="flex flex-col gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link text-body-sm text-silver hover:text-platinum w-fit"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-graphite">
              © {currentYear} Anshuman Parmar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-body-sm text-graphite hover:text-silver transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-body-sm text-graphite hover:text-silver transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </footer>
  )
}
