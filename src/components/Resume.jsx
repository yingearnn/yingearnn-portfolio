import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FileText, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const ResumeContext = createContext(() => {})

/*
  Wraps the app so every "Download Resume" button shares one handler.
  It checks the PDF actually exists before downloading; if it has not been
  added to public/resume/ yet, a friendly message is shown instead of a 404.
*/
export function ResumeProvider({ children }) {
  const [message, setMessage] = useState(false)
  const timer = useRef()

  const download = useCallback(async (event) => {
    event.preventDefault()
    try {
      const res = await fetch(profile.resume, { method: 'HEAD', cache: 'no-store' })
      const type = res.headers.get('content-type') || ''
      if (!res.ok || !type.includes('pdf')) throw new Error('missing')
      const a = document.createElement('a')
      a.href = profile.resume
      a.download = profile.resumeFileName
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch {
      setMessage(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setMessage(false), 6000)
    }
  }, [])

  return (
    <ResumeContext.Provider value={download}>
      {children}
      <AnimatePresence>
        {message && (
          <motion.div
            role="status"
            className="glass fixed inset-x-4 bottom-20 z-[70] mx-auto flex max-w-md items-start gap-3 rounded-2xl p-4 sm:bottom-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FileText className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
            <div className="text-sm">
              <p className="font-semibold text-snow">My resume is being updated.</p>
              <p className="mt-1 text-mist">
                Email me and I'll send you the latest copy right away.{' '}
                <a className="inline-flex items-center gap-1 font-medium text-sky underline-offset-4 hover:underline" href={`mailto:${profile.email}?subject=Resume%20request`}>
                  <Mail className="size-3.5" aria-hidden="true" /> Request resume
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResumeContext.Provider>
  )
}

export const useResumeDownload = () => useContext(ResumeContext)
