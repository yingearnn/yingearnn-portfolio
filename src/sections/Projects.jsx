import { useCallback, useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ChartLine,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  Lightbulb,
  ListChecks,
  Maximize2,
  Puzzle,
  Rocket,
  Search,
  Star,
  UserCheck,
  Users,
} from 'lucide-react'
import Lightbox from '../components/Lightbox'
import { GitHubIcon } from '../components/Icons'
import { Button, Reveal, Section, SectionHeading, TechBadge } from '../components/ui'
import { featuredProject as fp, projects } from '../data/projects'

const tabDefs = [
  { id: 'findings', label: 'Key findings', icon: Search },
  { id: 'process', label: 'Process', icon: ListChecks },
  { id: 'learned', label: 'What I learned', icon: Lightbulb },
  { id: 'challenges', label: 'Challenges', icon: Puzzle },
  { id: 'next', label: 'Next steps', icon: Rocket },
]

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist sm:text-[0.95rem]">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky shadow-[0_0_8px_rgba(125,211,252,0.8)]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ChartViewer({ onOpen }) {
  const [active, setActive] = useState(0)
  const chart = fp.charts[active]

  return (
    <div className="flex h-full flex-col">
      <button
        type="button"
        onClick={() => onOpen(chart)}
        className="group relative block overflow-hidden rounded-2xl border border-sky/15 bg-white text-left"
        aria-label={`Enlarge chart: ${chart.title}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={chart.src}
            src={chart.src}
            alt={chart.title}
            width={chart.width}
            height={chart.height}
            loading="lazy"
            className="aspect-[4/3] w-full object-contain p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-lg bg-navy-950/80 text-sky opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="size-4" aria-hidden="true" />
        </span>
      </button>

      <div className="mt-4 min-h-[5.5rem]" aria-live="polite">
        <p className="flex flex-wrap items-center gap-2 font-display text-base font-semibold text-snow">
          {chart.title}
          {chart.mine && (
            <span className="inline-flex items-center gap-1 rounded-md bg-sky/15 px-2 py-0.5 font-sans text-[11px] font-semibold text-sky">
              <UserCheck className="size-3" aria-hidden="true" /> My chart
            </span>
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-mist">{chart.caption}</p>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2" role="tablist" aria-label="Project charts">
        {fp.charts.map((c, i) => (
          <button
            key={c.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={c.title}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
              i === active ? 'border-sky ring-2 ring-sky/40' : 'border-sky/10 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={c.src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

function FeaturedProject() {
  const [tab, setTab] = useState('findings')
  const [lightbox, setLightbox] = useState(null)
  const close = useCallback(() => setLightbox(null), [])
  const tabsId = useId()

  return (
    <Reveal>
      <article className="glass glass-hover relative overflow-hidden rounded-[1.75rem] p-5 sm:p-8">
        <div className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-sky/10 blur-[100px]" aria-hidden="true" />

        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky px-3 py-1 text-xs font-bold text-navy-950">
            <Star className="size-3.5" aria-hidden="true" /> Featured project
          </span>
          <span className="rounded-full border border-sky/25 px-3 py-1 text-xs font-medium text-sky-light">{fp.module}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky/15 px-3 py-1 text-xs font-medium text-mist">
            <Users className="size-3.5" aria-hidden="true" /> {fp.type}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10 [&>*]:min-w-0">
          <ChartViewer onOpen={setLightbox} />

          <div className="flex flex-col">
            <h3 className="text-2xl leading-tight font-semibold text-snow sm:text-3xl">{fp.title}</h3>
            <blockquote className="mt-5 border-l-2 border-sky pl-4 text-sm leading-relaxed text-ice italic sm:text-[0.95rem]">
              “{fp.question}”
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-mist sm:text-[0.95rem]">{fp.summary}</p>

            <div className="mt-6 rounded-2xl border border-sky/15 bg-navy-950/45 p-4">
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-wider text-sky uppercase">
                <UserCheck className="size-4" aria-hidden="true" /> My contribution
              </p>
              <BulletList items={fp.myRole} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {fp.tech.map((t) => (
                <TechBadge key={t} name={t} size="sm" />
              ))}
            </div>
          </div>
        </div>

{/* UiPath RPA Video Demonstration */}
<div className="mt-10 rounded-2xl border border-sky/20 bg-navy-950/50 p-5 sm:p-6">

  <div className="mb-5">
    <span className="mb-2 inline-block rounded-full border border-sky/30 bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
      RPA Automation Demo
    </span>

    <h4 className="text-xl font-semibold text-snow sm:text-2xl">
      {fp.demoTitle}
    </h4>

    <p className="mt-2 text-sm leading-relaxed text-mist">
      {fp.demoDescription}
    </p>
  </div>

  <video
    controls
    playsInline
    preload="metadata"
    className="aspect-video w-full rounded-xl border border-sky/20 bg-black"
    aria-label="UiPath automated report generation demonstration"
  >
    <source src={fp.demoVideo} type="video/mp4" />
    Your browser does not support HTML5 video playback.
  </video>

  <p className="mt-4 text-xs leading-relaxed text-mist">
    Academic group project demonstrating how UiPath can be
    integrated with Python data analysis to automate reporting
    and Word document generation.
  </p>

</div>

        <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {fp.stats.map((s) => (
            <div key={s.value} className="rounded-2xl border border-sky/10 bg-navy-950/40 p-4">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-bold text-sky sm:text-3xl">{s.value}</span>
                <span className="mt-1 block text-xs leading-snug text-mist sm:text-[0.8rem]">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <div
            className="-mx-1 flex gap-1 overflow-x-auto border-b border-sky/10 px-1 pb-px [scrollbar-width:none]"
            role="tablist"
            aria-label="Project details"
          >
            {tabDefs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                id={`${tabsId}-${id}`}
                aria-selected={tab === id}
                aria-controls={`${tabsId}-panel`}
                onClick={() => setTab(id)}
                className={`relative flex shrink-0 items-center gap-2 rounded-t-lg px-3.5 py-3 text-sm font-medium transition-colors ${
                  tab === id ? 'text-sky' : 'text-mist hover:text-snow'
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
                {tab === id && (
                  <motion.span layoutId="featured-tab" className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-sky" />
                )}
              </button>
            ))}
          </div>
          <div id={`${tabsId}-panel`} role="tabpanel" aria-labelledby={`${tabsId}-${tab}`} className="min-h-48 pt-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <BulletList items={fp.tabs[tab]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2 border-t border-sky/10 pt-5 text-xs leading-relaxed text-mist-dim">
          <ChartLine className="mt-0.5 size-4 shrink-0 text-sky/70" aria-hidden="true" />
          Charts are the original outputs from the project notebook. Data: Graduate Employment Survey and Singapore
          resident workforce datasets from data.gov.sg. The project also included a UiPath workflow that downloads the
          datasets, runs the Python script, uses generative AI to analyse the charts and compiles the results into a Word
          report.
        </p>
      </article>
      <Lightbox image={lightbox} onClose={close} />
    </Reveal>
  )
}

