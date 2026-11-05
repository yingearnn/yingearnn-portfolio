// Resolve a file in /public so it works under the GitHub Pages sub-path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Chay Ying En',
  shortName: 'Ying En',
  initials: 'YE',
  course: 'Diploma in Information Technology',
  specialisation: 'AI & Analytics',
  school: 'Singapore Polytechnic',
  location: 'Singapore',
  year: 'Year 2',
  period: 'April 2025 – April 2028',
  availability: 'March 2027',
  email: 'chayyingennn1205@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chayyingen/',
  github: 'https://github.com/yingearnn',
  // Put the PDF at public/resume/Chay_Ying_En_Resume.pdf
  resume: asset('resume/Chay_Ying_En_Resume.pdf'),
  resumeFileName: 'Chay_Ying_En_Resume.pdf',
  roles: [
    'Aspiring AI Developer',
    'AI & Analytics Student',
    'Curious Builder',
    'Technology Enthusiast',
    'Aspiring Data Analyst',
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
