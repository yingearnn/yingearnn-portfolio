import { Compass, ScanSearch, ShieldCheck, TrendingUp } from 'lucide-react'
import { Reveal, Section, SectionHeading } from '../components/ui'

const principles = [
  {
    icon: Compass,
    title: 'Explore with curiosity',
    text: 'I use AI to compare approaches, explain unfamiliar concepts and test ideas quickly — then ask why a solution works.',
  },
  {
    icon: ScanSearch,
    title: 'Understand before relying on it',
    text: 'I read through, run and question what AI suggests. If I can’t explain a piece of code, I’m not done with it yet.',
  },
  {
    icon: ShieldCheck,
    title: 'Use it responsibly',
    text: 'I’m open about where AI has helped, I check its output for mistakes, and I keep sensitive information out of it.',
  },
  {
    icon: TrendingUp,
    title: 'Build real independence',
    text: 'Each project, I aim to write more on my own — so I can evaluate, improve and eventually build more sophisticated work.',
  },
]

export default function AIApproach() {
  return (
    <Section id="ai-approach">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading index="05" eyebrow="Perspective" title="How I Approach AI" highlight="AI" />
          <Reveal>
            <figure className="relative rounded-3xl border border-sky/20 bg-gradient-to-br from-navy-800/80 to-navy-950/60 p-6 sm:p-8">
              <span className="absolute -top-5 left-6 font-display text-7xl leading-none text-sky/40" aria-hidden="true">
                “
              </span>
              <blockquote className="text-base leading-relaxed text-ice sm:text-lg">
                I see AI as a powerful tool for learning, experimenting and solving problems. It has helped me explore
                ideas and build applications — but I know that understanding the fundamentals behind the code matters
                just as much. My goal is to keep strengthening that understanding, so I can confidently evaluate, improve
                and eventually build more sophisticated applications on my own.
              </blockquote>
            </figure>
          </Reveal>
        </div>

        <ul className="grid content-center gap-4 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} as="li" delay={i * 0.07} className="h-full">
              <div className="glass glass-hover h-full rounded-2xl p-5">
                <Icon className="size-6 text-sky" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-snow">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
