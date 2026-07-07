import { Section } from '@/components/ui/Section'

type Stat = { value: string; label: string }

// Concrete, specific numbers — no vague "thousands of happy users".
const stats: Stat[] = [
  { value: '2.4M', label: 'Sessions completed' },
  { value: '11 days', label: 'Average practice streak' },
  { value: '3.1M', label: 'Minutes practiced' },
  { value: '4.6★', label: 'App Store rating' },
]

export function StatsStrip() {
  return (
    <Section className="bg-cream-100" spacing="compact">
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-cream-50 p-6 text-center shadow-card"
          >
            <dt className="font-sans text-headline font-semibold text-ink-800">
              {s.value}
            </dt>
            <dd className="mt-2 text-small text-ink-500">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
