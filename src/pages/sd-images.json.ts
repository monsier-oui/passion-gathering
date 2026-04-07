import type { APIRoute } from 'astro'

import images from '@/libs/sds'

export const GET = (() => {
  const urls = images
    .map(({ src }) => src)
    .filter((src) => !src.includes('50-ken'))

  return new Response(JSON.stringify(urls), {
    headers: { 'Content-Type': 'application/json' },
  })
}) satisfies APIRoute
