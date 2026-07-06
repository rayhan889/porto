import { posts } from "@/.velite";
import { PostCard } from "../ui/PostCard";

const writings = posts.filter((post) => post.published);

export const Writing = () => {
  return (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <div>
          <h2 className="font-bold text-foreground">
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
      </div>
    </section>
  );
};
