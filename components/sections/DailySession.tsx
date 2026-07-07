import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

type Exercise = {
  step: string
  name: string
  body: string
  duration: string
}

const exercises: Exercise[] = [
  {
    step: '01',
    name: 'Think on your feet',
    body: 'Respond to an unexpected prompt without preparation. Builds the reflex you need for interviews, meetings, and hard conversations.',
    duration: '90 sec',
  },
  {
    step: '02',
    name: 'Structure your thoughts',
    body: 'Practice organizing any idea in seconds using proven frameworks. Never ramble through an answer again.',
    duration: '90 sec',
  },
  {
    step: '03',
    name: 'Nail any interview',
    body: 'Tell the kind of stories that get you hired. Practice answers that are specific, structured, and remembered.',
    duration: '2 min',
  },
  {
    step: '04',
    name: 'Sharpen your vocabulary',
    body: "Discover words you don't use yet — then actively practice them until they're yours.",
    duration: '60 sec',
  },
  {
    step: '05',
    name: 'Say more with less',
    body: 'Cut filler words. Tighten your answers. Make every word do something.',
    duration: '60 sec',
  },
]

export function DailySession() {
  return (
    <Section id="daily-session" className="bg-cream-50">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        {/* Copy + summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading eyebrow="What you'll train" title="Every exercise is built around a real situation.">
            From thinking on your feet to landing any interview question — KLAM covers
            the full range of communication. New exercises added regularly.
          </SectionHeading>

          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-6">
            <SummaryStat value="5+" label="Exercises" />
            <SummaryStat value="3 min" label="Per session" />
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

          {/* More coming */}
          <li className="relative flex gap-5 pt-2">
            <span className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-dashed border-cream-300 bg-cream-50 text-caption text-ink-400">
              +
            </span>
            <div className="flex flex-1 items-center">
              <p className="text-body text-ink-400">
                Storytelling, persuasion, negotiations, leadership communication — and more.
              </p>
            </div>
          </li>
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
