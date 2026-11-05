import { Award, CalendarDays, GraduationCap, Medal, School } from 'lucide-react'
import { Reveal, Section, SectionHeading } from '../components/ui'
import { awards } from '../data/content'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading index="07" eyebrow="Education & awards" title="Where I'm learning" highlight="learning" />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="h-full">
          <article className="relative h-full overflow-hidden rounded-3xl border border-sky/30 bg-gradient-to-br from-navy-700/80 via-navy-800/80 to-navy-950/80 p-6 sm:p-8">
            <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-sky/15 blur-[80px]" aria-hidden="true" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-sky text-navy-950">
                  <GraduationCap className="size-6" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-sky/40 bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
                  Currently studying · {profile.year}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-snow sm:text-3xl">{profile.school}</h3>
              <p className="mt-2 text-lg font-medium text-sky-light">{profile.course}</p>
              <p className="mt-1 text-mist">
                Specialisation: <span className="font-medium text-ice">{profile.specialisation}</span>
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-mist">
                <CalendarDays className="size-4 text-sky" aria-hidden="true" /> {profile.period}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-sky/15 pt-6">
                {['Programming for Data Analytics', 'Back-End Development', 'Database Systems'].map((m) => (
                  <span key={m} className="rounded-lg border border-sky/20 bg-navy-950/40 px-3 py-1.5 text-xs font-medium text-ice">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.08}>
            <article className="glass glass-hover rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-sky/25 bg-navy-950/60 text-sky">
                  <School className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-snow">Jurongville Secondary School</h3>
                  <p className="text-sky-light">GCE O-Level</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-mist">
                    <CalendarDays className="size-4 text-sky/80" aria-hidden="true" /> January 2021 – October 2024
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.14} className="flex-1">
            <article id="awards" className="glass h-full rounded-3xl p-6">
              <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-sky uppercase">
                <Award className="size-4" aria-hidden="true" /> Awards
              </h3>
              <ul className="mt-5 space-y-4">
                {awards.map((a) => (
                  <li key={a.title} className="flex items-start gap-4 rounded-2xl border border-sky/10 bg-navy-950/40 p-4">
                    <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky/30 to-ocean/40 text-ice">
                      <Medal className="size-5" aria-hidden="true" />
                      {a.badge && (
                        <span className="absolute -top-2 -right-2 rounded-full bg-sky px-1.5 py-0.5 text-[10px] font-bold text-navy-950">
                          {a.badge}
                        </span>
                      )}
                    </span>
                    <div>
                      <p className="text-sm leading-snug font-semibold text-snow">{a.title}</p>
                      <p className="mt-1 text-xs text-mist">{a.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
