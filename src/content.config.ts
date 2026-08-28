import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        link: z.string().url().optional(),
        linkLabel: z.string().optional().default("Visit"),
        repo: z.string().url().optional(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = { writing, projects };
