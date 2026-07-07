'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Returns an easing function for the given cubic-bezier control points
 * (p0 = 0,0 and p3 = 1,1 are implied). Newton–Raphson to invert x(t), then
 * evaluate y(t) — the same math the CSS engine uses, so the count-up decelerates
 * on exactly the app's signature curve, cubic-bezier(0.22, 1, 0.36, 1).
 */
function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  const cx = 3 * p1x
  const bx = 3 * (p2x - p1x) - cx
  const ax = 1 - cx - bx
  const cy = 3 * p1y
  const by = 3 * (p2y - p1y) - cy
  const ay = 1 - cy - by

  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t

  const solveX = (x: number) => {
    let t = x
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x
      const d = (3 * ax * t + 2 * bx) * t + cx
      if (Math.abs(d) < 1e-6) break
      t -= dx / d
    }
    return t
  }

  return (x: number) => sampleY(solveX(Math.min(1, Math.max(0, x))))
}

const easeKlam = cubicBezier(0.22, 1, 0.36, 1)

type CountUpProps = {
  /** Target value the numeral counts up to. */
  to: number
  /** Duration in ms. Defaults to the 1200ms score-reveal timing. */
  duration?: number
  className?: string
}

/**
 * Animated numeral for the score reveal — the one place we reach past the 300ms
 * default and let a number climb over ~1200ms. Fires once, when it scrolls into
 * view; honours prefers-reduced-motion by snapping straight to the value.
 */
export function CountUp({ to, duration = 1200, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }

    let raf = 0
    let start: number | null = null

    const tick = (now: number) => {
      if (start === null) start = now
      const progress = Math.min(1, (now - start) / duration)
      setValue(Math.round(to * easeKlam(progress)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          raf = requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
