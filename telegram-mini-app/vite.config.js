import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  server: { allowedHosts: 'all' },
    allowedHosts: ["statement-negotiations-grande-able.trycloudflare.com"],
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
