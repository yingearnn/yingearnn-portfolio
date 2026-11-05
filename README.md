# Chay Ying En — Portfolio

Personal portfolio for **Chay Ying En**, Diploma in Information Technology (AI & Analytics) student at Singapore Polytechnic.

**Live site:** https://yingearnn.github.io/yingearnn-portfolio/

Built with React, Vite, Tailwind CSS, Motion and Lucide icons. It is a fully static site — no backend, no API keys, no paid hosting.

---

## 1. Resume (included)

The latest one-page AI & Analytics internship resume is included at:

```
public/resume/Chay_Ying_En_Resume.pdf
```

The “Download Resume” buttons use this file. To update the resume in future, replace that PDF while keeping the filename unchanged.

---

## 2. Run it locally in VS Code

You need **Node.js 20.19 or newer** (22 LTS recommended) — download it from https://nodejs.org.

1. Extract the ZIP and open the `yingearnn-portfolio` folder in VS Code (**File → Open Folder…**).
2. Open the terminal (**Terminal → New Terminal**).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the link shown in the terminal — usually http://localhost:5173/yingearnn-portfolio/

To test the production build locally:

```bash
npm run build
npm run preview
```

---

## 3. Deploy to GitHub Pages (free)

1. On GitHub, create a **new public repository** named exactly **`yingearnn-portfolio`** (do not add a README, .gitignore or licence).
2. In the VS Code terminal, inside the project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yingearnn/yingearnn-portfolio.git
   git push -u origin main
   ```
3. In the repository on GitHub go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open the **Actions** tab. The *Deploy portfolio to GitHub Pages* workflow runs on every push to `main`. (If it ran before you changed the Pages source and failed, click it and choose **Re-run all jobs**.)
5. When it shows a green tick, the site is live at https://yingearnn.github.io/yingearnn-portfolio/

After that, any change you push to `main` redeploys automatically:

```bash
git add .
git commit -m "Update portfolio"
git push
```

> **Using a different repository name?** Change `base` in `vite.config.js` to `'/<your-repo-name>/'`.

---

## 4. Editing content

All text lives in `src/data/` so you rarely need to touch the components:

| File | What it controls |
| --- | --- |
| `src/data/profile.js` | Name, links, email, rotating hero roles, navigation |
| `src/data/projects.js` | All three projects — descriptions, charts, features, links |
| `src/data/content.js` | Skills, learning journey, work experience, awards, internship goals |

Images are in `public/images/projects/`. To link a repository for the data analytics project, set `repo` in `featuredProject` (`src/data/projects.js`).

---

## Project structure

```
yingearnn-portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages build & deploy
├── public/
│   ├── images/projects/           # charts and app screenshots
│   ├── resume/                    # Chay_Ying_En_Resume.pdf included
│   └── favicon.svg
├── src/
│   ├── components/                # Navbar, buttons, badges, canvas background, lightbox…
│   ├── sections/                  # Hero, About, Projects, Skills, Journey, …, Contact
│   ├── data/                      # all editable content
│   ├── styles/index.css           # Tailwind + navy/sky design tokens
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js                 # base: '/yingearnn-portfolio/'
```

## Notes

- Single-page, section-based navigation — no router, so refreshing never causes a GitHub Pages 404.
- Animations respect the visitor's *reduce motion* setting.
- Fonts load from Google Fonts; if blocked, the site falls back to system fonts.
