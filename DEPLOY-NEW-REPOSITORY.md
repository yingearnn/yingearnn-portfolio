# Deploy updated portfolio to GitHub Pages

This project is already configured for the repository `yingearnn/yingearnn-portfolio`.

## First-time deployment to a NEW repository
1. Create a **public** GitHub repository named `yingearnn-portfolio` at https://github.com/new. Leave README, .gitignore, and license unchecked.
2. Extract this ZIP and open the `yingearnn-portfolio` folder in VS Code.
3. Run these commands in its terminal:

```bash
git init
git branch -M main
git add .
git commit -m "Deploy updated portfolio"
git remote add origin https://github.com/yingearnn/yingearnn-portfolio.git
git push -u origin main
```

4. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open the **Actions** tab and confirm the workflow **Deploy portfolio to GitHub Pages** succeeds.
6. Open https://yingearnn.github.io/yingearnn-portfolio/

## Updating an EXISTING `yingearnn-portfolio` repository
If that repository already exists, **do not use `git init` or create another repository**. Copy the updated extracted files into your existing local repository (keep its hidden `.git` folder), then run:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Notes
- GitHub Actions builds the React/Vite application with `npm ci` and `npm run build`, then deploys `dist`.
- No backend or database hosting is needed.
- `vite.config.js` has the base path `/yingearnn-portfolio/`. If you use a different repository name, update this path.
- If Actions fails, open the failed run and inspect the log.
