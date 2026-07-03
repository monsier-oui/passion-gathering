import { getImage } from 'astro:assets'

import type { APIRoute } from 'astro'

import images from '@/libs/sds'

export const GET: APIRoute = async () => {
  const urls = await Promise.all(
    images
      .filter((image) => !image.src.includes('50-ken'))
      .map(
        async (image) => (await getImage({ src: image, format: 'webp' })).src
      )
  )

  return new Response(JSON.stringify(urls), {
    headers: { 'Content-Type': 'application/json' },
  })
}
