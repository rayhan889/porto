"use client";

import dynamic from "next/dynamic";

const Stack = dynamic(() => import("./Stack").then((mod) => mod.Stack), {
  ssr: false,
  loading: () => (
    <section className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <h2 className="font-bold text-foreground">Stack</h2>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-fr">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square min-h-[100px] rounded-xl bg-muted/50"
            />
          ))}
        </div>
      </div>
    </section>
  ),
});

export function StackLoader() {
  return <Stack />;
}
