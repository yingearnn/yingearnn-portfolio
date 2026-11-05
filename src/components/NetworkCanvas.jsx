import { useEffect, useRef } from 'react'

/*
  Lightweight "connected nodes" background drawn on a canvas.
  - Node count scales with screen area (fewer on phones)
  - Pauses when the tab is hidden or the hero is off-screen
  - Draws a single static frame when the visitor prefers reduced motion
*/
export default function NetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let nodes = []
    let frame = 0
    let running = true
    let visible = true
    const pointer = { x: -9999, y: -9999 }
    const LINK = 140

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(24, Math.min(80, Math.round((width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(125, 211, 252, ${0.16 * (1 - dist / LINK)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y)
        if (pd < 180) {
          ctx.strokeStyle = `rgba(186, 230, 253, ${0.28 * (1 - pd / 180)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(186, 230, 253, 0.75)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      if (!running) return
      if (visible && !document.hidden) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < -10) n.x = width + 10
          if (n.x > width + 10) n.x = -10
          if (n.y < -10) n.y = height + 10
          if (n.y > height + 10) n.y = -10
        }
        draw()
      }
      frame = requestAnimationFrame(step)
    }

    seed()
    if (reduceMotion) {
      draw()
    } else {
      frame = requestAnimationFrame(step)
    }

    const onResize = () => {
      seed()
      if (reduceMotion) draw()
    }
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)
    window.addEventListener('resize', onResize)
    if (!reduceMotion) {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('pointerleave', onLeave)
    }

    return () => {
      running = false
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />
}
