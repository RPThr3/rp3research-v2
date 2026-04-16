import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['market-insight', 'case-study', 'product-build']),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readTime: z.number(),
    status: z.enum(['published', 'draft', 'coming-soon']).default('draft'),
  }),
});

const opinion = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['travel', 'brands', 'arts-entertainment']),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readTime: z.number(),
    status: z.enum(['published', 'draft', 'coming-soon']).default('draft'),
  }),
});

export const collections = { research, opinion };
