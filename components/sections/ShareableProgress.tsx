import type { ReactNode } from 'react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ShareableProgress() {
  return (
    <Section id="share" className="bg-cream-100">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        {/* Share-card mock */}
        <div className="order-2 flex justify-center lg:order-1">
          <ShareCard />
        </div>

        {/* Copy + targets */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Shareable progress"
            title="A card you’d actually post."
          >
            Your score, your streak, your best line — laid out as a clean card
            that looks like Klam, not a screenshot. Send it to a story or the
            group chat in one tap. Nothing to crop.
          </SectionHeading>

          <p className="mt-8 text-caption font-medium uppercase tracking-[0.14em] text-ink-500">
            Share to
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ShareTarget label="Instagram" icon={<InstagramIcon />} />
            <ShareTarget label="TikTok" icon={<TikTokIcon />} />
            <ShareTarget label="WhatsApp" icon={<WhatsAppIcon />} />
            <ShareTarget label="X" icon={<XIcon />} />
          </div>
        </div>
      </div>
    </Section>
  )
}

/** A polished, story-format progress card — what actually gets shared. */
function ShareCard() {
  return (
    <div className="w-[320px] rounded-2xl bg-cream-50 p-8 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="font-display text-title text-ink-900">Klam</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-terracotta-500/15 px-3 py-1 text-caption font-semibold text-ink-800">
          <span aria-hidden="true">🔥</span> 14-day streak
        </span>
      </div>

      <div className="mt-10 text-center">
        <p className="text-caption font-medium uppercase tracking-[0.16em] text-ink-500">
          Today’s speech
        </p>
        <div className="mt-2 flex items-baseline justify-center gap-1">
          <span className="font-display text-hero leading-none text-ink-900">84</span>
          <span className="text-title text-ink-500">/100</span>
        </div>
        <p className="mt-3 text-body text-ink-600">Clarity &amp; delivery</p>
      </div>

      <blockquote className="mt-10 border-l-2 border-sage-300 pl-4 text-body italic leading-relaxed text-ink-700">
        “The reason this really matters is trust.”
      </blockquote>

      <p className="mt-8 text-center text-caption text-ink-500">
        klam.app · Practice speaking, calmly
      </p>
    </div>
  )
}

function ShareTarget({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={`Share to ${label}`}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cream-300 bg-cream-50 px-4 py-3 text-small font-medium text-ink-700 shadow-card transition-all duration-300 ease-klam hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="text-ink-800">{icon}</span>
      {label}
    </button>
  )
}

// Monochrome ink glyphs — brand marks kept calm (no brand colors, no gradients).
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.2 3h2.6c.2 1.5 1 2.8 2.2 3.6.7.5 1.5.8 2.4.9v2.6c-1.6 0-3.1-.5-4.4-1.4v5.9a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 1 0 1.9 2.6V3Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20l1.1-3.9A7.5 7.5 0 1 1 8 19.4L4 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.4c.2-.1.5 0 .6.2l.7 1.2c.1.2.1.4 0 .6l-.4.6c.4.8 1 1.4 1.8 1.8l.6-.4c.2-.1.4-.1.6 0l1.2.7c.2.1.3.4.2.6-.3.9-1.3 1.4-2.2 1.1a6 6 0 0 1-3.9-3.9c-.3-.9.2-1.9 1.1-2.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.6 3h3.2l-7 8 8.2 10h-6.4l-5-6.2L8.6 21H5.4l7.5-8.6L5 3h6.6l4.5 5.9L17.6 3Zm-1.1 16h1.8L8.5 4.8H6.6L16.5 19Z" />
    </svg>
  )
}
