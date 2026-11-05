import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'

export default function Lightbox({ image, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!image) return
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus?.()
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-abyss/90 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={image.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.figure
            className="relative max-h-full w-full max-w-5xl overflow-auto rounded-2xl border border-sky/20 bg-navy-900 p-3 sm:p-4"
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-xl border border-sky/30 bg-navy-950/80 text-snow hover:border-sky hover:text-sky"
              aria-label="Close enlarged image"
            >
              <X className="size-5" />
            </button>
            <div className="rounded-xl bg-white p-2">
              <img src={image.src} alt={image.title} className="mx-auto max-h-[72vh] w-auto" />
            </div>
            <figcaption className="px-1 pt-4 pb-1">
              <p className="font-display text-lg font-semibold text-snow">{image.title}</p>
              {image.caption && <p className="mt-1 text-sm leading-relaxed text-mist">{image.caption}</p>}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
