import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { Reveal, Section, SectionHeading } from '../components/ui'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" tone="deep">
      <SectionHeading index="06" eyebrow="Work experience" title="Learning to work with people" highlight="with people">
        My part-time roles aren't in tech, but they've taught me to listen carefully, explain things clearly and be
        someone a team can depend on.
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="h-full">
            <article className="glass glass-hover flex h-full flex-col rounded-3xl p-6 sm:p-7">
              <header className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-sky/25 bg-navy-950/60 text-sky">
                  <Briefcase className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-snow">{job.company}</h3>
                    {job.current && (
                      <span className="rounded-full bg-sky/15 px-2.5 py-0.5 text-[11px] font-semibold text-sky">Current</span>
                    )}
                  </div>
                  <p className="mt-0.5 font-medium text-sky-light">
                    {job.role} <span className="text-mist-dim">·</span> <span className="text-mist">{job.type}</span>
                  </p>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-mist">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-4 text-sky/80" aria-hidden="true" /> {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4 text-sky/80" aria-hidden="true" /> {job.location}
                    </span>
                  </p>
                </div>
              </header>

              <ul className="mt-6 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-mist">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {job.skills.map((s) => (
                  <span key={s} className="rounded-lg border border-sky/15 bg-sky/[0.06] px-2.5 py-1 text-xs font-medium text-ice">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
