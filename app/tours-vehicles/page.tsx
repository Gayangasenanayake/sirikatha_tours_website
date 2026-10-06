import { Car, BusFront, ShipWheel, ShieldCheck, Users, ArrowRight, MapPin, Users2, Zap } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const vehicles = [
  { title: 'Private cars', slug: 'private-cars', subtitle: 'Luxury & comfort', desc: 'Comfortable sedans and SUVs with experienced local drivers for intimate journeys.', image: '/images/private-car-card.png', alt: 'Refined private sedan on a Sri Lankan coastal road', icon: 'Car', capacity: '1-4 guests' },
  { title: 'High-roof vans', slug: 'high-roof-vans', subtitle: 'Extra room', desc: 'Spacious high-roof vans with generous headroom for relaxed family and group travel.', image: '/images/high-roof-van-card.png', alt: 'Modern 2026 Toyota Hiace high-roof passenger van on a Sri Lankan hill road', icon: 'Users', capacity: '6-9 guests' },
  { title: 'Flat-roof vans', slug: 'flat-roof-vans', subtitle: 'Easy touring', desc: 'Comfortable, practical vans for smooth transfers and flexible island exploration.', image: '/images/flat-roof-van-card.png', alt: 'Nissan Caravan E25 or E26 flat-roof passenger van on a Sri Lankan highway', icon: 'Users', capacity: '5-8 guests' },
  { title: 'Minibuses', slug: 'minibuses', subtitle: 'Small groups', desc: 'A balanced choice for friends, families and compact tour groups travelling together.', image: '/images/minibus-card.png', alt: 'Modern Mitsubishi Rosa minibus near a Sri Lankan heritage site', icon: 'Users', capacity: '10-18 guests' },
  { title: 'Big buses', slug: 'big-buses', subtitle: 'Groups & events', desc: 'Premium air-conditioned coaches for larger groups, events and multi-day circuits.', image: '/images/big-bus-card.png', alt: 'Modern luxury coach winding through Sri Lankan highlands', icon: 'Bus', capacity: '20-50 guests' },
]

const iconMap = { Car, Users: Users2, Bus: BusFront }

export default function ToursVehicles() {
  return (
    <PageFrame>
      <PageHero 
        eyebrow="Every road, your way" 
        title={<>The right vehicle for <em>every adventure.</em></>} 
        intro="Sirikatha Tours can arrange any kind of vehicle for all kinds of tours, with dependable drivers and support from arrival to departure."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-8">
          <p className="eyebrow">Our fleet</p>
          <h2 className="section-title mt-4 max-w-2xl">Choose comfort for your crew.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map(({ title, slug, subtitle, desc, image, alt, icon, capacity }) => {
            const Icon = iconMap[icon as keyof typeof iconMap]
            return (
              <article key={title} className="group overflow-hidden rounded-2xl border border-[#d8ddd4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#173f3b]/10"><a href={`/tours-vehicles/${slug}`} aria-label={`Learn more about ${title}`}>
                <div className="relative h-56 overflow-hidden">
                  <img src={image} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173f3b]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">{capacity}</span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#d38b30]">{subtitle}</p>
                  <h3 className="mt-2 font-serif text-2xl text-[#173f3b]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#668079]">{desc}</p>
                  <span className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#d38b30] transition group-hover:gap-2">View vehicle details <ArrowRight className="ml-1" size={14} /></span>
                </div></a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="rounded-3xl border-2 border-[#e7a94b]/30 bg-gradient-to-br from-[#f7f5ef] to-white p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="eyebrow">Quick booking</p>
              <h2 className="section-title mt-3 max-w-sm">Reserve your vehicle now.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#55736d]">Tell us your dates, group size and route preferences. Our team will confirm availability and pricing within hours.</p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <MapPin className="shrink-0 text-[#d38b30]" size={20} />
                  <div><p className="font-semibold text-[#173f3b]">Any destination</p><p className="text-sm text-[#668079]">Airport, hotels, attractions, safaris</p></div>
                </div>
                <div className="flex gap-4">
                  <Zap className="shrink-0 text-[#d38b30]" size={20} />
                  <div><p className="font-semibold text-[#173f3b]">Quick response</p><p className="text-sm text-[#668079]">Confirmed within 24 hours</p></div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="shrink-0 text-[#d38b30]" size={20} />
                  <div><p className="font-semibold text-[#173f3b]">Professional drivers</p><p className="text-sm text-[#668079]">Experienced, courteous, local knowledge</p></div>
                </div>
              </div>
            </div>

            <form className="space-y-4" action="/plan-trip" method="get">
              <div>
                <label className="block text-sm font-semibold text-[#173f3b] mb-2">Destination or route</label>
                <input type="text" placeholder="Where are you going?" className="w-full rounded-xl border border-[#d8ddd4] bg-white px-4 py-3 text-sm placeholder-[#a8bab5] outline-none transition focus:border-[#d38b30] focus:ring-2 focus:ring-[#d38b30]/20" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#173f3b] mb-2">Travel dates</label>
                  <input type="date" className="w-full rounded-xl border border-[#d8ddd4] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d38b30] focus:ring-2 focus:ring-[#d38b30]/20" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#173f3b] mb-2">Group size</label>
                  <select className="w-full rounded-xl border border-[#d8ddd4] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d38b30] focus:ring-2 focus:ring-[#d38b30]/20">
                    <option>1-2 people</option>
                    <option>3-4 people</option>
                    <option>5-8 people</option>
                    <option>9-15 people</option>
                    <option>15+ people</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#173f3b] mb-2">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-[#d8ddd4] bg-white px-4 py-3 text-sm placeholder-[#a8bab5] outline-none transition focus:border-[#d38b30] focus:ring-2 focus:ring-[#d38b30]/20" required />
              </div>
              <button type="submit" className="w-full rounded-full bg-[#d38b30] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b97425] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d38b30]">Book your vehicle</button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 rounded-3xl bg-[#173f3b] p-8 text-white sm:p-12 md:grid-cols-3">
          <div>
            <ShieldCheck className="text-[#f3bf62]" size={28} />
            <h3 className="mt-5 font-serif text-2xl">Trusted drivers</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Local knowledge, careful driving and thoughtful recommendations.</p>
          </div>
          <div>
            <ShipWheel className="text-[#f3bf62]" size={28} />
            <h3 className="mt-5 font-serif text-2xl">Any route</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Airport transfers, sightseeing, wildlife safaris and multi-day circuits.</p>
          </div>
          <div>
            <Users className="text-[#f3bf62]" size={28} />
            <h3 className="mt-5 font-serif text-2xl">Any group</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">Solo travellers, couples, families and groups all welcome.</p>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
