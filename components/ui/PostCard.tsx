import Link from "next/link";
import { formatDate } from "@/lib/date";

export interface PostCard {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export function PostCard({ post }: { post: PostCard }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group border border-muted rounded-lg p-4 flex flex-col space-y-2 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_4px_20px_-12px_rgba(255,255,255,0.1)]"
    >
      <time className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap transition-colors duration-300 group-hover:text-foreground/70">
        {formatDate(post.date)}
      </time>
      <h3 className="text-sm sm:text-base font-bold text-foreground">
        {post.title}
      </h3>
      <p className="text-sm sm:text-base text-foreground/90 leading-relaxed line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}
