import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type Exercise = {
  step: string
  name: string
  body: string
  duration: string
}

// Two reps make up one daily session (~3 minutes total): a fixed minute of
// breath, then a surprise exercise that changes every day.
const exercises: Exercise[] = [
  {
    step: '01',
    name: 'Breathing & centering',
    body: 'A guided minute to slow your breath before you speak. You start settled, not rushed.',
    duration: '1:00',
  },
  {
    step: '02',
    name: 'Today’s surprise',
    body: 'The second rep changes every day — articulation, rhythm, framing, an on-the-spot speech. You find out when you open the app, and it’s scored the moment you finish.',
    duration: '2:00',
  },
]

export function DailySession() {
  return (
    <Section id="daily-session" className="bg-cream-50">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Copy + summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading eyebrow="The daily session" title="Two exercises. Three minutes.">
            One deliberate flow, done once a day. It always opens the same way — a
            minute of breath — then hands you the day’s surprise. Short enough to
            never skip, scored so you always know where you stand.
          </SectionHeading>

          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-6">
            <SummaryStat value="2" label="Exercises" />
            <SummaryStat value="~3" label="Minutes" />
            <SummaryStat value="0–100" label="AI-scored" />
          </dl>
        </div>

        {/* Vertical stepper */}
        <ol className="relative">
          {/* connecting spine */}
          <span
            aria-hidden
            className="absolute left-[19px] top-3 bottom-3 w-px bg-cream-200"
          />
          {exercises.map((ex) => (
            <li key={ex.step} className="relative flex gap-5 pb-8 last:pb-0">
              <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-sage-200 bg-cream-50 text-caption font-semibold text-sage-600">
                {ex.step}
              </span>

              <div className="flex-1 rounded-lg bg-cream-100 p-6 shadow-card transition-shadow duration-300 ease-klam hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-title text-ink-900">{ex.name}</h3>
                  <span className="flex-none rounded-full bg-cream-200/70 px-3 py-1 text-caption font-medium text-ink-600">
                    {ex.duration}
                  </span>
                </div>
                <p className="mt-2 text-body text-ink-600">{ex.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

function SummaryStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-headline text-ink-900">{value}</dt>
      <dd className="mt-1 text-caption uppercase tracking-[0.14em] text-ink-500">{label}</dd>
    </div>
  )
}
