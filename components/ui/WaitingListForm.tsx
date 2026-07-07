'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitingListForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('https://api.klam.app/api/waiting-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('rounded-md bg-sage-50 px-6 py-4', className)}>
        <p className="text-body font-medium text-ink-800">You're on the list.</p>
        <p className="mt-1 text-small text-ink-500">
          We'll reach out when Klam is ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('w-full', className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor="wl-email" className="sr-only">
            Email address
          </label>
          <input
            id="wl-email"
            type="email"
            required
            maxLength={256}
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="w-full rounded-md border border-cream-200 bg-cream-50 px-5 py-3 text-body text-ink-800 placeholder:text-ink-400 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/30 disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-[44px] rounded-full bg-sage-500 px-7 py-3 text-body font-semibold text-cream-50 shadow-sm transition-all duration-300 ease-klam hover:-translate-y-0.5 hover:bg-sage-600 hover:shadow-md disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-small text-error" role="alert">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  )
}
