import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Klam',
  description: 'How Klam collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-100 text-ink-800">
      {/* Nav */}
      <header className="border-b border-cream-200 px-6 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <Link href="/" className="font-fraunces text-xl font-semibold text-ink-800 hover:text-sage-500 transition-colors">
            Klam
          </Link>
          <span className="text-sm text-ink-500">Privacy Policy</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-fraunces text-4xl font-semibold text-ink-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-ink-500">
            <span className="font-medium">Effective date:</span> July 7, 2026 &nbsp;·&nbsp;
            <span className="font-medium">Last updated:</span> July 7, 2026
          </p>
        </div>

        {/* Operator note */}
        <div className="mb-12 rounded-lg border border-honey-500/30 bg-honey-500/5 px-5 py-4 text-sm text-ink-600">
          <p className="font-medium text-ink-700 mb-1">Operator note (fill in before publishing)</p>
          <p>
            Klam is currently operated by an individual developer based in Morocco; no company has been incorporated
            yet. Replace the bracketed placeholders below (<code className="text-ink-700">[Legal Name / Company Name]</code>,{' '}
            <code className="text-ink-700">[Contact Email]</code>, <code className="text-ink-700">[Governing Law]</code>) once
            you&apos;ve settled on a business structure. This document reflects what the backend actually does as of the date
            above — a licensed lawyer should still review it before publishing, particularly the international-transfer and
            children&apos;s-privacy sections.
          </p>
        </div>

        <div className="prose-klam space-y-10">

          {/* 1 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">1. Who We Are</h2>
            <p className="text-ink-700 leading-relaxed">
              Klam is operated by <strong>[Legal Name / Company Name]</strong>, based in Morocco. If you have questions
              about this policy or your data, contact us at{' '}
              <strong>[Contact Email — e.g. privacy@klam.app]</strong>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">2. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">2.1 Account information</h3>
                <p className="text-ink-700 leading-relaxed mb-3">
                  When you sign in with <strong>Google Sign-In</strong> or <strong>Sign in with Apple</strong>, we receive
                  and store:
                </p>
                <ul className="list-disc list-inside space-y-1 text-ink-700 text-sm">
                  <li>Your email address</li>
                  <li>
                    Your first and last name (Apple only shares your name the first time you sign in; if you decline to
                    share it, we won&apos;t have it)
                  </li>
                  <li>A profile picture URL (Google only — Apple does not provide one)</li>
                  <li>
                    A stable account identifier from Google and/or Apple, used to recognize your account on future
                    sign-ins
                  </li>
                  <li>
                    If you sign in with a second provider using the same email address as an existing account, we link
                    the two so you can use either to log in
                  </li>
                </ul>
                <p className="text-ink-700 leading-relaxed mt-3 text-sm">
                  We never receive or store your Google or Apple password. Klam has no password of its own —
                  authentication is handled entirely by Google and Apple.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">2.2 Device and session information</h3>
                <p className="text-ink-700 leading-relaxed text-sm">
                  Each time you sign in, we record the IP address and user-agent (device/browser type) associated with
                  that session, along with session timestamps, so we can detect suspicious activity and let you manage
                  your active sessions. Refresh tokens are stored in hashed form only — never in plain text.
                </p>
                <p className="text-ink-700 leading-relaxed text-sm mt-2">
                  We also store your device&apos;s time zone, which we use to calculate your daily practice streak and
                  calendar-day statistics — not for location tracking.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">
                  2.3 Voice recordings, transcripts, and AI feedback
                </h3>
                <p className="text-ink-700 leading-relaxed text-sm mb-3">
                  This is the core of what Klam does, so we&apos;re explicit about it:
                </p>
                <ul className="list-disc list-inside space-y-2 text-ink-700 text-sm">
                  <li>
                    <strong>Audio recordings</strong> you make during practice exercises are uploaded to our private
                    cloud storage. They are never publicly accessible — every playback or processing request uses a
                    short-lived, single-use signed link.
                  </li>
                  <li>
                    Your recording is sent to a <strong>speech-to-text provider</strong> (AssemblyAI or Deepgram) to
                    produce a <strong>text transcript</strong> of what you said.
                  </li>
                  <li>
                    That transcript — along with some automatically derived statistics (like filler-word counts) and a
                    short summary of patterns from your past sessions — is sent to an{' '}
                    <strong>AI feedback provider (DeepSeek)</strong> to generate scores, coaching feedback, example
                    rewrites, and practice suggestions. Your raw audio is not sent to the AI feedback provider — only
                    text.
                  </li>
                  <li>
                    We store the resulting transcript, AI-generated feedback/scores, and (if you choose to answer them)
                    your own self-assessment ratings and notes, all attached to that practice attempt.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">2.4 Progress and gamification data</h3>
                <p className="text-ink-700 leading-relaxed text-sm">
                  We store your practice history and in-app progress: XP earned, streaks, unlocked badges, how often
                  you use each exercise type, and a personal &quot;vocabulary&quot; list of words our AI flags as worth
                  improving. This data powers in-app features only — it is not shared with anyone outside Klam.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">2.5 Push notification token</h3>
                <p className="text-ink-700 leading-relaxed text-sm">
                  If you enable notifications, we store an Expo push token and your device platform (iOS/Android) so we
                  can notify you when your transcript or feedback is ready. We do not collect any other device identifier
                  (no advertising ID, no device model/OS fingerprinting).
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink-800 mb-2">2.6 What we do <em>not</em> collect</h3>
                <p className="text-ink-700 leading-relaxed text-sm">
                  Klam does not use any third-party analytics, advertising, or crash-reporting SDK. We don&apos;t track
                  you across other apps or websites, and we don&apos;t sell your data. Our own server logs are kept for
                  a short rolling period (about 7 days) for debugging and security purposes, and may incidentally
                  contain identifiers like your user ID from requests made during that window.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-ink-700 leading-relaxed text-sm mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 text-ink-700 text-sm">
              <li>Create and secure your account, and let you sign in via Google or Apple</li>
              <li>Record and play back your practice sessions</li>
              <li>Generate transcripts and AI-driven feedback on your speaking</li>
              <li>Track your progress, streaks, and achievements</li>
              <li>Send you notifications you&apos;ve opted into</li>
              <li>Investigate abuse, fraud, or security incidents</li>
              <li>Improve the App&apos;s exercises and AI feedback quality</li>
            </ul>
            <p className="text-ink-700 leading-relaxed text-sm mt-3">
              We do not use your recordings, transcripts, or feedback for advertising, and we do not sell personal
              information to third parties.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">4. Who We Share Information With</h2>
            <p className="text-ink-700 leading-relaxed text-sm mb-4">
              We share information with the following service providers, solely to operate the App on our behalf. They
              are not permitted to use your data for their own purposes.
            </p>

            <div className="overflow-x-auto rounded-lg border border-cream-200">
              <table className="w-full text-sm">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">Provider</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">What they receive</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink-700">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200 text-ink-600">
                  {[
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
                      provider: 'Amazon Web Services (AWS S3)',
                      receives: 'Your audio recordings',
                      purpose: 'Private cloud storage, hosted in the EU (Stockholm, Sweden)',
                    },
                    {
                      provider: 'DigitalOcean',
                      receives: 'Your account and practice data (database)',
                      purpose: 'Database hosting',
                    },
                    {
                      provider: 'AssemblyAI or Deepgram',
                      receives: 'A short-lived link to your audio recording',
                      purpose: 'Speech-to-text transcription',
                    },
                    {
                      provider: 'DeepSeek',
                      receives: 'Your transcript text and derived statistics (no audio, no name/email)',
                      purpose: 'AI-generated speaking feedback and coaching',
                    },
                    {
                      provider: 'Expo',
                      receives: 'Your push notification token',
                      purpose: 'Delivering push notifications',
                    },
                  ].map((row) => (
                    <tr key={row.provider} className="bg-cream-100 odd:bg-cream-50">
                      <td className="px-4 py-3 font-medium text-ink-700 whitespace-nowrap">{row.provider}</td>
                      <td className="px-4 py-3">{row.receives}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-ink-700 leading-relaxed text-sm mt-4">
              <strong>International transfers.</strong> Some of these providers process data outside your home country,
              including in the United States and, in the case of DeepSeek (our AI feedback provider), a company
              operating under Chinese jurisdiction. Where we transfer personal data internationally, we rely on the
              relevant provider&apos;s own safeguards and contractual commitments. If you have concerns about a specific
              provider&apos;s data handling, contact us at the address above.
            </p>
            <p className="text-ink-700 leading-relaxed text-sm mt-2">
              We may also disclose information if required by law, to protect the rights and safety of Klam or our
              users, or in connection with a merger, acquisition, or sale of assets (in which case we&apos;ll notify
              you).
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">5. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 text-ink-700 text-sm">
              <li>
                Your account data, recordings, transcripts, and feedback are retained for as long as your account is
                active.
              </li>
              <li>
                When you delete your account (see Section 7), we delete your audio recordings from storage and
                permanently delete your account record, sessions, practice history, gamification data, and vocabulary
                list. This happens immediately on request; in rare cases some cached data (see below) may persist
                briefly afterward.
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

          {/* 6 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">6. Data Security</h2>
            <p className="text-ink-700 leading-relaxed text-sm">
              We use OAuth-only authentication (no Klam password to be stolen or leaked), store refresh tokens in
              hashed form, and keep your audio recordings in a private storage bucket that is never publicly readable —
              access is only granted through short-lived signed links generated on demand. No method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">7. Your Choices and Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-ink-700 text-sm">
              <li>
                <strong>Access &amp; correction:</strong> You can view your profile information in the App. To request a
                copy of your data or a correction, contact us.
              </li>
              <li>
                <strong>Deletion:</strong> You can permanently delete your account and associated data at any time from
                within the App (Settings → Delete Account), or by contacting us.
              </li>
              <li>
                <strong>Notifications:</strong> You can disable push notifications at any time in your device settings
                or in-app.
              </li>
              <li>
                <strong>EU/UK/other residents:</strong> Depending on where you live, you may have additional rights over
                your personal data (such as rights to access, rectify, erase, restrict, or object to processing, and to
                lodge a complaint with a data protection authority). Contact us to exercise these rights.
              </li>
              <li>
                <strong>California residents:</strong> You may have rights under California law to know what personal
                information we collect and to request its deletion. We do not sell personal information.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-ink-700 leading-relaxed text-sm">
              Klam is not directed at, and is not intended for use by, anyone under the age of 18. We do not knowingly
              collect personal information from children. If you believe a child has provided us with personal
              information, contact us and we will delete it.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-ink-700 leading-relaxed text-sm">
              We may update this Privacy Policy from time to time. If we make material changes, we&apos;ll notify you
              through the App or by other reasonable means before the change takes effect. The &quot;Last updated&quot;
              date at the top reflects the most recent revision.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-fraunces text-2xl font-semibold text-ink-900 mb-4">10. Contact Us</h2>
            <p className="text-ink-700 leading-relaxed text-sm">
              If you have questions about this Privacy Policy or how we handle your data, contact us at{' '}
              <strong>[Contact Email]</strong>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-ink-400">
          <p>© 2026 Klam. All rights reserved.</p>
          <Link href="/" className="text-ink-500 hover:text-sage-500 transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
