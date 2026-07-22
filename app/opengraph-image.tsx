import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "@/lib/site";

export const alt = `${siteName} — personal site`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#a1a1aa",
              lineHeight: 1.4,
              maxWidth: "820px",
            }}
          >
            {siteDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              backgroundColor: "rgb(173, 109, 244)",
            }}
          />
          rynrama.com
        </div>
      </div>
    ),
    size
  );
}
