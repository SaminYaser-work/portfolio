// 1. Import utilities from `astro:content`
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {defineCollection, z} from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional().default(true),
    }),
});

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional().default(true),
        featured: z.boolean().default(false),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'blog': blogCollection,
    'project': projectCollection,
};