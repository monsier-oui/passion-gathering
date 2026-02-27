import alpinejs from '@astrojs/alpinejs'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import remarkBreaks from 'remark-breaks'

// https://astro.build/config
export default defineConfig({
  site: 'https://passion-gathering.side.misskey.productions',
  server: {
    host: true,
  },
  image: {
    layout: 'constrained',
  },
  vite: {
    plugins: [tailwindcss()] as never,
  },
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
  integrations: [react(), alpinejs()],
  adapter: cloudflare(),
})
