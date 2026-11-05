import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Section, SectionHeading } from '../components/ui'
import { journey } from '../data/content'

function Step({ step, index }) {
  const left = index % 2 === 0
  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-[1fr_3rem_1fr] md:gap-6">
      {/* Node */}
      <div className="relative flex justify-center md:col-start-2 md:row-start-1">
        <motion.span
          className={`relative z-10 mt-5 grid size-10 place-items-center rounded-full border font-mono text-xs font-semibold ${
            step.next
              ? 'border-dashed border-sky-light/70 bg-navy-950 text-sky-light'
              : 'border-sky/60 bg-navy-800 text-sky shadow-[0_0_18px_-2px_rgba(125,211,252,0.45)]'
          }`}
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
      </div>

      {/* Card */}
      <motion.div
        className={`md:row-start-1 ${left ? 'md:col-start-1' : 'md:col-start-3'}`}
        initial={{ opacity: 0, x: left ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`glass glass-hover rounded-2xl p-5 ${step.next ? 'border-dashed !border-sky-light/35' : ''} ${
            left ? 'md:text-right' : ''
          }`}
        >
          {step.next && (
            <span className="mb-2 inline-block rounded-full bg-sky/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-sky uppercase">
              Up next
            </span>
          )}
          <h3 className="text-lg font-semibold text-snow">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{step.text}</p>
        </div>
      </motion.div>
    </li>
  )
}

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <Section id="journey" tone="deep">
      <SectionHeading index="04" eyebrow="My learning journey" title="Learning, Building & Improving" highlight="Building" align="center">
        Every project has pushed me a step further — from writing my first programs to thinking about how real software
        is designed. Here's how that journey has unfolded so far.
      </SectionHeading>

      <div ref={ref} className="relative mx-auto max-w-4xl">
        {/* Track + animated progress line */}
        <div className="absolute top-0 bottom-0 left-5 w-px bg-sky/10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <motion.div
          className="absolute top-0 bottom-0 left-5 w-px origin-top bg-gradient-to-b from-sky via-sky-light to-sky/20 shadow-[0_0_12px_rgba(125,211,252,0.6)] md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: progress }}
          aria-hidden="true"
        />
        <ol className="relative space-y-6 md:space-y-2">
          {journey.map((step, i) => (
            <Step key={step.title} step={step} index={i} />
          ))}
        </ol>
      </div>
    </Section>
  )
}
