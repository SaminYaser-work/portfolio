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
    z
      .object({
        title: z.string(),
        tags: z.array(z.string()),
        image: image().optional(),
        description: z.string(),
        date: z.coerce.date(),
        ghUrl: z.string().optional(),
        bbUrl: z.string().optional(),
        wpUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        draft: z.boolean().optional().default(true),
        featured: z.boolean().default(false),
      })
      .refine((project) => project.ghUrl || project.bbUrl, {
        message: 'A GitHub or Bitbucket source URL is required',
      }),
})

export const collections = {
  blog: blogCollection,
  project: projectCollection,
}
