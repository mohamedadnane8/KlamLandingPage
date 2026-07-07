import { CountUp } from '@/components/CountUp'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type SubScore = { label: string; value: number }

const subScores: SubScore[] = [
  { label: 'Pacing', value: 88 },
  { label: 'Clarity', value: 84 },
  { label: 'Filler control', value: 76 },
  { label: 'Structure', value: 90 },
]

export function AiFeedback() {
  return (
    <Section id="ai-feedback" className="bg-cream-100">
      <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        {/* Copy */}
        <SectionHeading
          eyebrow="AI coach"
          title="Feedback that actually helps."
        >
          After every exercise, KLAM gives you feedback that sounds like a great
          coach — specific, honest, and useful. Not "good job." Not vague
          suggestions. The kind that makes the next rep better than the last.
        </SectionHeading>

        {/* Score-reveal card */}
        <div className="rounded-2xl bg-cream-50 p-8 shadow-lg md:p-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-caption font-medium uppercase tracking-[0.16em] text-ink-500">
                Overall score
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <CountUp
                  to={84}
                  className="font-display text-[88px] leading-none text-ink-900"
                />
                <span className="text-title text-ink-500">/100</span>
              </div>
            </div>
            <span className="mb-2 rounded-full bg-sage-500 px-3 py-1 text-caption font-semibold text-cream-50">
              6 higher than yesterday
            </span>
          </div>

          {/* Sub-scores */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
            {subScores.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-small text-ink-600">{s.label}</span>
                  <span className="text-small font-semibold text-ink-800">{s.value}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-cream-200">
                  <span
                    className="block h-full rounded-full bg-sage-400"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Transcript-grounded note */}
          <div className="mt-8 rounded-lg bg-cream-100 p-5">
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-ink-500">
              What we heard
            </p>
            <p className="mt-2 text-body leading-relaxed text-ink-700">
              "…and I think{' '}
              <mark className="rounded bg-honey-500 px-1 text-ink-900">um</mark>{' '}
              the main reason this{' '}
              <mark className="rounded bg-honey-500 px-1 text-ink-900">um</mark>{' '}
              really matters is trust."
            </p>
            <p className="mt-3 text-small text-ink-600">
              You said um twice before making your main point — 4% of your words,
              down from 8% last week. Strong pause before your close. Watch "the
              thing is" — you leaned on it twice.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
