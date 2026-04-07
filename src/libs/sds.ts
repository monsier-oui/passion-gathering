import { getImage } from 'astro:assets'

import { type ImageMetadata } from 'astro'

const globbedImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/sd/*.png',
  {
    eager: true,
  }
)

const images = await Promise.all(
  Object.values(globbedImages).map(async (object) => {
    const { width, height } = object.default
    const { src } = await getImage({ src: object.default, format: 'webp' })

    return { src, width, height }
  })
)

export default images
