import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Klam',
  description: 'How Klam collects, uses, and protects your personal information.',
}

const providers = [
  {
    provider: 'Google',
    receives: 'Sign-in credentials exchange (email, name, profile picture, Google account ID)',
    purpose: 'Authentication',
  },
  {
    provider: 'Apple',
    receives: 'Sign-in credentials exchange (email, name if first sign-in, Apple account ID)',
    purpose: 'Authentication',
  },
  {
    provider: 'AWS S3',
    receives: 'Your audio recordings',
    purpose: 'Private cloud storage, EU (Stockholm)',
  },
  {
    provider: 'DigitalOcean',
    receives: 'Your account and practice data (database)',
    purpose: 'Database hosting',
  },
  {
    provider: 'AssemblyAI / Deepgram',
    receives: 'A short-lived link to your audio recording',
    purpose: 'Speech-to-text transcription',
  },
  {
    provider: 'DeepSeek',
    receives: 'Your transcript text and derived statistics (no audio, no name/email)',
    purpose: 'AI-generated speaking feedback',
  },
  {
    provider: 'Expo',
    receives: 'Your push notification token',
    purpose: 'Delivering push notifications',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-800">
      <header className="border-b border-cream-200 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/" className="font-display text-lg font-semibold text-ink-900 hover:opacity-80 transition-opacity">
            Klam
          </Link>
          <span className="text-small text-ink-500">Privacy Policy</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900 mb-3">Privacy Policy</h1>
          <p className="text-small text-ink-500">
            <span className="font-medium">Effective date:</span> July 7, 2026 &nbsp;·&nbsp;
            <span className="font-medium">Last updated:</span> July 7, 2026
          </p>
        </div>

        <div className="space-y-10 text-body text-ink-700 leading-relaxed">

          <section>
            <H2>1. Who We Are</H2>
            <p>
              Klam is operated by <strong className="text-ink-900">Mohamed Adnane Al Khiati</strong>, based in Morocco.{' '}
              <strong className="text-ink-900">Mohamed Adnane Al Khiati is the data controller</strong> responsible for
              processing the personal information described in this policy. If you have questions about this policy or
              your data, contact us at{' '}
              <a href="mailto:adnanealk@gmail.com" className="text-ink-900 underline underline-offset-2 hover:opacity-70 transition-opacity">
                adnanealk@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <H2>2. Information We Collect</H2>

            <div className="space-y-6">
              <div>
                <H3>2.1 Account information</H3>
                <p className="mb-3">
                  When you sign in with <strong className="text-ink-900">Google Sign-In</strong> or{' '}
                  <strong className="text-ink-900">Sign in with Apple</strong>, we receive and store:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-small">
                  <li>Your email address</li>
                  <li>Your first and last name (Apple only shares your name the first time you sign in; if you decline to share it, we won&apos;t have it)</li>
                  <li>A profile picture URL (Google only — Apple does not provide one)</li>
                  <li>A stable account identifier from Google and/or Apple, used to recognise your account on future sign-ins</li>
                  <li>If you sign in with a second provider using the same email as an existing account, we link the two so you can use either to log in</li>
                </ul>
                <p className="mt-3 text-small">
                  We never receive or store your Google or Apple password. Klam has no password of its own — authentication is handled entirely by Google and Apple.
                </p>
              </div>

              <div>
                <H3>2.2 Device and session information</H3>
                <p className="text-small">
                  Each time you sign in, we record the IP address and user-agent (device/browser type) associated with
                  that session, along with session timestamps, so we can detect suspicious activity and let you manage
                  your active sessions. Refresh tokens are stored in hashed form only — never in plain text.
                </p>
                <p className="mt-2 text-small">
                  We also store your device&apos;s time zone, which we use to calculate your daily practice streak and
                  calendar-day statistics — not for location tracking.
                </p>
              </div>

              <div>
                <H3>2.3 Voice recordings, transcripts, and AI feedback</H3>
                <p className="mb-3 text-small">This is the core of what Klam does, so we&apos;re explicit about it:</p>
                <ul className="list-disc pl-5 space-y-2 text-small">
                  <li>
                    <strong className="text-ink-900">Audio recordings</strong> you make during practice exercises are uploaded to our private cloud storage. They are never publicly accessible — every playback or processing request uses a short-lived, single-use signed link.
                  </li>
                  <li>
                    Your recording is sent to a <strong className="text-ink-900">speech-to-text provider</strong> (AssemblyAI or Deepgram) to produce a <strong className="text-ink-900">text transcript</strong> of what you said.
                  </li>
                  <li>
                    That transcript — along with some automatically derived statistics (like filler-word counts) and a short summary of patterns from your past sessions — is sent to an{' '}
                    <strong className="text-ink-900">AI feedback provider (DeepSeek)</strong> to generate scores, coaching feedback, example rewrites, and practice suggestions. Your raw audio is not sent to the AI feedback provider — only text.
                  </li>
                  <li>
                    We store the resulting transcript, AI-generated feedback/scores, and (if you choose to answer them) your own self-assessment ratings and notes, all attached to that practice attempt.
                  </li>
                </ul>
                <p className="mt-3 text-small">
                  <strong className="text-ink-900">We do not use your recordings or transcripts to train our own AI models.</strong>
                </p>
              </div>

              <div>
                <H3>2.4 Progress and gamification data</H3>
                <p className="text-small">
                  We store your practice history and in-app progress: XP earned, streaks, unlocked badges, how often
                  you use each exercise type, and a personal &quot;vocabulary&quot; list of words our AI flags as worth
                  improving. This data powers in-app features only — it is not shared with anyone outside Klam.
                </p>
              </div>

              <div>
                <H3>2.5 Push notification token</H3>
                <p className="text-small">
                  If you enable notifications, we store an Expo push token and your device platform (iOS/Android) so we
                  can notify you when your transcript or feedback is ready. We do not collect any other device identifier
                  (no advertising ID, no device model/OS fingerprinting).
                </p>
              </div>

              <div>
                <H3>2.6 What we do <em>not</em> collect</H3>
                <p className="text-small">
                  Klam does not use any third-party analytics, advertising, or crash-reporting SDK. We don&apos;t track
                  you across other apps or websites, and we don&apos;t sell your data. Our own server logs are kept for
                  a short rolling period (about 7 days) for debugging and security purposes, and may incidentally
                  contain identifiers like your user ID from requests made during that window.
                </p>
              </div>
            </div>
          </section>

          <section>
            <H2>3. How We Use Your Information</H2>
            <p className="mb-3 text-small">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 text-small">
              <li>Create and secure your account, and let you sign in via Google or Apple</li>
              <li>Record and play back your practice sessions</li>
              <li>Generate transcripts and AI-driven feedback on your speaking</li>
              <li>Track your progress, streaks, and achievements</li>
              <li>Send you notifications you&apos;ve opted into</li>
              <li>Investigate abuse, fraud, or security incidents</li>
              <li>Improve the App&apos;s exercises and AI feedback quality</li>
            </ul>
            <p className="mt-3 text-small">
              We do not use your recordings, transcripts, or feedback for advertising, and we do not sell personal
              information to third parties.
            </p>

            <div className="mt-6 rounded-lg border border-cream-200 bg-cream-100 px-4 py-4">
              <H3>Legal basis for processing (GDPR)</H3>
              <p className="text-small mb-2">We process your information because:</p>
              <ul className="list-disc pl-5 space-y-1 text-small">
                <li><strong className="text-ink-900">Contract performance</strong> — processing is necessary to provide the service you have requested (creating your account, generating feedback, tracking progress);</li>
                <li><strong className="text-ink-900">Consent</strong> — for certain processing you opt into, such as push notifications;</li>
                <li><strong className="text-ink-900">Legitimate interests</strong> — securing the service, detecting abuse, and improving the App&apos;s exercises and feedback quality, in ways that do not override your rights;</li>
                <li><strong className="text-ink-900">Legal obligation</strong> — where we are required to retain or disclose data by applicable law.</li>
              </ul>
            </div>
          </section>

          <section>
            <H2>4. Who We Share Information With</H2>
            <p className="mb-4 text-small">
              We share information with the following service providers, solely to operate the App on our behalf. They
              are not permitted to use your data for their own purposes.
            </p>

            {/* Mobile: card list */}
            <div className="md:hidden space-y-3">
              {providers.map((row) => (
                <div key={row.provider} className="rounded-lg border border-cream-200 bg-cream-100 p-4">
                  <p className="font-semibold text-ink-900 mb-2">{row.provider}</p>
                  <p className="text-small text-ink-600 mb-1">
                    <span className="font-medium text-ink-700">Receives: </span>{row.receives}
                  </p>
                  <p className="text-small text-ink-600">
                    <span className="font-medium text-ink-700">Purpose: </span>{row.purpose}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden md:block overflow-x-auto rounded-lg border border-cream-200">
              <table className="w-full text-small">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">Provider</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">What they receive</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200 text-ink-600">
                  {providers.map((row) => (
                    <tr key={row.provider} className="odd:bg-cream-50 even:bg-cream-100">
                      <td className="px-4 py-3 font-medium text-ink-700 whitespace-nowrap">{row.provider}</td>
                      <td className="px-4 py-3">{row.receives}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-small">
              <strong className="text-ink-900">AI providers and advertising.</strong> The speech-to-text providers
              (AssemblyAI, Deepgram) and AI feedback provider (DeepSeek) process your data solely to generate the
              transcript and feedback you see in the App. They are not authorized to use your recordings, transcripts,
              or any derived data to advertise to you or for their own commercial purposes beyond delivering the service
              to us.
            </p>
            <p className="mt-4 text-small">
              <strong className="text-ink-900">International transfers.</strong> Some of these providers process data
              outside your home country, including in the United States and, in the case of DeepSeek (our AI feedback
              provider), a company operating under Chinese jurisdiction. Where we transfer personal data
              internationally, we rely on the relevant provider&apos;s own safeguards and contractual commitments. If
              you have concerns about a specific provider&apos;s data handling, contact us at the address above.
            </p>
            <p className="mt-2 text-small">
              We may also disclose information if required by law, to protect the rights and safety of Klam or our
              users, or in connection with a merger, acquisition, or sale of assets (in which case we&apos;ll notify
              you).
            </p>
          </section>

          <section>
            <H2>5. Data Retention</H2>
            <ul className="list-disc pl-5 space-y-2 text-small">
              <li>Your account data, recordings, transcripts, and feedback are retained for as long as your account is active.</li>
              <li>
                When you delete your account (see Section 7), we delete your audio recordings from storage and
                permanently delete your account record, sessions, practice history, gamification data, and vocabulary
                list. We begin deletion immediately on request and complete it as soon as reasonably practicable, except
                where temporary backups or logs must be retained for security or legal reasons (see below).
              </li>
              <li>
                A small amount of temporary technical data may outlive account deletion by a short window: cached API
                responses used to prevent duplicate requests (kept up to 24 hours) and rolling server logs (kept up to
                about 7 days).
              </li>
              <li>
                If you joined a pre-launch waiting list with your email before creating an account, that entry is stored
                separately and is not automatically deleted when you delete your app account — contact us if you&apos;d
                like it removed too.
              </li>
            </ul>
          </section>

          <section>
            <H2>6. Data Security</H2>
            <p className="text-small">
              We use OAuth-only authentication (no Klam password to be stolen or leaked), store refresh tokens in
              hashed form, and keep your audio recordings in a private storage bucket that is never publicly readable —
              access is only granted through short-lived signed links generated on demand. No method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <H2>7. Your Choices and Rights</H2>
            <ul className="list-disc pl-5 space-y-2 text-small">
              <li>
                <strong className="text-ink-900">Access &amp; correction:</strong> You can view your profile information in the App. To request a copy of your data or a correction, contact us.
              </li>
              <li>
                <strong className="text-ink-900">Deletion:</strong> You can permanently delete your account and associated data at any time from within the App (Settings → Delete Account), or by contacting us.
              </li>
              <li>
                <strong className="text-ink-900">Notifications:</strong> You can disable push notifications at any time in your device settings or in-app.
              </li>
              <li>
                <strong className="text-ink-900">EU/UK/other residents:</strong> Depending on where you live, you may have additional rights over your personal data (such as rights to access, rectify, erase, restrict, or object to processing, and to lodge a complaint with a data protection authority). Contact us to exercise these rights.
              </li>
              <li>
                <strong className="text-ink-900">California residents:</strong> You may have rights under California law to know what personal information we collect and to request its deletion. We do not sell personal information.
              </li>
            </ul>
          </section>

          <section>
            <H2>8. Children&apos;s Privacy</H2>
            <p className="text-small">
              Klam is not directed at, and is not intended for use by, anyone under the age of 18. We do not knowingly
              collect personal information from children. If you believe a child has provided us with personal
              information, contact us and we will delete it.
            </p>
          </section>

          <section>
            <H2>9. Changes to This Policy</H2>
            <p className="text-small">
              We may update this Privacy Policy from time to time. If we make material changes, we&apos;ll notify you
              through the App or by other reasonable means before the change takes effect. The &quot;Last updated&quot;
              date at the top reflects the most recent revision.
            </p>
          </section>

          <section>
            <H2>Governing Law</H2>
            <p className="text-small">
              This Privacy Policy is governed by the laws applicable in Morocco, except where mandatory consumer or data
              protection laws in your jurisdiction provide otherwise.
            </p>
          </section>

          <section>
            <H2>10. Contact Us</H2>
            <p className="text-small">
              If you have questions about this Privacy Policy or how we handle your data, contact us at{' '}
              <a href="mailto:adnanealk@gmail.com" className="text-ink-900 underline underline-offset-2 hover:opacity-70 transition-colors">
                adnanealk@gmail.com
              </a>.
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-ink-800 mb-2">{children}</h3>
  )
}