function ProjectCard({ project, delay }) {
  const [open, setOpen] = useState(false)
  const [shot, setShot] = useState(0)
  const panelId = useId()
  const current = project.gallery[shot]

  return (
    <Reveal delay={delay} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-[1.5rem]"
      >
        
<div className="relative overflow-hidden border-b border-sky/10 bg-navy-950">

  {current ? (
    <img
      src={current.src}
      alt={current.alt}
      width="1280"
      height="800"
      loading="lazy"
      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
    />
  ) : (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <ShieldCheck
        className="size-20 text-sky"
        strokeWidth={1.2}
        aria-hidden="true"
      />
      <span className="font-mono text-sm tracking-widest text-sky-light uppercase">
        Secure Coding
      </span>
    </div>
  )}

  <div
    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
    aria-hidden="true"
  />

  <span className="absolute bottom-3 left-3 rounded-lg bg-navy-950/85 px-2.5 py-1 text-xs font-medium text-sky-light backdrop-blur">
    {project.module}
  </span>

  {project.gallery.length > 1 && (
    <div className="absolute right-3 bottom-3 flex gap-1.5">
      {project.gallery.map((g, i) => (
        <button
          key={g.src}
          type="button"
          onClick={() => setShot(i)}
          aria-label={`Show screenshot ${i + 1}: ${g.alt}`}
          aria-pressed={i === shot}
          className={`h-2 rounded-full transition-all ${
            i === shot
              ? 'w-6 bg-sky'
              : 'w-2 bg-ice/50 hover:bg-ice'
          }`}
        />
      ))}
    </div>
  )}

</div>


        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="font-mono text-[11px] tracking-wider text-sky uppercase">{project.accent}</p>
          <h3 className="mt-2 text-xl font-semibold text-snow sm:text-2xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-mist sm:text-[0.95rem]">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} size="sm" />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-6 flex items-center justify-between rounded-xl border border-sky/15 bg-navy-950/40 px-4 py-3 text-sm font-medium text-ice transition-colors hover:border-sky/40 hover:text-sky"
          >
            {open ? 'Hide project details' : 'Features, learnings & next steps'}
            <ChevronDown className={`size-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-6 pt-6">
                  {[
                    ['Verified features', project.features],
                    ['What I learned', project.learned],
                    ['Challenges', project.challenges],
                    ['Future improvements', project.next],
                  ].map(([title, items]) => (
                    <div key={title}>
                      <h4 className="mb-3 font-mono text-[11px] font-medium tracking-wider text-sky uppercase">{title}</h4>
                      <BulletList items={items} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-6">
  {(project.demo || project.repo) && (
    <div className="flex flex-wrap gap-3">
      {project.demo && (
        <Button
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="flex-1 sm:flex-none"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Live demo
        </Button>
      )}

      {project.repo && (
        <Button
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="flex-1 sm:flex-none"
        >
          <GitHubIcon className="size-4" />
          Source code
        </Button>
      )}
    </div>
  )}

  {project.demoNote && (
    <p className="mt-3 text-xs leading-relaxed text-mist-dim">
      {project.demoNote}
    </p>
  )}
</div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" tone="deep">
      <SectionHeading index="02" eyebrow="Academic projects" title="Things I've built and analysed" highlight="built and analysed">
       Four academic projects exploring data analytics, automation,
        secure coding, back-end development and database systems.
       Each project has helped me strengthen my technical knowledge
        through practical learning.
      </SectionHeading>

      <FeaturedProject />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  )
}
