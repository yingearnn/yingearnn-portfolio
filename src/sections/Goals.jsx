import { CalendarCheck, HandHeart, Sprout } from 'lucide-react'
import { Reveal, Section, SectionHeading } from '../components/ui'
import { hopeToGain, interests, willBring } from '../data/content'
import { profile } from '../data/profile'

function Column({ icon: Icon, title, items, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass glass-hover h-full rounded-3xl p-6 sm:p-7">
        <h3 className="flex items-center gap-3 text-lg font-semibold text-snow">
          <span className="grid size-10 place-items-center rounded-xl bg-sky/10 text-sky ring-1 ring-sky/25">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          {title}
        </h3>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Goals() {
  return (
    <Section id="goals" tone="deep">
      <SectionHeading index="08" eyebrow="Internship goals" title="What I'm Looking For" highlight="Looking For">
        An internship where I can learn from people who do this every day — and pull my weight while I'm there.
      </SectionHeading>

      <Reveal className="glass mb-8 flex flex-col gap-6 rounded-3xl p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sky text-navy-950">
            <CalendarCheck className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[11px] tracking-wider text-mist-dim uppercase">Available from</p>
            <p className="font-display text-2xl font-semibold text-snow">{profile.availability}</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 md:max-w-xl md:justify-end" aria-label="Areas of interest">
          {interests.map((i) => (
            <li key={i} className="rounded-full border border-sky/30 bg-sky/[0.07] px-3.5 py-1.5 text-sm font-medium text-ice">
              {i}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        <Column icon={Sprout} title="What I hope to gain" items={hopeToGain} delay={0} />
        <Column icon={HandHeart} title="What I'll bring to the team" items={willBring} delay={0.08} />
      </div>
    </Section>
  )
}
