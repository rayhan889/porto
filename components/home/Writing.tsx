import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/.velite";
import { PostCard } from "../ui/PostCard";
import { Button } from "../ui/button";

const HIGHLIGHTED_WRITINGS = 3;

const writings = posts
  .slice(0, HIGHLIGHTED_WRITINGS)
  .filter((post) => post.published);

export const Writing = () => {
  return (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-foreground font-mono">
            Writing{" "}
            <span className="text-muted-foreground text-xs">
              ({writings.length})
            </span>
          </h2>
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

        {/* Footer Link Button */}
        <div className="w-full flex items-center justify-end">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="group w-full md:w-fit flex items-center gap-1.5 transition-all duration-300 hover:bg-accent/50 hover:shadow-sm"
          >
            <Link href="/writings">
              <ArrowUpRight
                size={20}
                className="text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-foreground"
              />
              <span className="transition-colors duration-300 group-hover:text-foreground">
                View All Writings
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
