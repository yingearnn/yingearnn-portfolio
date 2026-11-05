import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/Icons'
import { useResumeDownload } from '../components/Resume'
import { Button, Reveal, Section, SectionHeading } from '../components/ui'
import { navLinks, profile } from '../data/profile'

function ContactCard({ href, icon, label, value, external, onClick, download, padRight }) {
  return (
    <a
      href={href}
      onClick={onClick}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="glass glass-hover group flex items-center gap-4 rounded-2xl p-4 hover:-translate-y-1 sm:p-5"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-sky/10 text-sky ring-1 ring-sky/25 transition-colors group-hover:bg-sky group-hover:text-navy-950">
        {icon}
      </span>
      <span className={`min-w-0 flex-1 ${padRight ? 'pr-11' : ''}`}>
        <span className="block font-mono text-[11px] tracking-wider text-mist-dim uppercase">{label}</span>
        <span className="block truncate text-sm font-medium text-snow sm:text-base">{value}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-mist-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky"
        aria-hidden="true"
      />
    </a>
  )
}

export default function Contact() {
  const downloadResume = useResumeDownload()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard not available — the mailto link still works */
    }
  }

  return (
    <>
      <Section id="contact" className="overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/[0.07] blur-[120px]" aria-hidden="true" />
        <div className="relative">
          <SectionHeading index="09" eyebrow="Contact" title="Let's Connect" highlight="Connect" align="center">
            I'm always interested in opportunities to learn, collaborate and contribute to meaningful technology projects.
            If you're looking for a curious, motivated intern with a genuine interest in AI and software development, I'd
            love to hear from you.
          </SectionHeading>

          <Reveal className="mx-auto flex max-w-xl flex-wrap justify-center gap-3">
            <Button href={`mailto:${profile.email}?subject=Internship%20opportunity`} variant="primary">
              <Mail className="size-4" aria-hidden="true" /> Email me
            </Button>
            <Button href={profile.resume} download={profile.resumeFileName} onClick={downloadResume} variant="secondary">
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            <div className="relative">
              <ContactCard
                href={`mailto:${profile.email}`}
                icon={<Mail className="size-5" aria-hidden="true" />}
                label="Email"
                value={profile.email}
                padRight
              />
              <button
                type="button"
                onClick={copyEmail}
                className="absolute top-1/2 right-12 grid size-9 -translate-y-1/2 place-items-center rounded-lg border border-sky/20 bg-navy-950/80 text-mist transition-colors hover:border-sky hover:text-sky sm:right-14"
                aria-label={copied ? 'Email copied' : 'Copy email address'}
              >
                {copied ? <Check className="size-4 text-sky" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              </button>
            </div>
            <ContactCard
              href={profile.linkedin}
              external
              icon={<LinkedInIcon className="size-5" />}
              label="LinkedIn"
              value="linkedin.com/in/chayyingen"
            />
            <ContactCard
              href={profile.github}
              external
              icon={<GitHubIcon className="size-5" />}
              label="GitHub"
              value="github.com/yingearnn"
            />
            <ContactCard
              href={profile.resume}
              download={profile.resumeFileName}
              onClick={downloadResume}
              icon={<Download className="size-5" aria-hidden="true" />}
              label="Resume"
              value="Download PDF"
            />
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-sky/10 bg-abyss/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-snow">{profile.name}</p>
            <p className="mt-1 text-sm text-mist">
              {profile.specialisation} student · {profile.school}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-mist transition-colors hover:text-sky">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-xl border border-sky/15 text-mist transition-colors hover:border-sky hover:text-sky">
              <GitHubIcon className="size-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-xl border border-sky/15 text-mist transition-colors hover:border-sky hover:text-sky">
              <LinkedInIcon className="size-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="grid size-10 place-items-center rounded-xl border border-sky/15 text-mist transition-colors hover:border-sky hover:text-sky">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="border-t border-sky/5 py-5 text-center text-xs text-mist-dim">
          © {new Date().getFullYear()} {profile.name}. Designed and built with React & Tailwind CSS.
        </p>
      </footer>
    </>
  )
}
