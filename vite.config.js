import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  
  resolve: {
    alias: {
      '@': normalizePath(fileURLToPath(new URL('./src', import.meta.url)))
    }
  },
})

function normalizePath(p) {
  return p.replace(/\\/g, '/'); // Replace backslashes with forward slashes
}