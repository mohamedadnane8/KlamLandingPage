import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  /** Small tracked, uppercase label above the title. */
  eyebrow: string
  title: ReactNode
  /** Optional supporting paragraph under the title. */
  children?: ReactNode
  className?: string
}

/**
 * Consistent section intro: eyebrow → Fraunces headline → supporting copy.
 * Mirrors the tone set by the Hero (calm, low-contrast, generous spacing).
 */
export function SectionHeading({ eyebrow, title, children, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-xl', className)}>
      <p className="text-caption font-semibold uppercase tracking-[0.22em] text-ink-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-headline text-ink-900">{title}</h2>
      {children ? <p className="mt-4 text-body text-ink-600">{children}</p> : null}
    </div>
  )
}
