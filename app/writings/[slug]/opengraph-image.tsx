import { ImageResponse } from "next/og";
import { posts } from "@/.velite";
import { formatDate } from "@/lib/date";
import { siteName } from "@/lib/site";

export const alt = "Writing by Rayhan Atmadja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.published);

  const title = post?.title ?? "Writing";
  const date = post ? formatDate(post.date) : "";
  const readingTime = post?.readingTime ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(600px circle at 15% 20%, rgba(173, 109, 244, 0.28), transparent 70%), radial-gradient(520px circle at 88% 82%, rgba(173, 109, 244, 0.18), transparent 70%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgb(173, 109, 244)",
          }}
        >
          Writing
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 62 : 76,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: "960px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          <div style={{ display: "flex" }}>{siteName}</div>
          {date ? <div style={{ display: "flex" }}>·</div> : null}
          {date ? <div style={{ display: "flex" }}>{date}</div> : null}
          {readingTime ? <div style={{ display: "flex" }}>·</div> : null}
          {readingTime ? (
            <div style={{ display: "flex" }}>{readingTime}</div>
          ) : null}
        </div>
      </div>
    ),
    size
  );
}
