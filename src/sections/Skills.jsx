import { Reveal, Section, SectionHeading, TechBadge } from '../components/ui'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="03" eyebrow="Technical skills" title="My toolkit so far" highlight="so far">
        Technologies I've used hands-on in coursework, alongside the areas I'm actively working towards. No percentage
        bars — just an honest picture of where I am.
      </SectionHeading>

      <Reveal className="mb-8 flex flex-wrap items-center gap-4 text-xs text-mist">
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-7 rounded-md border border-sky/30 bg-sky/10" aria-hidden="true" /> Used in projects
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-7 rounded-md border border-dashed border-sky-light/50" aria-hidden="true" /> Exploring &
          learning next
        </span>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map(({ title, icon: Icon, blurb, used, exploring }, i) => (
          <Reveal key={title} delay={i * 0.06} className="h-full">
            <div className="glass glass-hover h-full rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-sky/25 to-ocean/30 text-sky ring-1 ring-sky/25">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-snow">{title}</h3>
                  <p className="text-sm text-mist">{blurb}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${title} — used in projects`}>
                {used.map((s) => (
                  <li key={s}>
                    <TechBadge name={s} />
                  </li>
                ))}
              </ul>
              {exploring.length > 0 && (
                <>
                  <p className="mt-5 mb-2.5 font-mono text-[11px] tracking-wider text-sky-light/80 uppercase">Exploring next</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${title} — exploring`}>
                    {exploring.map((s) => (
                      <li key={s}>
                        <TechBadge name={s} variant="exploring" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
