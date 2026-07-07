import { Fraunces, Inter } from 'next/font/google'

// Fraunces — headlines / display. The app uses the 500 weight only.
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal'],
  variable: '--font-fraunces',
  display: 'swap',
})

// Inter — body + UI. 400 (body), 500 (emphasis/labels), 600 (buttons/headings).
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})
