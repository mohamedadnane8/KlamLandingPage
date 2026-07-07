import type { Metadata } from 'next'
import { fraunces, inter } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klam — Practice speaking, calmly',
  description:
    'Klam is a public-speaking practice studio. Short daily reps, honest feedback, real progress.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
