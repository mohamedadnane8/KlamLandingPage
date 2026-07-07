import { Section } from '@/components/ui/Section'
import { WaitingListForm } from '@/components/ui/WaitingListForm'

export function FinalCta() {
  return (
    <Section id="get-started" className="bg-sage-50">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-headline text-ink-900">
          The best communicators got there by practicing.
        </h2>
        <p className="mt-4 text-subtitle text-ink-600">
          Every session is three minutes. Every rep builds on the last. The only
          thing between where you are now and where you want to be is showing up.
        </p>

        <WaitingListForm className="mt-10 text-left" />

        <p className="mt-6 text-small text-ink-500">
          No credit card required.
        </p>
      </div>
    </Section>
  )
}
