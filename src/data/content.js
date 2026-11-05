import { Bot, Code, Database, ChartColumn } from 'lucide-react'

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code,
    blurb: 'Used across data analysis and web coursework.',
    used: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    exploring: [],
  },
  {
    title: 'Data Analytics',
    icon: ChartColumn,
    blurb: 'Cleaning, merging and visualising real Singapore datasets.',
    used: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'UiPath'],
    exploring: [],
  },
  {
    title: 'Software & Databases',
    icon: Database,
    blurb: 'Back ends, relational databases and version control.',
    used: [
      'Node.js',
      'Express.js',
      'MySQL',
      'PostgreSQL',
      'Prisma ORM',
      'REST APIs',
      'Database Design',
      'Git',
      'GitHub',
      'GitHub Pages',
    ],
    exploring: [],
  },
  {
    title: 'AI & Emerging Tech',
    icon: Bot,
    blurb: 'Tools I use today, and where I want to go next.',
    used: ['AI-assisted Development', 'Generative AI Tools'],
    exploring: ['Machine Learning', 'AI Model Development', 'Data Science'],
  },
]

export const journey = [
  {
    title: 'Learning the fundamentals',
    text: 'My diploma gave me a proper grounding in programming — logic, functions, data structures and how to break a problem into steps.',
  },
  {
    title: 'Applying it in assignments',
    text: 'Coursework turned theory into practice: analysing datasets in Python, building web apps and designing the databases behind them.',
  },
  {
    title: 'Experimenting with different kinds of apps',
    text: 'A garden game, a restaurant ordering system and a data analysis project each showed me a different side of software.',
  },
  {
    title: 'Discovering AI as a development partner',
    text: 'I started using AI tools to explore ideas, explain unfamiliar code and get unstuck — and saw how much faster I could learn.',
  },
  {
    title: 'Realising that understanding matters',
    text: 'Code that runs is not the same as code I understand. Being able to explain, debug and change what I build became my priority.',
  },
  {
    title: 'Strengthening problem-solving',
    text: 'I now make a habit of tracing through logic, reading documentation and rebuilding parts myself so the knowledge sticks.',
  },
  {
    title: 'Exploring AI & Machine Learning',
    text: "I'm curious about what happens under the hood — how models are trained, evaluated and put into real products — and I'm working towards building my own.",
  },
  {
    title: 'Learning from industry professionals',
    text: 'The next step: an internship where I can learn from experienced people while contributing to real work.',
    next: true,
  },
]

export const experience = [
  {
    company: 'Stryv',
    role: 'Sales Assistant',
    type: 'Part-time',
    period: 'Sep 2026 – Present',
    location: 'Singapore',
    current: true,
    points: [
      "Recommend suitable products based on each customer's needs and preferences",
      'Answer customer questions with clear, accurate product information',
      'Help customers make informed decisions through a consultative, no-pressure approach',
    ],
    skills: ['Communication', 'Understanding customer needs', 'Product knowledge'],
  },
  {
    company: 'Pacific Bookstores Pte Ltd',
    role: 'Bookshop Assistant',
    type: 'Part-time',
    period: 'Nov 2024 – Dec 2024',
    location: 'Singapore',
    points: [
      'Helped parents and students find the right textbooks and learning materials',
      'Answered enquiries and provided product information',
      'Supported inventory tracking by monitoring and reporting low stock',
      'Handled cashiering and processed transactions',
      'Prepared online orders for collection and delivery',
      'Supported daily bookshop operations alongside the team',
    ],
    skills: ['Teamwork', 'Responsibility', 'Attention to detail'],
  },
]

export const awards = [
  {
    title: 'Edusave Merit Bursary',
    note: 'Received twice',
    badge: '×2',
  },
  {
    title: 'Edusave Award for Achievement, Good Leadership and Service (EAGLES)',
    note: 'Recognising leadership, service and character',
  },
]

export const interests = [
  'Artificial Intelligence',
  'Data Analytics',
  'Data Science',
  'Machine Learning',
  'AI Application Development',
  'Software Development',
]

export const hopeToGain = [
  'Learn from experienced professionals',
  'Understand how industry teams develop, review and test software',
  'See how professional teams solve technical problems',
  'Strengthen my programming and analytical skills',
  'Grow into a more capable, independent developer',
]

export const willBring = [
  'Curiosity and a willingness to pick up new tools quickly',
  'Ownership of the tasks I am given, and follow-through',
  'Hands-on exposure to Python data analysis, Node.js back ends and SQL databases',
  'Clear communication from customer-facing work',
  'Openness to feedback, and readiness to support my teammates',
]
