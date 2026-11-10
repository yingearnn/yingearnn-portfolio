import { asset } from './profile'

/*
  Every fact below was taken from the project files themselves:
  - Project 1: the CA2 notebook, Python script, datasets and slide deck
  - Project 2: github.com/yingearnn/grow-a-garden-app
  - Project 3: github.com/yingearnn/restaurant-ordering-system
*/

export const featuredProject = {
  id: 'sg-graduate-analysis',
  title:  'Singapore Employment Data Analytics & RPA Automation',
  module: 'Programming for Data Analytics',
  type: 'Group project · 4 members',
  question:
    "How does holding a university degree affect salary and employment stability, and how have these relationships changed relative to Singapore's national workforce between 2013 and 2020?",
  summary:
   'A group project combining Python-based data analysis with ' +
  'UiPath robotic process automation. We analysed Singapore ' +
  'employment and salary trends using Pandas, NumPy, Matplotlib ' +
  'and Seaborn, and developed an automated workflow to help ' +
  'generate a Word report containing the analysis.',
  demoVideo: asset('videos/uipath-demo.mp4'),

demoTitle: 'UiPath RPA — Automated Report Generation',

demoDescription:
  'A demonstration of our UiPath automation workflow, ' +
  'which combines Python-generated analysis with automated ' +
  'report creation in Microsoft Word.',

  tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'UiPath'],
  myRole: [
    'Built the national median income line chart and the national employment rate bar chart, along with their written analysis',
    'Worked on the UiPath workflow step that uses AI to analyse the generated charts',
    'Finalised the research question for the group',
    'Contributed to the UiPath workflow for AI-assisted chart analysis and automated Word report generation',
  ],
  stats: [
    {
      value: '3,944',
      label: 'graduate survey records analysed after merging and cleaning (2013–2020)',
    },
    {
      value: '+23%',
      label: 'rise in national median income (excl. employer CPF), S$3,250 → S$4,000, 2013–2019',
    },
    {
      value: '79–81%',
      label: 'band the national employment rate (ages 25–64) stayed within every year',
    },
    {
      value: '90–95%',
      label: 'median graduate employment rate across degree programmes, each year',
    },
  ],
  charts: [
    {
      src: asset('images/projects/pda-line-chart.webp'),
      title: 'National median income, 2013–2020',
      caption:
        'Median income rose every year from about S$3,250 to S$4,000 by 2019, then held flat in 2020. The largest single-year jump was 2016 → 2017.',
      mine: true,
      width: 630,
      height: 470,
    },
    {
      src: asset('images/projects/pda-bar-chart.webp'),
      title: 'National employment rate, 2013–2020',
      caption:
        'The employment rate for residents aged 25–64 stayed between 79.0% and 80.8% throughout, with no visible COVID-era drop at the national level (80.3% in 2020).',
      mine: true,
      width: 630,
      height: 470,
    },
    {
      src: asset('images/projects/pda-kde-chart.webp'),
      title: 'Income distribution: degree vs non-degree',
      caption:
        'Non-degree incomes peak sharply around S$2,000–2,500 in both 2013 and 2020, while the degree-holder curve shifts right — suggesting the degree premium widened.',
      width: 1129,
      height: 529,
    },
    {
      src: asset('images/projects/pda-boxplot.webp'),
      title: 'Estimated salary spread, 2013–2020',
      caption:
        'Pooled across all years, the median and interquartile range for degree holders sit clearly above those of non-degree holders.',
      width: 790,
      height: 590,
    },
    {
      src: asset('images/projects/pda-pairplot.webp'),
      title: 'Graduate salary & employment relationships',
      caption:
        'Basic and gross median salaries move almost in a straight line, and programmes with higher pay tend to have higher employment rates.',
      width: 1120,
      height: 1033,
    },
  ],
  tabs: {
    process: [
      'Inner-joined the two Graduate Employment Survey files on a shared key and kept only the salary and employment columns needed',
      'Removed repeated header rows hidden inside the data using a boolean mask',
      "Replaced 'na' strings with NaN and converted salary and employment fields to numeric types",
      'Filtered every dataset to 2013–2020 so all comparisons cover the same period',
      'Mapped income brackets (e.g. "$3,000 to $3,999") to numeric midpoints so bracketed data could be plotted',
      'Weighted the income distributions by the number of employed residents in each bracket',
    ],
    findings: [
      "The national picture was stable: employment held at roughly 80% and median income grew steadily before plateauing in 2020.",
      'Graduate employment rates stayed around 90–95% — consistently higher than the national rate, though the two datasets measure different groups.',
      'Median starting pay across degree programmes rose from about S$3,230 (2013–2016) to S$3,500 (2017–2020).',
      "Non-degree incomes barely moved between 2013 and 2020 while degree-holder incomes shifted upwards — so within a stable economy, the degree advantage appears to have widened.",
    ],
    learned: [
      'Real datasets are messy — a lot of the work happens before the first chart',
      'How joins, filtering and type conversion in Pandas shape the final result',
      'Choosing a chart that answers the question, not just one that looks good',
      'Reading charts critically when indicators seem to conflict, instead of smoothing it over',
      'Splitting work across a team and bringing everything together into one story',
    ],
    challenges: [
      'The survey data contained embedded header rows and text values like "na" that broke numeric analysis until they were cleaned out',
      'Income data only came in brackets, so midpoints had to be used as estimates — useful for comparison, but an approximation',
      'The pooled boxplot and the year-by-year KDE told slightly different stories, which had to be reconciled in the conclusion',
    ],
    next: [
      'Use exact figures where available instead of bracket midpoints',
      'Add statistical tests to check whether the differences are significant',
      'Break the results down by university and degree to see which fields drive the trend',
      'Extend the analysis past 2020 and try a simple predictive model for graduate salaries',
    ],
  },
  repo: null, // Add a repository link here if you publish the notebook
}

