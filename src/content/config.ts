import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    katex: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
