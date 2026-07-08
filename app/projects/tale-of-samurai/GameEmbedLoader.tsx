"use client";

import dynamic from "next/dynamic";

const GameEmbed = dynamic(
  () => import("./GameEmbed").then((mod) => mod.GameEmbed),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full overflow-hidden rounded-lg border bg-muted/30"
        style={{ aspectRatio: "800 / 550" }}
      />
    ),
  },
);

export function GameEmbedLoader() {
  return <GameEmbed />;
}
