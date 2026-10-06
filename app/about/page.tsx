import { ArrowRight, Compass, Heart, ShieldCheck, Users } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const values = [
  { icon: Compass, title: 'Local, always', text: 'We know the roads, the quiet beaches, the family kitchens and the people who make Sri Lanka memorable.' },
  { icon: Heart, title: 'Thoughtfully paced', text: 'Every itinerary leaves room for the unexpected moments that turn a holiday into a story.' },
  { icon: ShieldCheck, title: 'Travel with care', text: 'From trusted drivers to considered stays, we look after the details from arrival to departure.' },
  { icon: Users, title: 'Made for you', text: 'Couples, families, friends and groups get a journey shaped around their own rhythm.' },
]

export default function About() {
  return (
    <PageFrame>
      <PageHero eyebrow="About Sirikatha Tours" title={<>Travel with <em>meaning.</em></>} intro="We create personal Sri Lankan journeys for curious travellers who want to go beyond the guidebook." />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><p className="eyebrow">Our point of view</p><h2 className="section-title mt-4">A little island. <em>A whole world.</em></h2></div>
          <div><p className="text-lg leading-8 text-[#55736d]">Sirikatha Tours began with a simple belief: the best way to experience Sri Lanka is to travel with people who know and love it. We pair local knowledge with thoughtful planning, so every route feels effortless, authentic and entirely yours.</p><p className="mt-6 text-lg leading-8 text-[#55736d]">From the first airport welcome to the final coastal sunset, our team is here to make the island feel less like a destination and more like a place you belong.</p></div>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-[#d8ddd4] bg-white p-6"><Icon className="text-[#d38b30]" size={25} strokeWidth={1.5} /><h3 className="mt-6 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#668079]">{text}</p></article>)}</div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#173f3b] p-8 text-white sm:p-12 md:flex-row md:items-center"><div><p className="eyebrow text-[#f3bf62]">Start with a conversation</p><h2 className="mt-3 font-serif text-4xl">Your island story starts here.</h2></div><a href="/plan-trip" className="inline-flex items-center gap-2 rounded-full bg-[#e7a94b] px-6 py-3.5 text-sm font-semibold text-[#173f3b] transition hover:bg-[#f3bf62]">Plan your trip <ArrowRight size={16} /></a></div>
      </section>
    </PageFrame>
  )
}
