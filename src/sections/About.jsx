import { CalendarDays, Compass, GraduationCap, MapPin, Sparkles, Target } from 'lucide-react'
import { Reveal, Section, SectionHeading } from '../components/ui'
import { profile } from '../data/profile'

const facts = [
  { icon: GraduationCap, label: 'Studying', value: `${profile.course}, ${profile.year}` },
  { icon: Sparkles, label: 'Specialisation', value: profile.specialisation },
  { icon: MapPin, label: 'School', value: `${profile.school}, ${profile.location}` },
  { icon: CalendarDays, label: 'Internship availability', value: `From ${profile.availability}` },
  { icon: Compass, label: 'Currently exploring', value: 'Machine learning & AI-powered apps' },
  { icon: Target, label: 'Long-term goal', value: 'Build my own AI models and useful AI applications' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About me" title="Curious about how things work — and how to make them better." highlight="how to make them better" />

      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-mist sm:text-[1.0625rem]">
          <p>
            Hi, I'm <span className="font-semibold text-snow">Ying En</span> — a Year 2 Information Technology student at
            Singapore Polytechnic, specialising in <span className="text-sky">AI & Analytics</span>.
          </p>
          <p>
            What pulls me towards technology is the moment an idea turns into something that actually works. I enjoy
            trying out new tools, seeing how far I can take them, and figuring out <em className="text-ice not-italic">why</em>{' '}
            something behaves the way it does. AI is where that curiosity is strongest — I'm fascinated by how it can be
            built into real applications to solve problems, automate repetitive work and make software more helpful to
            the people using it.
          </p>
          <p>
            In school I've worked across data analysis in Python, back-end development with Node.js and relational database
            design. Along the way I've used AI tools as a learning partner to explore approaches and get unstuck faster —
            and that taught me something important: getting an application to run is only the start. Good software is
            also about clear problem-solving, well-organised code, sensible architecture, debugging and testing.
          </p>
          <p>
            That's a big reason I'm looking for an internship. I want to see how experienced developers approach real
            problems, and put what I learn straight back into the team — taking ownership of my tasks, supporting my
            colleagues and contributing to projects wherever I can. Longer term, I'd love to develop my own AI models and
            build AI-powered applications that people find genuinely useful.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="glass grid gap-1 rounded-3xl p-3 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4 rounded-2xl p-3.5 transition-colors hover:bg-sky/[0.05]">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-sky/20 bg-navy-950/60 text-sky">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-wider text-mist-dim uppercase">{label}</span>
                  <span className="mt-0.5 block text-sm font-medium text-snow">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
