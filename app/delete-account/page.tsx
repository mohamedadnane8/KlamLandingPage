import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delete Your Account — Klam',
  description: 'How to permanently delete your Klam account and data, from the app or by email.',
}

const steps = [
  {
    title: 'Open the Klam app and sign in',
    detail: 'You’ll need to be signed in to your account to delete it from the app.',
  },
  {
    title: 'Go to the Profile tab',
    detail: 'Tap the Profile icon in the bottom navigation bar.',
  },
  {
    title: 'Tap the Settings icon',
    detail: 'It’s the gear icon in the top-right corner of your Profile screen.',
  },
  {
    title: 'Scroll down to "Delete account"',
    detail: 'It’s near the bottom of the Settings screen, shown in red with a trash icon.',
  },
  {
    title: 'Type DELETE to confirm',
    detail: 'A confirmation window explains what will be removed. Type DELETE in the text field to enable the confirm button.',
  },
  {
    title: 'Tap "Delete account"',
    detail: 'Your account is deleted immediately. This cannot be undone.',
  },
]

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-800">
      <header className="border-b border-cream-200 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/" className="font-display text-lg font-semibold text-ink-900 hover:opacity-80 transition-opacity">
            Klam
          </Link>
          <span className="text-small text-ink-500">Delete Account</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mb-3">
            Delete Your Account
          </h1>
          <p className="text-body text-ink-600 leading-relaxed">
            You can permanently delete your Klam account and all associated data at any time,
            either from within the app or by contacting us directly.
          </p>
        </div>

        <div className="space-y-10 text-body text-ink-700 leading-relaxed">
          <section>
            <H2>Delete from the app</H2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-sage-100 text-sage-700 font-display text-small font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900">{step.title}</p>
                    <p className="text-small text-ink-600 mt-0.5">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-lg border border-error/30 bg-error/5 px-4 py-4">
              <p className="text-small text-ink-700">
                <strong className="text-ink-900">This is permanent.</strong> Deleting your account
                immediately and irreversibly removes your practice sessions, recordings, transcripts
                and AI feedback, vocabulary list, badges, streak, and XP/level progress. There is no
                way to recover this data afterward.
              </p>
            </div>
          </section>

          <section>
            <H2>Can&apos;t access the app?</H2>
            <p className="text-small mb-3">
              If you&apos;ve uninstalled Klam, lost access to your account, or would rather not use
              the app, you can request deletion by emailing us directly. Send your request from the
              email address associated with your account (or otherwise tell us how to identify it) to:
            </p>
            <p className="mb-3">
              <a
                href="mailto:adnanealk@gmail.com?subject=Delete%20my%20Klam%20account"
                className="text-ink-900 underline underline-offset-2 hover:opacity-70 transition-opacity font-medium"
              >
                adnanealk@gmail.com
              </a>
            </p>
            <p className="text-small">
              We&apos;ll verify the request and delete your account and associated data, generally
              within a few business days.
            </p>
          </section>

          <section>
            <H2>What happens to your data</H2>
            <ul className="list-disc pl-5 space-y-2 text-small">
              <li>
                Your account record, practice sessions, audio recordings, transcripts, AI feedback,
                vocabulary list, badges, streak, and XP/level data are permanently deleted.
              </li>
              <li>
                Deletion begins immediately and is completed as soon as reasonably practicable.
              </li>
              <li>
                A small amount of temporary technical data may briefly outlive account deletion:
                cached API responses (kept up to 24 hours) and rolling server logs (kept up to about
                7 days), used only for abuse prevention and debugging.
              </li>
            </ul>
            <p className="mt-4 text-small">
              For the full details on what we collect and how it&apos;s handled, see our{' '}
              <Link href="/privacy" className="text-ink-900 underline underline-offset-2 hover:opacity-70 transition-opacity">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-small text-ink-400">
          <p>© 2026 Klam. All rights reserved.</p>
          <Link href="/" className="text-ink-500 hover:text-ink-900 transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink-900 mb-4">{children}</h2>
  )
}
