import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { GameEmbedLoader } from "./GameEmbedLoader";

const description =
  "A turn-based pixel-art samurai battle game, written in Python with pygame and compiled to WebAssembly via pygbag.";

export const metadata: Metadata = {
  // The root layout's title template appends " | Rayhan Atmadja".
  title: "Tale of Samurai | Projects",
  description,
  alternates: {
    canonical: "/projects/tale-of-samurai",
  },
  openGraph: {
    type: "website",
    url: "/projects/tale-of-samurai",
    title: "Tale of Samurai",
    description,
  },
};

export default function TaleOfSamuraiPage() {
  return (
    <div className="w-full relative">
      <main>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/projects">Work</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tale of Samurai</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="my-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Tale of Samurai
          </h1>
          <p className="mt-3 text-muted-foreground">
            Turn-based samurai themed game inspired by the old school Pokemon
            game model. Players take on the role of a samurai and get the first
            turn to attack two enemies, who are devils (which called yorei and
            gotoku in this game). This game is compiled to WebAssembly with
            pygbag and running natively in browser.
          </p>
        </div>

        <GameEmbedLoader />
      </main>
    </div>
  );
}
