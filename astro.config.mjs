// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import { toString as mdastToString } from "mdast-util-to-string";
import readingTime from "reading-time";

function remarkReadingTime() {
    return function (tree, { data }) {
        const text = mdastToString(tree);
        const stats = readingTime(text);
        data.astro.frontmatter.readingTime = Math.max(1, Math.round(stats.minutes));
    };
}

// https://astro.build/config
export default defineConfig({
    site: "https://aslakhellevik.no",
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
            wrap: true,
        },
        remarkPlugins: [remarkReadingTime, remarkMath],
        rehypePlugins: [
            rehypeKatex,
            [
                rehypeExternalLinks,
                { target: "_blank", rel: ["noopener"] },
            ],
        ],
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
