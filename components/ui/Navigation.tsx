"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpenText,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Laptop,
  User,
} from "lucide-react";
import { useTimeResolutionStore } from "@/store/useTimeResolutionStore";
import { useWorkCount } from "@/store/selectors";

const pathnameToIcon: Record<string, React.ElementType> = {
  "/": Globe,
  "/about": User,
  "/projects": Briefcase,
  "/writings": BookOpenText,
  "/tools": Laptop,
};

function formatMenuNumber(index: number): string {
  return `${String(index + 1).padStart(2, "0")}.`;
}

function getIconForPathname(pathname: string): React.ElementType {
  if (pathnameToIcon[pathname]) {
    return pathnameToIcon[pathname];
  }

  const matchedPath = Object.keys(pathnameToIcon)
    .filter((path) => path !== "/")
    .sort((a, b) => b.length - a.length)
    .find((path) => pathname.startsWith(`${path}/`));

  return matchedPath ? pathnameToIcon[matchedPath] : Globe;
}

function NavIcon({
  pathname,
  size,
  className,
}: {
  pathname: string;
  size?: number;
  className?: string;
}) {
  const IconComponent = getIconForPathname(pathname);
  // eslint-disable-next-line react-hooks/static-components
  return <IconComponent size={size} className={className} />;
}

export function Navigation() {
  const pathname = usePathname();

  const workCount = useWorkCount();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { time, resolution, updateTime, updateResolution } =
    useTimeResolutionStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    updateTime();
    updateResolution();

    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener("resize", updateResolution);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("resize", updateResolution);
    };
  }, [updateTime, updateResolution]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  if (!isMounted) {
    return null;
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: `Works (${workCount})` },
    { href: "/writings", label: "Writings" },
    { href: "/tools", label: "Tools" },
  ];

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 gap-4 flex items-center justify-between p-4 bg-background border-b ">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <ChevronLeft size={24} />
          ) : (
            <ChevronRight size={24} />
          )}
        </button>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-mono">{time}</span>
          {"|"}
          <span className="font-mono">{resolution}</span>
        </div>
      </header>

      {isMobileMenuOpen && (
        <nav className="xl:hidden fixed inset-0 top-[65px] z-40 bg-background flex flex-col p-6 space-y-24 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex gap-6 flex-col mt-4">
            {links.map((link, index) => (
              <li key={link.href} className="flex items-center gap-x-3">
                <span className="text-xl font-mono font-medium text-muted-foreground">
                  {formatMenuNumber(index)}
                </span>
                <Link
                  href={link.href}
                  className={cn(
                    "text-xl font-medium transition-all hover:text-accent-foreground",
                    link.href === pathname
                      ? "text-white"
                      : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-semibold order-last">
              @rynrama_
            </h3>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Rayhan Hendra Atmadja. <br />{" "}
              All rights reserved.
            </p>
          </div>
        </nav>
      )}

      <nav className="hidden lg:block lg:fixed top-24 left-24 z-50">
        <div className="max-w-6xl mx-2 px-4 py-4 h-auto flex flex-col gap-3">
          <NavIcon
            pathname={pathname}
            size={20}
            className="text-muted-foreground"
          />
          <span className="font-medium text-muted-foreground">Menu</span>
          <ul className="flex gap-2 flex-col">
            {links.map((link, index) => {
              return (
                <li key={link.href} className="flex items-center gap-x-2">
                  <span className="font-mono font-medium text-muted-foreground">
                    {formatMenuNumber(index)}
                  </span>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-medium transition-all hover:text-accent-foreground hover:translate-x-2",
                      link.href === pathname
                        ? "text-white"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
