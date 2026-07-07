import { Section } from '@/components/ui/Section'
import { WaitingListForm } from '@/components/ui/WaitingListForm'

export function Hero() {
  return (
    <Section className="bg-cream-100" containerClassName="md:py-28">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy column */}
        <div className="max-w-xl">
   

          <h1 className="mt-6 font-display text-display font-medium text-ink-800">
            A mindful practice for the speaking voice.
          </h1>

          <p className="mt-6 text-subtitle text-ink-600">
            Sixty-second prompts, no script. Honest notes on your pace, your
            filler words, your clarity. Three minutes a day, and you keep what you
            build.
          </p>

          <WaitingListForm className="mt-10" />

          <div className="mt-5 flex flex-wrap items-center gap-5">
            <a
              href="#how-it-works"
              className="min-h-[44px] inline-flex items-center text-small font-medium text-ink-600 underline underline-offset-4 hover:text-ink-800"
            >
              See how it works
            </a>
          </div>

          <p className="mt-4 text-small text-ink-500">
            No audience. No pressure. Just you and the next minute.
          </p>
        </div>

        {/* App mockup column */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </Section>
  )
}

/**
 * Placeholder device frame for the Klam app UI — swap the screen contents for a
 * real screenshot when available. Built entirely from design tokens (no images).
 * Decorative: hidden from assistive tech so the marketing copy carries meaning.
 */
function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-[300px] rounded-[2.75rem] border-[10px] border-ink-900 bg-cream-50 p-5 shadow-hero"
    >
      {/* speaker notch */}
      <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-cream-200" />

      {/* screen top row */}
      <div className="flex items-center justify-between">
        <span className="text-small font-semibold text-ink-800">Impromptu</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-honey-500/15 px-3 py-1 text-caption font-semibold text-ink-800">
          <span aria-hidden="true">🔥</span> Day 14
        </span>
      </div>

      {/* prompt card */}
      <div className="mt-5 rounded-lg bg-cream-100 p-5 shadow-card">
        <p className="text-caption font-medium uppercase tracking-wide text-ink-500">
          Your prompt
        </p>
        <p className="mt-2 font-display text-title text-ink-900">
          Describe a place that feels like home.
        </p>
      </div>

      {/* timer + record */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-sage-200">
          <span className="font-display text-headline text-ink-800">0:47</span>
        </div>
        <span className="mt-6 w-full rounded-full bg-sage-500 py-3 text-center text-small font-semibold text-cream-50 shadow-sm">
          Recording…
        </span>
      </div>

      {/* reward */}
      <div className="mt-5 flex items-center justify-center gap-2 text-caption text-ink-500">
        <span className="rounded-full bg-honey-500/15 px-2.5 py-0.5 font-semibold text-ink-800">
          +40 XP
        </span>
        <span>when you finish</span>
      </div>
    </div>
  )
}
