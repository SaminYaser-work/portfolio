import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: image().optional(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional().default(true),
    }),
})

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      image: image().optional(),
      description: z.string(),
      date: z.coerce.date(),
      ghUrl: z.string(),
      liveUrl: z.string().optional(),
      draft: z.boolean().optional().default(true),
      featured: z.boolean().default(false),
    }),
})

export const collections = {
  blog: blogCollection,
  project: projectCollection,
}
