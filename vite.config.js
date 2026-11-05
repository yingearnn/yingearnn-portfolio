import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is served from https://yingearnn.github.io/yingearnn-portfolio/
// so every asset must resolve under this sub-path.
export default defineConfig({
  base: '/yingearnn-portfolio/',
  plugins: [react(), tailwindcss()],
})
