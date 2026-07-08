"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function GameEmbed() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)"); // Tailwind `lg`
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) return null;

  if (!isDesktop) {
    return (
      <div className="w-full flex flex-col items-center rounded-lg border bg-muted/30 p-6 text-center text-sm gap-y-2 text-muted-foreground">
        <Image
          src="/sword.png"
          alt="Sword Icon"
          width={30}
          height={30}
          className="grayscale"
        />
        This game runs on a larger screen. Open this page on a desktop or widen
        your browser window to play.
      </div>
    );
  }

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-black"
      style={{ aspectRatio: "800 / 550" }}
    >
      {isPlaying ? (
        <iframe
          src="/games/tale-of-samurai/index.html"
          title="Tale of Samurai"
          className="h-full w-full"
          loading="lazy"
          allow="autoplay; fullscreen"
        />
      ) : (
        <>
          <Image
            src="/games/tale-of-samurai/poster.webp"
            alt="Tale of samurai poster"
            fill
            className="opacity-50 transition-opacity duration-300 group-hover:opacity-100"
          />

          <Button
            variant="outline"
            className="z-10"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label="Play tale of samurai"
          >
            <Image src="/sword.png" alt="" width={20} height={20} />
            Click to Play
          </Button>
        </>
      )}
    </div>
  );
}
