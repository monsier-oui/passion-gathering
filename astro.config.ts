import alpinejs from '@astrojs/alpinejs'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import remarkBreaks from 'remark-breaks'

// https://astro.build/config
export default defineConfig({
  site: 'https://passion-gathering.side.misskey.productions',
  output: 'static',
  server: {
    host: true,
  },
  image: {
    layout: 'constrained',
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    plugins: [tailwindcss()] as never,
  },
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  integrations: [react(), alpinejs()],
})
