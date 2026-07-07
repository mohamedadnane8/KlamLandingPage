import { Section } from '@/components/ui/Section'
import { WaitingListForm } from '@/components/ui/WaitingListForm'

export function FinalCta() {
  return (
    <Section id="get-started" className="bg-sage-50">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-headline text-ink-900">
          Be first when we launch.
        </h2>
        <p className="mt-4 text-subtitle text-ink-600">
          Klam is coming soon. Leave your email and we'll let you know the
          moment it's ready — no spam, no pressure.
        </p>

        <WaitingListForm className="mt-10 text-left" />

        <p className="mt-6 text-small text-ink-500">
          Two exercises. Three minutes. One honest score a day.
        </p>
      </div>
    </Section>
  )
}
