import {
  siBootstrap,
  siCss,
  siExpress,
  siGit,
  siGithub,
  siGithubpages,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siJupyter,
  siMysql,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPrisma,
  siPython,
  siUipath,
} from 'simple-icons'

// Brand marks rendered as monochrome inline SVG so they inherit the sky-blue theme.
const brandPaths = {
  Python: siPython.path,
  JavaScript: siJavascript.path,
  HTML: siHtml5.path,
  CSS: siCss.path,
  Pandas: siPandas.path,
  NumPy: siNumpy.path,
  'Jupyter Notebook': siJupyter.path,
  UiPath: siUipath.path,
  'Node.js': siNodedotjs.path,
  'Express.js': siExpress.path,
  MySQL: siMysql.path,
  PostgreSQL: siPostgresql.path,
  'Prisma ORM': siPrisma.path,
  Git: siGit.path,
  GitHub: siGithub.path,
  'GitHub Pages': siGithubpages.path,
  JWT: siJsonwebtokens.path,
  Bootstrap: siBootstrap.path,
}

export function hasBrandIcon(name) {
  return Boolean(brandPaths[name])
}

export function BrandIcon({ name, className = 'size-4' }) {
  const d = brandPaths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

export function GitHubIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  )
}

export function LinkedInIcon({ className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}
