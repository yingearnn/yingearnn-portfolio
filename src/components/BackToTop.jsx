import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          className="fixed right-4 bottom-4 z-40 grid size-12 place-items-center rounded-2xl border border-sky/30 bg-navy-800/85 text-sky backdrop-blur-md transition-colors hover:border-sky hover:bg-navy-700 hover:shadow-[0_0_24px_-6px_rgba(125,211,252,0.7)] sm:right-6 sm:bottom-6"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp className="size-5" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
