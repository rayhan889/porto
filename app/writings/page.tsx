import { type Metadata } from "next";
import { posts } from "@/.velite";
import { PostCard } from "@/components/ui/PostCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Writings | Rayhan Atmadja",
    description: "All my writings, notes, and long-form thoughts.",
  };
}

const writings = posts.filter((post) => post.published);

export default function WritingsPage() {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col items-start space-y-2 mb-7">
        <h3 className="tracking-tighter font-bold text-3xl">
          Pouring What&apos;s In My Head To These Writings
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-justify">
          Notes and long-form thoughts on the things I&apos;m building or
          learning.
        </p>
      </div>

      <div className="flex flex-col space-y-3">
        {writings.map((post) => (
          <PostCard
            key={post.slug}
            post={{
              slug: post.slug,
              title: post.title,
              description: post.description,
              date: post.date,
            }}
          />
        ))}
      </div>
    </section>
  );
}
