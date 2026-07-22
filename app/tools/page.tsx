import { type Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tools | Rayhan Atmadja",
    description: "Tools i used to optimize my development phase.",
  };
}

export default function ToolsPage() {
  const device = [
    {
      label: "Device",
      title: "MacBook Pro 14″",
      sub: "M4 · 16GB RAM · 512GB Memory · macOS (Tahoe)",
    },
    {
      label: "Editor",
      title: "Kiro",
      sub: "Jetbrains IDEs(Intellij, etc)",
    },
    {
      label: "Terminal",
      title: "Ghostty",
      sub: "GPU-accelerated",
    },
    {
      label: "Shell",
      title: "Zsh",
      sub: "Framework: Oh-my-zsh",
    },
  ];

  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col items-start space-y-2 mb-7">
        <h3 className={`tracking-tighter font-bold text-3xl`}>
          Day-to-day Sword and Shield
        </h3>
        <p className="text-sm leading-relaxed text-justify">
          The exact setup, stacks, and systems I rely on to turn ideas into
          functional products and maintain deep focus.
        </p>
      </div>

      <Image
        src="/workstation.png"
        alt="Workstation"
        width={0}
        height={0}
        loading="eager"
        sizes="(max-width: 768px) 100vw, 768px"
        className="my-6 h-full w-full rounded-lg border"
      />

      <div className="grid grid-cols-2 gap-3 mt-4">
        {device.map((item) => (
          <div
            key={item.label}
            className="border bg-background/60 backdrop-blur-sm transform-gpu border-muted rounded-lg p-4"
          >
            <span className="inline-flex items-center gap-1.5 py-1 rounded-md text-sm font-semiboldw-fit">
              {item.label}
            </span>
            <div className="font-semibold mt-2.5">{item.title}</div>
            <div className="text-sm text-muted-foreground mt-0.5">
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/60 rounded-lg px-5 py-4 mt-3.5">
        <span className="font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Latest update — Jul 2026
        </span>
        <p className="text-sm leading-relaxed text-accent-foreground mt-1.5">
          Switched from the default Terminal to Ghostty for GPU-accelerated
          rendering, then rebuilt the prompt on Oh-my-zsh for faster shell
          startup.
        </p>
      </div>
    </section>
  );
}
