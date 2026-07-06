"use client";

import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowUpRight, Mail, MailOpen } from "lucide-react";
import { useState } from "react";

const bricolageGrotesque = Bricolage_Grotesque({ weight: "700" });

export default function BioParagraph() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-end gap-2">
      <p
        className={`text-sm sm:text-base leading-relaxed text-foreground max-w-prose text-justify transition-all duration-300
          ${isExpanded ? "line-clamp-none" : "line-clamp-3 sm:line-clamp-none"}`}
      >
        I build modern, high-scalable and performance web apps with decent
        architecture. Currently studying as a computer science student at{" "}
        <Link
          href="https://unesa.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-transparent hover:border-current transition-colors duration-300"
        >
          State University of Surabaya (UNESA)
        </Link>{" "}
        and previously working as a backend engineer intern at{" "}
        <Link
          href="https://dot.co.id"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-transparent hover:border-current transition-colors duration-300"
        >
          DOT Indonesia
        </Link>
        .
      </p>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="ghost"
        className="sm:hidden text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
      >
        {isExpanded ? "See Less" : "See More"}
      </Button>
    </div>
  );
}

export const IntroSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10">
        <div className="flex flex-col md:flex-row relative items-start md:items-center gap-y-4 md:gap-x-5">
          <Badge className="flex md:hidden items-center gap-2 p-3 self-start">
            <div className="animate-pulse-glow" />
            <span className="font-medium text-foreground/90">Open to Work</span>
          </Badge>

          <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 w-full">
            <Image
              src="/profile_colored.png"
              alt="Pic of Me"
              width={80}
              height={80}
              quality={75}
              priority
              className="shrink-0 rounded-full object-cover grayscale transition-all duration-300 hover:grayscale-0 size-14 sm:size-16 md:size-20"
            />
            <div className="flex flex-col gap-y-0.5">
              <h3
                className={`tracking-tighter ${bricolageGrotesque.className} text-lg sm:text-xl md:text-2xl`}
              >
                Rayhan Hendra Atmadja
              </h3>
              <span className="text-sm sm:text-base md:text-lg text-foreground">
                Software Engineer & Architect
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                Surabaya, East Java, ID
              </span>
            </div>
          </div>

          <Badge className="hidden absolute top-0 right-0 md:flex items-center gap-2 p-3">
            <div className="animate-pulse-glow" />

            <span className="font-medium text-foreground/90">Open to Work</span>
          </Badge>
        </div>

        {/* Bio */}
        <BioParagraph />

        <div className="flex flex-col md:flex-row items-center gap-3 max-w-full">
          <Button
            variant="outline"
            size="lg"
            className="group w-full md:w-fit flex items-center gap-1.5 transition-all duration-300 hover:border-foreground/40 hover:bg-accent/50 hover:shadow-sm"
          >
            <ArrowUpRight
              size={20}
              className="text-muted-foreground transition-transform duration-300 ease-out group-hover:rotate-45 group-hover:text-foreground"
            />
            <span className="transition-colors duration-300 group-hover:text-foreground">
              LinkedIn
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group w-full md:w-fit flex items-center gap-1.5 transition-all duration-300 hover:border-foreground/40 hover:bg-accent/50 hover:shadow-sm"
          >
            <div className="relative h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              <Mail
                size={20}
                className="absolute inset-0.5 transition-all duration-300 ease-out scale-100 opacity-100 group-hover:scale-75 group-hover:opacity-0"
              />
              <MailOpen
                size={20}
                className="absolute inset-0.5 transition-all duration-300 ease-out scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
              />
            </div>
            <span className="transition-colors duration-300 group-hover:text-foreground">
              Email
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
