'use client'

import { ArrowRight, Utensils } from 'lucide-react'
import { PageHero, PageFrame, SiteHeader } from '@/components/site-shell'

const regions = [
  {
    name: 'South Coast',
    description: 'Seafood, sunset tables and relaxed island cooking from Galle to Mirissa.',
    restaurants: [
      { name: 'The Tuna & The Crab', place: 'Galle Fort', detail: 'Fresh-catch seafood in the heart of the fort.', image: '/images/restaurant-seafood-galle.png', menu: 'https://www.thefortprinters.com/dining/' },
      { name: 'Dewmini Roti Shop', place: 'Mirissa', detail: 'A beloved local stop for hoppers, roti and curry.', image: '/images/restaurant-seafood-galle.png', menu: 'https://www.google.com/maps/search/Dewmini+Roti+Shop+Mirissa' },
      { name: 'A Minute by Tuk Tuk', place: 'Galle Fort', detail: 'Casual Sri Lankan plates with a harbour view.', image: '/images/restaurant-seafood-galle.png', menu: 'https://www.google.com/maps/search/A+Minute+by+Tuk+Tuk+Galle' },
    ],
  },
  {
    name: 'Hill Country',
    description: 'Cool-climate cafés, tea-country kitchens and beautiful views around Ella and Kandy.',
    restaurants: [
      { name: 'Matey Hut', place: 'Ella', detail: 'Homestyle Sri Lankan food, made with care.', image: '/images/restaurant-hill-country.png', menu: 'https://www.google.com/maps/search/Matey+Hut+Ella' },
      { name: 'Cafe Chill', place: 'Ella', detail: 'An easygoing perch for slow lunches and mountain air.', image: '/images/restaurant-hill-country.png', menu: 'https://www.google.com/maps/search/Cafe+Chill+Ella' },
      { name: 'The Empire Café', place: 'Kandy', detail: 'Heritage dining beside the Temple of the Tooth.', image: '/images/restaurant-hill-country.png', menu: 'https://www.google.com/maps/search/The+Empire+Cafe+Kandy' },
    ],
  },
  {
    name: 'Cultural Triangle',
    description: 'Regional recipes, garden dining and memorable meals near Sigiriya and Dambulla.',
    restaurants: [
      { name: 'Nirwana Restaurant', place: 'Sigiriya', detail: 'A welcoming place for classic island flavours.', image: '/images/restaurant-village-feast.png', menu: 'https://www.google.com/maps/search/Nirwana+Restaurant+Sigiriya' },
      { name: 'Gamagedara Village Food', place: 'Sigiriya', detail: 'A village-style meal surrounded by greenery.', image: '/images/restaurant-village-feast.png', menu: 'https://www.google.com/maps/search/Gamagedara+Village+Food+Sigiriya' },
      { name: 'Dewata Villas', place: 'Dambulla', detail: 'Local cooking and a calm garden setting.', image: '/images/restaurant-village-feast.png', menu: 'https://www.google.com/maps/search/Dewata+Villas+Dambulla' },
    ],
  },
]

export default function RestaurantsPage() {
  return (
    <PageFrame>
      <PageHero eyebrow="Taste the island" title={<>Good food.<br /><em className="text-[#f3bf62]">Good stories.</em></>} intro="Our team knows where to pause for the perfect curry, the freshest catch and the kind of meal you talk about long after the journey ends." image={{ src: '/images/sri-lanka-food.png', alt: 'Colourful Sri Lankan rice and curry feast' }} />
      <section className="bg-[#f7f5ef] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="eyebrow">Handpicked by our local team</p><h2 className="section-title mt-4">A table worth <em>travelling for.</em></h2><p className="mt-6 text-lg leading-8 text-[#55736d]">These are a few of our favourite places to eat across Sri Lanka. Open a restaurant link to see its current menu or map listing, then ask us to build it into your route.</p></div>
          <div className="mt-16 flex flex-col gap-20">{regions.map((region) => <section key={region.name} aria-labelledby={region.name.replaceAll(' ', '-').toLowerCase()}><div><p className="eyebrow">{region.name}</p><h2 id={region.name.replaceAll(' ', '-').toLowerCase()} className="mt-3 font-serif text-4xl tracking-tight text-[#173f3b]">Eat your way through <em>{region.name}.</em></h2><p className="mt-4 max-w-2xl leading-7 text-[#668079]">{region.description}</p></div><div className="mt-8 grid gap-5 md:grid-cols-3">{region.restaurants.map((restaurant) => <article key={restaurant.name} className="group flex flex-col overflow-hidden rounded-2xl border border-[#d8ddd4] bg-white transition hover:-translate-y-1 hover:border-[#d38b30]/50 hover:shadow-lg"><div className="h-48 overflow-hidden"><img src={restaurant.image} alt={`${restaurant.name} restaurant`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="flex flex-1 flex-col p-6"><span className="flex size-10 items-center justify-center rounded-full bg-[#e6ece4] text-[#d38b30]"><Utensils size={18} /></span><h3 className="mt-5 font-serif text-2xl text-[#173f3b]">{restaurant.name}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[.16em] text-[#d38b30]">{restaurant.place}</p><p className="mt-4 flex-1 text-sm leading-6 text-[#668079]">{restaurant.detail}</p><a href={restaurant.menu} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#173f3b] transition group-hover:text-[#d38b30]">View menu / details <ArrowRight size={15} /></a></div></article>)}</div></section>)}</div>
        </div>
      </section>
      <section className="bg-[#173f3b] px-6 py-20 text-white lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow text-[#f3bf62]">Make it part of your journey</p><h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Tell us what you&apos;re hungry for.</h2><p className="mt-4 max-w-xl leading-7 text-white/70">We&apos;ll reserve the right table, find the local favourite and shape the route around your appetite.</p></div><a href="/plan-trip" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e7a94b] px-6 py-3.5 text-sm font-semibold text-[#173f3b] transition hover:bg-[#f3bf62]">Plan a food-filled route <ArrowRight size={16} /></a></div></section>
    </PageFrame>
  )
}
