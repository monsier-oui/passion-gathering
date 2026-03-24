import type { APIRoute } from 'astro'

const modules = import.meta.glob<{ default: { src: string } }>(
  '/src/images/sd/*.png',
  {
    eager: true,
  }
)

const urls = Object.values(modules)
  .filter((m) => !m?.default?.src.includes('50-ken'))
  .map((m) => m.default.src)

export const GET = (() => {
  return new Response(JSON.stringify(urls), {
    headers: { 'Content-Type': 'application/json' },
  })
}) satisfies APIRoute