export const projects = [
  {
    id: 'grow-a-garden',
    title: 'Grow a Garden — Wellness Garden Game',
    module: 'Back-End Development',
    accent: 'Inspired by the Roblox game “Grow a Garden”',
    image: asset('images/projects/garden-plots.webp'),
    gallery: [
      { src: asset('images/projects/garden-plots.webp'), alt: 'Garden page with 20 plots, harvest and plant buttons' },
      { src: asset('images/projects/garden-shop.webp'), alt: 'Shop page listing plants by rarity with point costs and stock' },
    ],
    imageAlt: 'Grow a Garden web app — the garden page with 20 plots and a points counter',
    summary:
      'A gamified web app that adapts a familiar game loop into a full-stack project: complete wellness challenges to earn points, spend them in a shop, then plant and harvest a virtual garden.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Registration and login with bcrypt password hashing and JWT-protected routes',
      'Wellness challenges that award points when completed',
      'Shop with plants grouped by rarity and fertiliser tools, with stock limits and a refresh timer',
      'A 20-plot garden: plant from your inventory, harvest after a cooldown, or “Harvest All”',
      'Inventory page and a top-10 leaderboard ranked by net worth',
      'REST API in an MVC structure (routes → controllers → models) over a MySQL schema of 10 tables',
    ],
    learned: [
      'How the front end, API routes, middleware and database fit together in one request',
      'Why passwords are hashed and how tokens keep routes protected',
      'Designing related tables for users, items and garden plots',
    ],
    challenges: [
      'GitHub Pages can only host static files, so the public demo uses a browser-only mock API that stores data in localStorage — the Express/MySQL back end stays in the repository',
    ],
    next: [
      'Deploy the real Node.js back end and database to a hosting service',
      'Add automated tests for the API routes',
      'Polish the mobile layout',
    ],
    demo: 'https://yingearnn.github.io/grow-a-garden-app/',
    repo: 'https://github.com/yingearnn/grow-a-garden-app',
    demoNote: 'Live demo runs in-browser with sample data — use a made-up username and password.',
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Ordering System',
    module: 'Database Systems',
    accent: 'Relational design · stored procedures · ORM',
    image: asset('images/projects/restaurant-products.webp'),
    gallery: [
      { src: asset('images/projects/restaurant-products.webp'), alt: 'Product list with categories, prices, availability and add-to-cart buttons' },
    ],
    imageAlt: 'Restaurant Ordering System — product list with prices, availability and add-to-cart buttons',
    summary:
      'An ordering application built to apply database concepts to a realistic scenario — members browse a menu, manage a cart, check out with discounts and delivery fees, and leave feedback.',
    tech: ['PostgreSQL', 'SQL', 'Prisma ORM', 'Node.js', 'Express.js', 'JavaScript', 'Bootstrap'],
    features: [
      'Relational schema for members, roles, products, orders, order items, carts, feedback and discount rules',
      'Cart management through Prisma ORM — one cart per member, and adding the same product again updates the quantity',
      'Checkout with quantity-based discounts, cart-value discounts and delivery-fee tiers stored as database rules, not hard-coded',
      'Order placement through a PostgreSQL stored procedure (place_orders)',
      'Product feedback and responses handled by stored procedures',
      'Query performance improvement using indexes, plus server-side checks on product availability and cart ownership',
    ],
    learned: [
      'How constraints such as unique keys and foreign keys protect data integrity',
      'When logic belongs in the database (stored procedures) versus the application',
      'Using an ORM alongside raw SQL in the same project',
    ],
    challenges: [
      'Keeping pricing rules flexible: storing discounts and delivery tiers in tables with an active flag so they can change without code changes',
      'The GitHub Pages demo simulates the database in the browser, so stored procedures and admin features can only be shown in the full local version',
    ],
    next: [
      'Host the PostgreSQL database so the live demo uses real data',
      'Add an admin view for managing menu items and discount rules',
      'Write tests for checkout calculations',
    ],
    demo: 'https://yingearnn.github.io/restaurant-ordering-system/',
    repo: 'https://github.com/yingearnn/restaurant-ordering-system',
    demoNote: 'Live demo runs in-browser with sample menu data and demo accounts.',
  },
]
