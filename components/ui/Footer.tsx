"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socials: { name: string; url: string }[] = [
  {
    name: "Resume",
    url: "https://www.papermark.com/view/cmrc9mu99000nl404bcnp0wvx",
  },
  {
    name: "GitHub",
    url: "https://github.com/rayhan889",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rayhan-atmadja/",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-accent mt-16 sm:mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:gap-6">
          <div className="flex items-center gap-3 w-full justify-center md:justify-start">
            {socials.map((social, i) => (
              <div key={i} className="flex items-center gap-3">
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`social${social.name}`}
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
                >
                  {social.name}
                </Link>
                {i < socials.length - 1 && <div className="circle-divider" />}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
            <p className="tracking-tight text-sm sm:text-base text-balance max-w-sm mx-auto sm:mx-0">
              Focused on scalability, clean architecture, and developer
              experience
            </p>
            <Link
              href="https://www.instagram.com/rynrama_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on Instagram"
              className="text-xl sm:text-2xl font-semibold order-first sm:order-last border-b border-transparent hover:border-current transition-colors duration-300"
            >
              @rynrama_
            </Link>
          </div>
          <hr className="border-accent/40 sm:hidden" />
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Rayhan Hendra Atmadja. All
              rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group text-sm gap-1.5 cursor-pointer flex items-center justify-center sm:justify-start text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Scroll to top
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
