import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Spacing = 'default' | 'compact'

// Vertical rhythm sits at the generous top of the 8-pt grid so sections breathe
// (principle #1 "calm", #4 "warm, not clinical"). `compact` steps down one notch.
const spacingClasses: Record<Spacing, string> = {
  default: 'py-16 md:py-24', // 64px mobile → 96px desktop
  compact: 'py-12 md:py-16', // 48px mobile → 64px desktop
}

type SectionProps = {
  as?: ElementType
  id?: string
  spacing?: Spacing
  /** Classes for the outer full-bleed band (e.g. a background color). */
  className?: string
  /** Classes for the centered, max-width content container. */
  containerClassName?: string
  children: ReactNode
}

/**
 * Full-bleed band with a centered ~1200px content column and consistent
 * horizontal + vertical padding. Use for every top-level section on the page.
 */
export function Section({
  as: Tag = 'section',
  id,
  spacing = 'default',
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn('w-full', className)}>
      <div
        className={cn(
          'mx-auto w-full max-w-[1200px] px-6 md:px-8',
          spacingClasses[spacing],
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  )
}
