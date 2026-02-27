import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const news = defineCollection({
  loader: glob({
    pattern: ['**/*.md'],
    base: './src/content/news',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
})

export const collections = {
  news,
}
