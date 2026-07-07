import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-colors duration-150 select-none ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-500 ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  // Quiet, confident primary. Pill, sage, cream text. No gradient; shadow-sm only.
  primary: 'bg-sage-500 text-cream-50 shadow-sm hover:bg-sage-600 active:bg-sage-600',
  // Transparent with a 1.5px ink hairline. Reads as the calmer, secondary path.
  secondary:
    'bg-transparent border-[1.5px] border-ink-800 text-ink-800 hover:bg-ink-800/5 active:bg-ink-800/10',
}

const sizes: Record<Size, string> = {
  md: 'px-8 py-3.5 text-body',
  lg: 'px-10 py-4 text-subtitle',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/**
 * Primary / secondary action button. Renders an <a> when `href` is provided,
 * otherwise a <button>. One primary per section — keep secondary quiet.
 */
export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
