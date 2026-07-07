import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const outcomes = [
  'The promotion went to the person who could articulate their ideas.',
  'The offer went to the candidate who told the better story.',
  'The room followed the person who spoke with conviction.',
  'The deal closed because they could handle any question.',
  'The team trusted the leader who was clear under pressure.',
]

export function ShareableProgress() {
  return (
    <Section id="stakes" className="bg-cream-100">
      <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <SectionHeading
          eyebrow="The stakes"
          title="Communication is leverage."
        >
          It's not about speaking better. It's about what happens when you do.
        </SectionHeading>

        <div className="divide-y divide-cream-200">
          {outcomes.map((outcome) => (
            <p key={outcome} className="py-5 text-body text-ink-700 first:pt-0">
              {outcome}
            </p>
          ))}
          <p className="pt-6 text-title font-semibold text-ink-900">
            Better communication isn't soft. It's the skill everything else depends on.
          </p>
        </div>
      </div>
    </Section>
  )
}
