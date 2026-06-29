"use client";

import React, { useEffect, useRef, useState } from "react";
import { JavaIcon } from "../icon/JavaIcon";
import { SpringIcon } from "../icon/SpringIcon";
import { GoIcon } from "../icon/GoIcon";
import { DockerIcon } from "../icon/DockerIcon";
import { KafkaIcon } from "../icon/KafkaIcon";
import { PostgresIcon } from "../icon/PostgresIcon";
import { GrafanaIcon } from "../icon/GrafanaIcon";
import { TypescriptIcon } from "../icon/NextJSIcon";
import { PythonIcon } from "../icon/PythonIcon";
import { RedisIcon } from "../icon/RedisIcon";
import { ReactIcon } from "../icon/ReactIcon";
import Link from "next/link";

const STAGGER_MS = 45;

interface StackItem {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const stacks: StackItem[] = [
  { title: "Go", icon: GoIcon, link: "https://go.dev/" },
  {
    title: "Springboot",
    icon: SpringIcon,
    link: "https://spring.io/projects/spring-boot",
  },
  { title: "Docker", icon: DockerIcon, link: "https://www.docker.com/" },
  {
    title: "Postgres",
    icon: PostgresIcon,
    link: "https://www.postgresql.org/",
  },
  { title: "Grafana", icon: GrafanaIcon, link: "https://grafana.com/" },
  {
    title: "Typescript",
    icon: TypescriptIcon,
    link: "https://www.typescriptlang.org/",
  },
  { title: "Python", icon: PythonIcon, link: "https://www.python.org/" },
  { title: "Redis", icon: RedisIcon, link: "https://redis.io/" },
  { title: "React", icon: ReactIcon, link: "https://react.dev/" },
];

export const Stack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const getBentoClasses = (index: number) => {
    const desktopPatterns = [
      "lg:col-span-2",
      "",
      "",
      "",
      "",
      "lg:col-span-2",
      "",
      "lg:col-span-2",
      "",
    ];
    return desktopPatterns[index % desktopPatterns.length] || "";
  };

  return (
    <section ref={sectionRef} className="w-full mt-10">
      <div className="flex flex-col space-y-6">
        <div className="flex items-baseline gap-2">
          <h2
            className={`
            font-bold text-foreground transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          >
            Stack
          </h2>
          <span
            className={`
            text-muted-foreground text-xs font-normal transition-all duration-700 ease-out delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          >
            ({stacks.length})
          </span>
        </div>

        <div
          className="
          grid gap-3
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4
          auto-rows-fr
        "
        >
          {stacks.map((item, i) => {
            const Icon = item.icon;
            const bentoClasses = getBentoClasses(i);
            const isFeatured =
              bentoClasses.includes("col-span-2") ||
              bentoClasses.includes("row-span-2");

            return (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={`
                group flex flex-col items-center justify-center gap-2 p-4 aspect-square
                bg-muted/50 rounded-xl border border-transparent
                hover:-translate-y-1
                hover:border-border/50 hover:bg-background/80 hover:shadow-lg hover:shadow-muted/20
                transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                cursor-default active:scale-[0.98]
                min-h-[100px] sm:min-h-[110px] md:min-h-[120px]
                backdrop-blur-sm
                will-change-transform
                ${bentoClasses}
                lg:aspect-auto
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }
              `}
                style={{
                  transitionDelay: isVisible
                    ? `${i * STAGGER_MS + 200}ms`
                    : "0ms",
                  transitionDuration: "600ms",
                }}
              >
                {/* Icon Layout Container */}
                <div
                  className="
                  transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                  group-hover:scale-125 group-hover:rotate-[-2deg]
                  group-active:scale-110
                  relative
                  transform-gpu
                  /* 1. FORCE GRAYSCALE TO REVERT ON HOVER */
                  grayscale group-hover:grayscale-0 contrast-[0.85] group-hover:contrast-100
                "
                >
                  {/* Glowing Back-drop layer */}
                  <div
                    className="
                    absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md
                    scale-150 transform-gpu
                  "
                  />
                  <Icon
                    className={`
                    relative z-10 shrink-0
                    /* Subtle opacity shift for muted baseline harmony */
                    opacity-75 group-hover:opacity-100
                    transition-all duration-300
                    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
                    ${isFeatured ? "lg:w-10 lg:h-10 xl:w-12 xl:h-12" : "lg:w-8 lg:h-8"}
                    transform-gpu
                  `}
                  />
                </div>

                <span
                  className={`
                  text-muted-foreground text-center leading-tight 
                  group-hover:text-foreground group-hover:font-medium
                  transition-all duration-300 px-1
                  transform group-hover:-translate-y-0.5
                  text-xs sm:text-sm
                  ${isFeatured ? "lg:text-sm lg:font-medium" : "lg:text-xs"}
                  transform-gpu
                `}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
