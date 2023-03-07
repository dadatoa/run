import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.enum(["Astro Learner", "toto"]),
        draft: z.boolean(),
    }),
});

export const collections = { blog };
