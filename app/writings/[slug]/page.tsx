import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/.velite";
import { MDXContent } from "@/components/ui/MDXContent";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { formatDate } from "@/lib/date";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import Link from "next/link";

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug && p.published);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Writing | Rayhan Atmadja`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const pathSegments = ["writings", post.slug];

  return (
    <div className="w-full relative">
      <main>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const isLast = index === pathSegments.length - 1;

              const label = segment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <Fragment key={href}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={href}>{label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-10">
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="mt-3 text-muted-foreground">{post.description}</p>
        </div>

        <div className="flex gap-8 ">
          <article className="flex-1 min-w-0">
            <MDXContent code={post.body} />
          </article>
          <TableOfContents sections={post.toc} />
        </div>
      </main>
    </div>
  );
}
