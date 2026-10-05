import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const details = {
  'private-cars': { title: 'Private cars', eyebrow: 'Luxury & comfort', intro: 'Your own comfortable car, your own pace, and a driver who knows the island beyond the usual route.', image: '/images/private-car-card.png', alt: 'Refined private sedan on a Sri Lankan coastal road', capacity: '1–4 guests', model: 'Sedans and SUVs', best: 'Couples, solo travellers and private day trips', description: 'Private cars make the island feel wonderfully open. Stop for tea, take the scenic road, or linger at a viewpoint without working around a group schedule.' },
  'high-roof-vans': { title: 'High-roof vans', eyebrow: 'Extra room', intro: 'A spacious Toyota Hiace-style high-roof van for easy, comfortable days across Sri Lanka.', image: '/images/high-roof-van-card.png', alt: 'Modern 2026 Toyota Hiace high-roof passenger van on a Sri Lankan hill road', capacity: '6–9 guests', model: '2026 Toyota Hiace high-roof', best: 'Families and small groups with luggage', description: 'Generous headroom, easy entry and room for bags make the high-roof van a relaxed choice for longer circuits, airport transfers and sightseeing days.' },
  'flat-roof-vans': { title: 'Flat-roof vans', eyebrow: 'Easy touring', intro: 'A practical Nissan Caravan-style van that keeps transfers smooth, flexible and comfortable.', image: '/images/flat-roof-van-card.png', alt: 'Nissan Caravan E25 or E26 flat-roof passenger van on a Sri Lankan highway', capacity: '5–8 guests', model: 'Nissan Caravan E25 / E26', best: 'Flexible tours and everyday transfers', description: 'The flat-roof van is an adaptable island companion: comfortable enough for full travel days and practical enough for hotel, airport and attraction transfers.' },
  minibuses: { title: 'Minibuses', eyebrow: 'Small groups', intro: 'A modern Mitsubishi Rosa-style minibus for friends, families and compact tour groups travelling together.', image: '/images/minibus-card.png', alt: 'Modern Mitsubishi Rosa minibus near a Sri Lankan heritage site', capacity: '10–18 guests', model: 'Mitsubishi Rosa', best: 'School groups, families and small events', description: 'Keep your group together without moving into a full-size coach. Minibuses offer a comfortable balance of space, manoeuvrability and value.' },
  'big-buses': { title: 'Big buses', eyebrow: 'Groups & events', intro: 'Premium air-conditioned group transport with room to settle in for longer island journeys.', image: '/images/big-bus-card.png', alt: 'Modern luxury coach winding through Sri Lankan highlands', capacity: '20–50 guests', model: 'Luxury touring coach', best: 'Large groups, events and multi-day circuits', description: 'For larger groups, a big bus keeps the itinerary social and simple. Enjoy comfortable seating, luggage capacity and dependable support from one destination to the next.' },
} as const

export default async function VehicleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = details[slug as keyof typeof details] ?? details['private-cars']
  return <PageFrame>
    <PageHero eyebrow={vehicle.eyebrow} title={<>{vehicle.title} for <em>easy island days.</em></>} intro={vehicle.intro} image={{ src: vehicle.image, alt: vehicle.alt }} />
    <main className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
        <div className="overflow-hidden rounded-3xl"><img src={vehicle.image} alt={vehicle.alt} className="h-[360px] w-full object-cover sm:h-[500px]" /></div>
        <div className="rounded-3xl bg-[#f7f5ef] p-8 sm:p-10">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-7 space-y-5 text-sm"><div className="border-b border-[#d8ddd4] pb-4"><dt className="text-[#668079]">Capacity</dt><dd className="mt-1 font-semibold text-[#173f3b]">{vehicle.capacity}</dd></div><div className="border-b border-[#d8ddd4] pb-4"><dt className="text-[#668079]">Vehicle type</dt><dd className="mt-1 font-semibold text-[#173f3b]">{vehicle.model}</dd></div><div><dt className="text-[#668079]">Best for</dt><dd className="mt-1 font-semibold text-[#173f3b]">{vehicle.best}</dd></div></dl>
          <a href="/plan-trip" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#d38b30] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b97425]">Request this vehicle <ArrowRight className="ml-2" size={16} /></a>
        </div>
      </div>
      <section className="mt-16 max-w-3xl"><p className="eyebrow">Why it works</p><h2 className="section-title mt-3">Made for the way <em>you travel.</em></h2><p className="mt-6 text-lg leading-8 text-[#55736d]">{vehicle.description}</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><p className="flex items-center gap-2 text-sm text-[#173f3b]"><Check className="text-[#d38b30]" size={18} /> Local driver</p><p className="flex items-center gap-2 text-sm text-[#173f3b]"><ShieldCheck className="text-[#d38b30]" size={18} /> Reliable support</p><p className="flex items-center gap-2 text-sm text-[#173f3b]"><Check className="text-[#d38b30]" size={18} /> Flexible routes</p></div></section>
    </main>
  </PageFrame>
}
