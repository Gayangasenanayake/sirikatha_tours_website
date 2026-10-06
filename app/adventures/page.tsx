import Link from 'next/link'
import { ArrowRight, Compass, Fish, Mountain, PawPrint, Sparkles, Waves } from 'lucide-react'
import { PageFrame, PageHero } from '@/components/site-shell'

const activities = [
  { title: 'Whale watching', category: 'Open ocean', text: 'Set out before sunrise to meet blue whales and dolphins in the deep waters off Sri Lanka’s southern coast.', image: '/images/adventure-whale-watching.png', Icon: Waves, detail: 'Mirissa · Trincomalee · Kalpitiya' },
  { title: 'Kayaking', category: 'On the water', text: 'Paddle through quiet lagoons, mangrove channels and peaceful rivers where the island reveals its softer side.', image: '/images/adventure-kayaking-greenery.png', Icon: Waves, detail: 'Madu River · Kalu Ganga · Koggala' },
  { title: 'Turtle watching', category: 'Coastal wildlife', text: 'Discover Sri Lanka’s gentle marine life with responsible coastal experiences and local conservation stories.', image: '/images/adventure-turtle-watching.png', Icon: Fish, detail: 'Hikkaduwa · Kosgoda · Rekawa' },
  { title: 'Stilt fishing', category: 'Island tradition', text: 'See one of the south coast’s most distinctive traditions and learn how families have fished from the shallows.', image: '/images/adventure-stilt-fishing.png', Icon: Compass, detail: 'Koggala · Weligama · Ahangama' },
  { title: 'Kumbukkan Oya rafting expedition', category: 'Sirikatha special', text: 'Follow the Kumbukkan Oya on a rare, immersive rafting experience through wild country and quiet village landscapes.', image: '/images/adventure-kumbukkan-rafting.png', Icon: Mountain, detail: 'Kumbukkan Oya · Eastern Sri Lanka' },
  { title: 'Kitulgala rafting', category: 'Whitewater adventure', text: 'Ride lively rapids through rainforest, with a full day of river thrills arranged around your comfort and pace.', image: '/images/adventure-kitulgala-rafting.png', Icon: Waves, detail: 'Kitulgala · Kelani River' },
  { title: 'Wildlife safaris', category: 'Wild & free', text: 'Track elephants, leopards and sloth bears with expert naturalists in Sri Lanka’s most beautiful national parks.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85', Icon: PawPrint, detail: 'Yala · Udawalawe · Wilpattu' },
  { title: 'Hiking & viewpoints', category: 'On foot', text: 'Walk tea trails, cloud forests and ancient rock paths with thoughtful local guides who know every hidden turn.', image: '/images/adventure-hiking-viewpoints.png', Icon: Mountain, detail: 'Ella · Knuckles · Horton Plains' },
  { title: 'Surf & sea', category: 'Blue water', text: 'Find your line on warm southern waves, or spend a quiet morning snorkeling over coral gardens.', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=85', Icon: Waves, detail: 'Weligama · Arugam Bay · Mirissa' },
  { title: 'Food & culture', category: 'Taste & connect', text: 'Cook, taste and share stories with the people who make the island’s food and traditions so memorable.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85', Icon: Sparkles, detail: 'Galle · Kandy · Jaffna' },
  { title: 'Scenic rail', category: 'Slow travel', text: 'Take the famous blue train through valleys, tea country and villages where the view changes every minute.', image: '/images/sri-lanka-hero.png', Icon: Compass, detail: 'Kandy · Ella · Nanu Oya' },
  { title: 'Snorkeling & diving', category: 'Underwater', text: 'Explore clear island waters, colorful reef life and unforgettable coastal landscapes with trusted crews.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85', Icon: Fish, detail: 'Trincomalee · Hikkaduwa · Kalpitiya' },
]

export default function Adventures() {
  return (
    <PageFrame>
      <PageHero eyebrow="Adventures & activities" title={<>Make room for <em>the unexpected.</em></>} intro="From first surf lessons to wild leopard mornings, Sirikatha Tours arranges memorable things to do across Sri Lanka — at your pace, with the right vehicle and local support." />
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-6 border-b border-[#dfe1d6] pb-10 md:flex-row md:items-end">
          <div><p className="eyebrow">Find your kind of day</p><h2 className="section-title mt-4 max-w-2xl">Big feelings, <em>beautifully arranged.</em></h2></div>
          <p className="max-w-sm text-sm leading-6 text-[#668079]">Tell us what makes you curious. We’ll build the route, arrange the vehicle and pair you with people who know Sri Lanka by heart.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ title, category, text, image, Icon, detail }) => (
            <article key={title} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_35px_rgba(23,63,59,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,63,59,0.13)]">
              <div className="relative overflow-hidden"><img src={image} alt={title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d38b30]"><Icon size={15} />{category}</span></div>
              <div className="p-6"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9aafa6]">{detail}</p><h2 className="mt-3 font-serif text-2xl text-[#173f3b]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#668079]">{text}</p><Link href="/plan-trip" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d38b30]">Add to my trip <ArrowRight size={15} /></Link></div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#e9eee5] px-6 py-16 lg:px-10 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow">Not sure where to begin?</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#173f3b] sm:text-5xl">Tell us what sounds like <em className="font-normal text-[#d38b30]">you.</em></h2></div><Link href="/plan-trip" className="inline-flex items-center gap-2 rounded-full bg-[#173f3b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245b54]">Plan my adventure <ArrowRight size={16} /></Link></div></section>
    </PageFrame>
  )
}
