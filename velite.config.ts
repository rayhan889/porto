import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import { slugify, stripMarkdownInline } from "./lib/slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function extractToc(raw: string) {
  const headingRegex = /^##\s+(.+)$/gm;
  const toc: { id: string; title: string }[] = [];
  let match;
  while ((match = headingRegex.exec(raw)) !== null) {
    const title = stripMarkdownInline(match[1].trim());
    const id = slugify(title);
    toc.push({ id, title });
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
    })
    .transform((data) => {
      const slug = data.slug.replace(/^blog\//, "");
      const toc = extractToc(data.raw);
      console.log(toc);
      return {
        ...data,
        slug,
        permalink: `/blog/${slug}`,
        toc,
        raw: undefined,
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
