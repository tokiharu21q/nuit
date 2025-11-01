import { defineCollection, z } from 'astro:content';

const diary = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

const diary202509 = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  diary,
  '202509': diary202509,
  photos,
};
