import { Section } from '@/components/ui/Section'

type Stat = { value: string; label: string }

const stats: Stat[] = [
  { value: '3 min', label: 'Per daily session' },
  { value: '6+', label: 'Exercise types' },
  { value: '0–100', label: 'AI score per session' },
  { value: 'Free', label: 'To start' },
]

export function StatsStrip() {
  return (
    <Section className="border-y border-cream-200 bg-cream-100" spacing="compact">
      <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <dt className="font-display text-headline text-ink-900">{s.value}</dt>
            <dd className="mt-1 text-caption uppercase tracking-[0.14em] text-ink-500">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
