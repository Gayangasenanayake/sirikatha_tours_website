'use client'

import { Mail, MessageCircle, MessageSquare } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const contactOptions = [
  { label: 'WhatsApp', detail: 'Quick answers from our local team', href: 'https://wa.me/94112345678', icon: MessageCircle, className: 'bg-[#25D366] text-white hover:bg-[#20bd5a]' },
  { label: 'Email us', detail: 'Share your travel ideas in detail', href: 'mailto:hello@sirikathatours.lk', icon: Mail, className: 'bg-[#173f3b] text-white hover:bg-[#0d302e]' },
  { label: 'WeChat', detail: 'Continue the conversation your way', href: '/plan-trip?contact=wechat', icon: MessageSquare, className: 'bg-[#e7a94b] text-[#173f3b] hover:bg-[#f3bf62]' },
]

export default function PlanTrip() {
  return (
    <PageFrame>
      <PageHero eyebrow="Let’s make a plan" title={<>Your Sri Lanka, <em>your way.</em></>} intro="Tell us what sounds good and our local travel designers will shape it into a thoughtful, practical journey." />
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-[#d8ddd4] bg-white shadow-xl shadow-[#173f3b]/10">
          <div className="border-b border-[#e6ebe4] bg-[#f5f7f1] px-7 py-8 text-center sm:px-10 sm:py-10">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-2 font-serif text-4xl text-[#173f3b]">Let&apos;s plan it together.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#668079]">Choose the way you&apos;d like to reach us. A real travel designer will help turn your ideas into an unforgettable Sri Lankan journey.</p>
          </div>
          <div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-10">
            {contactOptions.map(({ label, detail, href, icon: Icon, className }) => (
              <a key={label} href={href} target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={`group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg ${className}`}>
                <Icon size={28} strokeWidth={1.8} />
                <h3 className="mt-8 font-serif text-2xl">{label}</h3>
                <p className="mt-2 text-sm leading-6 opacity-80">{detail}</p>
                <span className="mt-7 inline-block text-xs font-bold uppercase tracking-[.16em] opacity-80 transition group-hover:opacity-100">Connect directly →</span>
              </a>
            ))}
          </div>
          <div className="border-t border-[#e6ebe4] px-7 py-6 text-center text-xs leading-5 text-[#668079] sm:px-10">
            Prefer a form? Email us at <a className="font-semibold text-[#173f3b] underline decoration-[#d38b30] underline-offset-4" href="mailto:hello@sirikathatours.lk">hello@sirikathatours.lk</a> and we&apos;ll reply personally, usually within one working day.
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
