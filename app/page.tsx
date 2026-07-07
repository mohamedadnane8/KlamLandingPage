import { Hero } from '@/components/Hero'
import { AiFeedback } from '@/components/sections/AiFeedback'
import { DailySession } from '@/components/sections/DailySession'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'
import { Gamification } from '@/components/sections/Gamification'
import { ShareableProgress } from '@/components/sections/ShareableProgress'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100">
      <SiteHeader />
      <Hero />

      <Section id="how-it-works" spacing="compact">
        <div className="max-w-xl">
          <h2 className="font-display text-headline text-ink-900">
            Three minutes. Every day. That’s the whole ask.
          </h2>
          <p className="mt-3 text-body text-ink-600">
            One short loop, repeated until it’s a habit. Small enough to keep.
            Honest enough to matter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            title="You speak"
            body="A sixty-second prompt, no script. You build the reflex one minute at a time."
          />
          <Card
            title="Klam listens"
            body="A real transcript, then specific notes on your pace, your fillers, your structure."
          />
          <Card
            title="You come back"
            body="Streaks and small goals that respect your time instead of demanding it."
          />
        </div>
      </Section>

      <DailySession />
      <AiFeedback />
      <Gamification />
      <ShareableProgress />
      <StatsStrip />
      <FinalCta />
      <Footer />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <span className="font-display text-title text-ink-900">Klam</span>
        <nav className="flex items-center gap-6 text-small text-ink-600">
          <a
            className="hidden min-h-[44px] items-center px-2 transition-colors duration-300 ease-klam hover:text-ink-900 sm:inline-flex"
            href="#how-it-works"
          >
            How it works
          </a>
          <Button href="#get-started" size="md">
            Get the app
          </Button>
        </nav>
      </div>
    </header>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg bg-cream-50 p-6 shadow-card transition-shadow hover:shadow-md">
      <h3 className="text-title text-ink-900">{title}</h3>
      <p className="mt-3 text-body text-ink-600">{body}</p>
    </div>
  )
}
