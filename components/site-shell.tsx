'use client'

import { Compass, Menu, X, ArrowRight } from 'lucide-react'
import { LoadingLink } from '@/components/navigation-loader'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const links = [['Destinations', '/journeys'], ['Vehicles', '/tours-vehicles'], ['Adventures & activities', '/adventures'], ['Restaurants', '/restaurants'], ['Reviews', '/reviews'], ['About', '/about']] as const
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#173f3b]/90 shadow-lg shadow-[#092f2d]/10 backdrop-blur-md' : 'bg-transparent'}`}><div className={`mx-auto grid max-w-[1380px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 sm:px-7 lg:px-10 ${scrolled ? 'py-3' : 'py-4'}`}>
    <LoadingLink href="/" className="flex shrink-0 items-center gap-3" aria-label="Sirikatha Tours home"><span className="flex size-10 items-center justify-center rounded-full border border-[#e7a94b] text-[#e7a94b]"><Compass size={21} /></span><span className="font-serif text-2xl tracking-tight">sirikatha tours<span className="text-[#e7a94b]">.</span></span></LoadingLink>
    <nav className="hidden items-center justify-center gap-1 whitespace-nowrap text-[11px] font-medium text-white lg:flex xl:gap-2 xl:text-sm">{links.map(([label, href]) => <LoadingLink key={href} href={href} className="group relative rounded-full px-3 py-2 font-semibold text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:text-[#f3bf62] hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf62] xl:px-3.5">{label}<span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#f3bf62] transition-transform duration-300 group-hover:scale-x-100" /></LoadingLink>)}</nav>
    <div className="hidden shrink-0 items-center lg:flex"><LoadingLink href="/plan-trip" className="rounded-full bg-[#e7a94b] px-4 py-3 text-xs font-semibold text-[#173f3b] transition hover:bg-[#f3bf62] xl:px-5 xl:text-sm">Book your plan <ArrowRight className="ml-2 inline" size={15} /></LoadingLink></div>
    <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-full border border-white/30 p-2 lg:hidden">{open ? <X /> : <Menu />}</button>
    {open && <nav className="absolute left-4 right-4 top-20 flex flex-col gap-4 rounded-2xl border border-white/15 bg-[#173f3b]/95 p-5 text-white shadow-xl backdrop-blur-md lg:hidden">{links.map(([label, href]) => <LoadingLink onClick={() => setOpen(false)} key={href} href={href} className="rounded-xl px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-[#f3bf62]">{label}</LoadingLink>)}<LoadingLink href="/plan-trip" onClick={() => setOpen(false)} className="font-semibold text-[#f3bf62]">Book your plan</LoadingLink></nav>}
  </div></header>
}

const heroImages: Record<string, { src: string; alt: string }> = {
  'Take the scenic route': { src: '/images/route-golden-triangle.png', alt: 'Scenic road through Sri Lanka' },
  'Adventures & activities': { src: '/images/adventure-rafting-hero.png', alt: 'Travellers whitewater rafting through a lush Sri Lankan jungle river' },
  'Curated journeys': { src: '/images/sri-lanka-journey.png', alt: 'Road winding through Sri Lankan highlands' },
  'Stay your way': { src: '/images/sri-lanka-stay.png', alt: 'Boutique stay surrounded by tropical greenery' },
  'Taste the island': { src: '/images/sri-lanka-food.png', alt: 'Colourful Sri Lankan feast' },
  'Every road, your way': { src: '/images/car-fleet.png', alt: 'Private vehicles ready for a Sri Lankan journey' },
  'About Sirikatha Tours': { src: '/images/sri-lanka-hero.png', alt: 'Sri Lankan landscape at golden hour' },
  'Kind words from the road': { src: '/images/route-tea-tide.png', alt: 'Journey through tea country toward the coast' },
  'Let’s make a plan': { src: '/images/route-wild-coast.png', alt: 'Travel route through Sri Lankan wild country' },
}

export function PageHero({ eyebrow, title, intro, image: customImage }: { eyebrow: string; title: React.ReactNode; intro: string; image?: { src: string; alt: string } }) {
  const image = customImage ?? heroImages[eyebrow] ?? heroImages['Take the scenic route']
  return <section className="relative isolate min-h-[620px] overflow-hidden bg-[#173f3b] text-white"><img src={image.src} alt={image.alt} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092f2d]/95 via-[#173f3b]/75 to-[#173f3b]/30" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#092f2d]/70 via-transparent to-[#092f2d]/35" /><SiteHeader /><div className="mx-auto flex min-h-[540px] max-w-7xl items-end px-6 pb-20 pt-28 lg:px-10 lg:pb-28"><div className="max-w-3xl"><p className="eyebrow text-[#f3bf62]">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-serif text-[3.7rem] leading-[.96] tracking-[-.045em] drop-shadow-lg sm:text-7xl lg:text-[6.25rem]">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 drop-shadow">{intro}</p><span className="mt-8 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/80 backdrop-blur-sm">Sirikatha · Sri Lanka</span></div></div></section>
}

export function SiteFooter() { return <footer className="relative isolate min-h-[560px] overflow-hidden bg-[#0d302e] px-6 py-28 text-white lg:min-h-[680px] lg:px-10 lg:py-40"><img src="/images/footer-sri-lanka.png" alt="Tropical Sri Lankan road at blue hour" className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-90" /><div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071f1e]/80 via-[#0d302e]/45 to-[#0d302e]/20" /><div className="relative z-20 mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]"><div><p className="font-serif text-4xl text-white">sirikatha tours<span className="text-[#e7a94b]">.</span></p><p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Thoughtful journeys through Sri Lanka, shaped around the way you want to travel.</p><a href="/plan-trip" className="mt-7 inline-flex rounded-full bg-[#e7a94b] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#173f3b] transition hover:bg-[#f3bf62]">Plan your journey</a><div className="mt-5 flex flex-wrap gap-3"><a href="https://wa.me/94112345678" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#25D366]/60 bg-[#25D366]/15 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#25D366]/30" aria-label="Chat with Sirikatha Tours on WhatsApp">WhatsApp</a><a href="/plan-trip?contact=wechat" className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20" aria-label="Contact Sirikatha Tours about WeChat">WeChat</a><a href="mailto:hello@sirikathatours.lk" className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20" aria-label="Email Sirikatha Tours">Email</a></div></div><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f3bf62]">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/70"><a href="/journeys" className="hover:text-white">Destinations</a><a href="/tours-vehicles" className="hover:text-white">Vehicles</a><a href="/adventures" className="hover:text-white">Adventures & activities</a></div></div><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#f3bf62]">Find us</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/70"><p>Colombo · Sri Lanka</p><a href="mailto:hello@sirikathatours.lk" className="hover:text-white">hello@sirikathatours.lk</a><a href="https://wa.me/94112345678" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp · +94 11 234 5678</a><a href="/plan-trip?contact=wechat" className="hover:text-white" aria-label="Start a WeChat enquiry">WeChat enquiry</a><p>© 2026 Sirikatha Tours</p></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/45 sm:flex-row"><p>Travel slowly. See deeply.</p><p>Made for curious travellers.</p></div></div></footer> }

export function PageFrame({ children }: { children: React.ReactNode }) { return <main className="min-h-screen bg-[#f7f5ef] text-[#173f3b]">{children}<SiteFooter /></main> }

export const Arrow = () => <ArrowRight size={16} />
