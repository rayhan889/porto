import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import { slugify, stripMarkdownInline } from "./lib/slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import readingTime from "reading-time";

function extractToc(raw: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: { id: string; title: string; level: 2 | 3 }[] = [];
  let match;
  while ((match = headingRegex.exec(raw)) !== null) {
    const level = match[1].length as 2 | 3;
    const title = stripMarkdownInline(match[2].trim());
    const id = slugify(title);
    toc.push({ id, title, level });
  }
  return toc;
}

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
      raw: s.raw(),
      readingTime: s.string().optional(),
    })
    .transform((data) => {
      const slug = data.slug.replace(/^blog\//, "");
      const toc = extractToc(data.raw);

      const stats = readingTime(data.raw);
      return {
        ...data,
        slug,
        permalink: `/writings/${slug}`,
        toc,
        raw: undefined,
        readingTime: stats.text,
      };
    }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "dark-plus" },
          keepBackground: true,
          filterMetaString: (meta: number) => `${meta} showLineNumbers`,
        },
      ],
      rehypeKatex,
    ],
    remarkPlugins: [remarkMath],
  },
});
