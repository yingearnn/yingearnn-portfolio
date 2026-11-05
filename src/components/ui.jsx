import { motion } from 'motion/react'
import { BrandIcon, hasBrandIcon } from './Icons'

/* Fade-and-rise when scrolled into view. MotionConfig in App.jsx
   disables the movement for visitors who prefer reduced motion. */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

export function Section({ id, children, className = '', tone = 'base' }) {
  const tones = {
    base: '',
    deep: 'bg-abyss/60',
  }
  return (
    <section id={id} className={`relative py-24 sm:py-28 ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({ index, eyebrow, title, highlight, children, align = 'left' }) {
  const centered = align === 'center'
  const parts = highlight ? title.split(highlight) : [title]
  return (
    <Reveal className={`mb-12 sm:mb-14 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}>
      <p
        className={`mb-4 inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-sky uppercase ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span className="text-mist-dim">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-sky to-transparent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-snow sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {parts[0]}
        {highlight && <span className="text-sky">{highlight}</span>}
        {parts[1]}
      </h2>
      {children && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{children}</p>}
    </Reveal>
  )
}

const buttonStyles = {
  primary:
    'bg-sky text-navy-950 hover:bg-sky-light shadow-[0_0_0_0_rgba(125,211,252,0)] hover:shadow-[0_0_28px_-4px_rgba(125,211,252,0.65)]',
  secondary:
    'border border-sky/50 bg-navy-950/40 text-ice hover:border-sky hover:bg-sky/10 hover:text-snow hover:shadow-[0_0_24px_-8px_rgba(125,211,252,0.5)]',
  ghost: 'text-sky-light hover:text-snow hover:bg-sky/10',
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <a
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export function TechBadge({ name, variant = 'solid', size = 'md' }) {
  const sizes = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
  }
  const variants = {
    solid: 'border-sky/20 bg-sky/[0.07] text-ice hover:border-sky/45 hover:bg-sky/[0.12]',
    exploring: 'border-dashed border-sky-light/35 bg-transparent text-sky-light/90 hover:border-sky-light/60',
  }
  return (
    <span
      className={`inline-flex items-center rounded-lg border font-medium transition-colors duration-200 ${sizes[size]} ${variants[variant]}`}
    >
      {hasBrandIcon(name) ? (
        <BrandIcon name={name} className={size === 'sm' ? 'size-3.5 text-sky' : 'size-4 text-sky'} />
      ) : (
        <span
          className={`rounded-full ${variant === 'exploring' ? 'border border-sky-light/70' : 'bg-sky'} ${
            size === 'sm' ? 'size-1.5' : 'size-2'
          }`}
          aria-hidden="true"
        />
      )}
      {name}
    </span>
  )
}
