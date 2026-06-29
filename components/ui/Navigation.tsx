"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CornerDownRight, Globe } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "/writings", label: "Writings" },
    { href: "/uses", label: "Uses" },
  ];

  return (
    <nav className="hidden xl:block xl:absolute top-24 left-24 z-50 ">
      <div className="max-w-6xl mx-2 px-4 py-4 h-auto flex flex-col gap-3 ">
        <Globe size={20} className="text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Menu</span>
        <ul className="flex gap-2 flex-col">
          {links.map((link) => (
            <li key={link.href} className="flex items-center gap-x-2">
              <CornerDownRight
                size={14}
                className="text-muted-foreground font-medium"
              />
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-accent-foreground hover:translate-x-2",
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
      </div>
    </nav>
  );
}
