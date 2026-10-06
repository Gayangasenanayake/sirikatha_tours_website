'use client'

import { ArrowRight, BedDouble, Building2, House, Star } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const stays = [
  { category: 'Any star category', title: 'Find your right kind of stay', copy: 'From thoughtful 3-star hideaways to polished 5-star resorts, we match the room, location and atmosphere to your route.', image: '/images/accommodation-boutique-hotel.png', icon: Building2 },
  { category: 'Private villas', title: 'Space to settle into', copy: 'Choose a private villa for quiet mornings, generous living spaces and a more personal way to experience the island.', image: '/images/accommodation-villa.png', icon: House },
  { category: 'Luxury stays', title: 'The beautiful extra mile', copy: 'For special occasions or simply because, we can arrange Sri Lanka’s most memorable luxury resorts and retreats.', image: '/images/accommodation-luxury-resort.png', icon: Star },
  { category: 'Hill country retreats', title: 'Wake up somewhere rare', copy: 'Tea estates, misty mountain views and intimate lodges make the highlands a stay in their own right.', image: '/images/accommodation-hill-retreat.png', icon: BedDouble },
]

export default function AccommodationPage() {
  return (
    <PageFrame>
      <PageHero eyebrow="Stay your way" title={<>A room with<br /><em className="text-[#f3bf62]">a view.</em></>} intro="Tell us how you like to travel and we’ll find the stay to match — from well-loved local hotels to private villas and extraordinary luxury retreats." image={{ src: '/images/accommodation-luxury-resort.png', alt: 'Luxury Sri Lankan resort overlooking the ocean' }} />
      <section className="bg-[#f7f5ef] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="eyebrow">Accommodation, arranged around you</p><h2 className="section-title mt-4">Sleep well.<br /><em>Wake somewhere wonderful.</em></h2><p className="mt-6 text-lg leading-8 text-[#55736d]">Every stay is part of the journey. Share your preferences, budget and route with our team, and we’ll curate options that feel right for the way you want to see Sri Lanka.</p></div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">{stays.map((stay) => { const Icon = stay.icon; return <article key={stay.title} className="group overflow-hidden rounded-2xl border border-[#d8ddd4] bg-white transition hover:-translate-y-1 hover:border-[#d38b30]/50 hover:shadow-xl"><div className="h-64 overflow-hidden"><img src={stay.image} alt={stay.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-7"><div className="flex items-center gap-3 text-[#d38b30]"><Icon size={18} /><p className="eyebrow text-[#d38b30]">{stay.category}</p></div><h3 className="mt-4 font-serif text-3xl text-[#173f3b]">{stay.title}</h3><p className="mt-4 leading-7 text-[#668079]">{stay.copy}</p><a href="/plan-trip?interest=accommodation" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#173f3b] transition group-hover:text-[#d38b30]">Ask us for options <ArrowRight size={15} /></a></div></article> })}</div>
        </div>
      </section>
      <section className="bg-[#173f3b] px-6 py-20 text-white lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow text-[#f3bf62]">Let’s find your place</p><h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Your room is the first chapter of the story.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Send us your dates, preferred star category or villa style, and the parts of Sri Lanka you’d like to explore. We’ll come back with a considered shortlist.</p></div><a href="/plan-trip?interest=accommodation" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e7a94b] px-6 py-3.5 text-sm font-semibold text-[#173f3b] transition hover:bg-[#f3bf62]">Plan your stay <ArrowRight size={16} /></a></div></section>
    </PageFrame>
  )
}
