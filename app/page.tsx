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
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100">
      <SiteHeader />
      <Hero />
      <EmotionalHook />
      <StatsStrip />

      <Section id="how-it-works" spacing="compact">
        <SectionHeading eyebrow="How it works" title="Simple. Daily. Effective.">
          Show up. Practice. Get better. Come back tomorrow and go again.
        </SectionHeading>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            title="Your session is ready"
            body="Open KLAM and your daily workout is waiting. No planning. No setup. Just practice."
          />
          <Card
            title="Do the reps"
            body="Short, focused exercises. Speak, respond, and structure your thoughts."
          />
          <Card
            title="Get real feedback"
            body="Specific coaching on what you said, how you said it, and exactly what to work on next."
          />
        </div>
      </Section>

      <DailySession />
      <Gamification />
      <AiFeedback />
      <ShareableProgress />
      <Faq />
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
            Join waitlist
          </Button>
        </nav>
      </div>
    </header>
  )
}

function EmotionalHook() {
  return (
    <Section className="bg-cream-50">
      <div className="mx-auto max-w-2xl">
        <p className="text-subtitle text-ink-700">You know the feeling.</p>
        <div className="mt-6 space-y-3 border-l-2 border-cream-200 pl-4 sm:pl-6 text-body text-ink-600">
          <p>Blanking on an interview question you'd answered a hundred times in your head.</p>
          <p>Leaving a meeting wishing you'd said something — anything.</p>
          <p>Rambling through a presentation and watching the room drift.</p>
          <p>Your mind going empty exactly when it needed to be sharp.</p>
        </div>
        <p className="mt-8 text-title font-semibold text-ink-900">
          That's not a personality trait.
        </p>
        <p className="mt-2 text-body text-ink-600">
          It's an undertrained skill. And skills can be trained.
        </p>
      </div>
    </Section>
  )
}

const faqs = [
  {
    q: 'Is this only for public speaking?',
    a: 'No. KLAM trains the full range of communication — interviews, meetings, storytelling, and everyday conversation. Public speaking is one area we cover, not the only one.',
  },
  {
    q: 'How long is a session?',
    a: 'About three minutes. Designed to fit into a real day, not replace it. You can do more if you want — the system rewards it.',
  },
  {
    q: 'Do I have to speak out loud?',
    a: "Yes. That's the whole point. You don't get better at speaking by reading about it. KLAM is built around actual practice — saying words, hearing real feedback, and going again.",
  },
  {
    q: 'How is this different from a book or a course?',
    a: 'A book teaches you about communication. KLAM makes you practice it. Those are completely different things.',
  },
  {
    q: 'Who is this for?',
    a: "Anyone who speaks to other humans and wants to do it better. Students, job seekers, managers, founders, creators — anyone who has ever left a conversation wishing they'd said it differently.",
  },
]

function Faq() {
  return (
    <Section id="faq" className="bg-cream-50">
      <SectionHeading eyebrow="FAQ" title="Common questions." className="max-w-2xl" />
      <div className="mt-12 max-w-2xl divide-y divide-cream-200">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-title font-semibold text-ink-900">{faq.q}</h3>
            <p className="mt-2 text-body text-ink-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 p-5 shadow-card sm:p-8">
      <h3 className="text-title font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-body text-ink-600">{body}</p>
    </div>
  )
}
