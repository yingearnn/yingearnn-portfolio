import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, Download, Mail, User } from 'lucide-react'
import NetworkCanvas from '../components/NetworkCanvas'
import { Button } from '../components/ui'
import { useResumeDownload } from '../components/Resume'
import { profile } from '../data/profile'

function RotatingRole() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.5em] min-w-[16ch] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[index]}
          className="text-sky"
          initial={reduce ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] animate-blink bg-sky" aria-hidden="true" />
      <span className="sr-only">Roles: {profile.roles.join(', ')}</span>
    </span>
  )
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

function ProfileCard() {
  const rows = [
    ['course', `"${profile.course}"`],
    ['specialisation', `"${profile.specialisation}"`],
    ['school', `"${profile.school}"`],
    ['year', `"${profile.year} · 2025 – 2028"`],
    ['internship_from', `"${profile.availability}"`],
  ]
  return (
    <motion.div
      {...fade(0.55)}
      className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0"
      aria-label="Profile summary"
      role="group"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-sky/50 via-ocean/30 to-transparent opacity-70 blur-[1px]" aria-hidden="true" />
      <div className="glass relative overflow-hidden rounded-3xl">
        <div className="flex items-center gap-2 border-b border-sky/10 px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-sky/70" />
          <span className="size-2.5 rounded-full bg-sky-light/40" />
          <span className="size-2.5 rounded-full bg-ice/20" />
          <span className="ml-3 font-mono text-xs text-mist-dim">about_me.py</span>
        </div>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
          <code>
            <span className="text-mist-dim"># currently compiling: a future AI developer</span>
            {'\n'}
            <span className="text-sky-light">ying_en</span> <span className="text-mist">=</span> <span className="text-mist">{'{'}</span>
            {'\n'}
            {rows.map(([k, v]) => (
              <span key={k}>
                {'    '}
                <span className="text-sky">"{k}"</span>
                <span className="text-mist">: </span>
                <span className="text-ice">{v}</span>
                <span className="text-mist">,</span>
                {'\n'}
              </span>
            ))}
            {'    '}
            <span className="text-sky">"exploring"</span>
            <span className="text-mist">: [</span>
            <span className="text-ice">"ML"</span>
            <span className="text-mist">, </span>
            <span className="text-ice">"data"</span>
            <span className="text-mist">, </span>
            <span className="text-ice">"AI apps"</span>
            <span className="text-mist">],</span>
            {'\n'}
            <span className="text-mist">{'}'}</span>
          </code>
        </pre>
        <div className="flex items-center justify-between gap-3 border-t border-sky/10 bg-navy-950/40 px-5 py-3.5">
          <span className="flex items-center gap-2 text-xs font-medium text-ice">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-sky" />
            </span>
            Open to internships
          </span>
          <span className="font-mono text-xs text-mist-dim">{profile.location}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const downloadResume = useResumeDownload()

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20">
      {/* Background layers */}
      <div
        className="absolute inset-0 -z-20 animate-gradient bg-[linear-gradient(130deg,#04111f_0%,#071a2f_35%,#0f2c4e_60%,#071a2f_85%)] bg-[length:220%_220%]"
        aria-hidden="true"
      />
      <div className="grid-backdrop absolute inset-0 -z-10" aria-hidden="true" />
      <NetworkCanvas className="-z-10 opacity-80" />
      <div className="absolute top-[12%] -left-32 -z-10 size-[28rem] animate-float-slow rounded-full bg-sky/10 blur-[110px]" aria-hidden="true" />
      <div className="absolute -right-24 bottom-[8%] -z-10 size-[24rem] animate-float rounded-full bg-ocean/40 blur-[110px]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-navy-950" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <motion.p
            {...fade(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky/25 bg-sky/[0.06] px-3.5 py-1.5 text-xs font-medium text-sky-light sm:text-sm"
          >
            <span className="size-1.5 rounded-full bg-sky" aria-hidden="true" />
            {profile.course} · {profile.specialisation}
          </motion.p>

          <motion.h1 {...fade(0.15)} className="text-[2.75rem] leading-[1.02] font-bold text-snow sm:text-6xl lg:text-7xl">
            Chay <span className="text-gradient animate-gradient">Ying En</span>
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-5 font-display text-lg font-medium text-mist sm:text-2xl">
            <RotatingRole />
            <span className="mt-1 block text-base font-normal text-mist-dim sm:mt-0 sm:inline sm:text-lg">
              <span className="hidden sm:inline"> · </span>
              {profile.school}
            </span>
          </motion.p>

          <motion.p {...fade(0.35)} className="mt-8 max-w-xl font-display text-xl leading-snug font-semibold text-ice sm:text-2xl">
            Exploring <span className="text-sky">AI</span>. Building <span className="text-sky">ideas</span>. Growing
            through <span className="text-sky">technology</span>.
          </motion.p>

          <motion.p {...fade(0.42)} className="mt-4 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            I'm an IT student specialising in AI & Analytics at Singapore Polytechnic. I like exploring new technology,
            turning ideas into working applications, and getting a little better with every hands-on project.
          </motion.p>

          <motion.div {...fade(0.5)} className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View My Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#about" variant="secondary">
              <User className="size-4" aria-hidden="true" /> About Me
            </Button>
            <Button href={profile.resume} download={profile.resumeFileName} onClick={downloadResume} variant="secondary">
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail className="size-4" aria-hidden="true" /> Contact Me
            </Button>
          </motion.div>
        </div>

        <ProfileCard />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-mist-dim transition-colors hover:text-sky md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
