import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE } from "../consts";

export async function GET(context: APIContext) {
    const posts = (await getCollection("writing", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
    );

    return rss({
        title: `${SITE.name} — Writing`,
        description: SITE.description,
        site: context.site ?? SITE.url,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/writing/${post.id}/`,
        })),
    });
}
