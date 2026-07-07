import type { ReactNode } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Gamification() {
  return (
    <Section id="progress" className="bg-cream-50">
      <SectionHeading
        eyebrow="Gamification, quietly"
        title="Progress you can feel, without a scoreboard."
        className="max-w-2xl"
      >
        Streaks, points, badges, a vocabulary that keeps growing. The parts of a
        game that bring you back tomorrow, kept quiet. A small mark for a good
        day, then out of your way.
      </SectionHeading>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Streak */}
        <Tile label="Current streak">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-display text-ink-900">14</span>
            <span className="text-body text-ink-500">days</span>
          </div>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/15 px-3 py-1 text-caption font-medium text-ink-800">
            <span aria-hidden="true">🔥</span> Your best: 21 days
          </p>
        </Tile>

        {/* XP / level */}
        <Tile label="Level 6 · Speaker">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-display text-ink-900">2,480</span>
            <span className="text-body text-ink-500">XP</span>
          </div>
          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-cream-200">
              <span className="block h-full w-[62%] rounded-full bg-honey-500" />
            </div>
            <p className="mt-2 text-caption text-ink-500">320 XP to level 7</p>
          </div>
        </Tile>

        {/* Badges */}
        <Tile label="Badges earned">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-display text-ink-900">9</span>
            <span className="text-body text-ink-500">of 24</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Early bird</Badge>
            <Badge>Clean take</Badge>
            <Badge>No fillers</Badge>
          </div>
        </Tile>

        {/* Vocabulary */}
        <Tile label="Vocabulary collected">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-display text-ink-900">142</span>
            <span className="text-caption font-medium text-sage-700">+6 this week</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Word>eloquent</Word>
            <Word>cadence</Word>
            <Word>poise</Word>
            <Word>candor</Word>
          </div>
        </Tile>
      </div>
    </Section>
  )
}

function Tile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-lg bg-cream-100 p-6 shadow-card transition-shadow duration-300 ease-klam hover:shadow-md">
      <p className="text-caption font-medium uppercase tracking-[0.14em] text-ink-500">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-honey-500/30 px-2.5 py-1 text-caption font-medium text-ink-600">
      {children}
    </span>
  )
}

function Word({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm bg-cream-200/70 px-2.5 py-1 text-caption font-medium text-ink-600">
      {children}
    </span>
  )
}
