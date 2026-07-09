"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocSection {
  id: string;
  title: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export function TableOfContents({ sections }: Readonly<TableOfContentsProps>) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      },
    );

    const observed = new Set<string>();

    const observeAvailableSections = () => {
      sections.forEach(({ id }) => {
        if (observed.has(id)) return;
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observed.add(id);
        }
      });
    };

    observeAvailableSections();

    let mutationObserver: MutationObserver | null = null;
    if (observed.size < sections.length) {
      mutationObserver = new MutationObserver(() => {
        observeAvailableSections();
        if (observed.size === sections.length) {
          mutationObserver?.disconnect();
        }
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver?.disconnect();
    };
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (sections.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block xl:fixed top-24 right-24 z-50">
      <div className="space-y-1">
        <p className="mb-4 text-sm font-semibold">On this page</p>
        <ul className="space-y-2.5 border-l border-neutral-200 dark:border-neutral-800">
          {sections.map(({ id, title, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={cn(
                  "block border-l-2 text-sm py-1 pl-4 pr-2 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
                  activeId === id
                    ? "-ml-0.5 border-neutral-900 font-medium text-neutral-900 dark:border-neutral-100 dark:text-neutral-100"
                    : "border-transparent text-neutral-500 dark:text-neutral-400",
                  level === 2 ? "pl-4 text-sm" : level === 3 ? "pl-8" : "",
                )}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
