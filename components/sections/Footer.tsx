import { Section } from '@/components/ui/Section'

const links = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <Section as="footer" className="bg-cream-50 border-t border-cream-200" spacing="compact">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-display text-title text-ink-900">Klam</span>
          <span className="text-small text-ink-500">Train communication like a skill.</span>
        </div>

        <nav className="flex items-center gap-4 text-small text-ink-600">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex min-h-[44px] items-center px-2 transition-colors duration-300 ease-klam hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-8 text-caption text-ink-500">
        © 2026 Klam. All rights reserved.
      </p>
    </Section>
  )
}
