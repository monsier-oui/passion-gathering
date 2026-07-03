import { type ImageMetadata } from 'astro'

const globbedImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/sd/*.png',
  {
    eager: true,
  }
)

export default Object.values(globbedImages).map((object) => object.default)
