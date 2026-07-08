"use client";

import {
  type ComponentType,
  type HTMLAttributes,
  type ReactNode,
  isValidElement,
  useState,
  useEffect,
  useRef,
} from "react";
import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { slugify } from "@/lib/slug";

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (isValidElement(node)) {
    return getTextContent((node.props as { children?: ReactNode }).children);
  }
  return "";
}

interface MDXContentProps {
  code: string;
  className?: string;
}

type MDXComponent = ComponentType<{
  components?: Record<string, ComponentType<HTMLAttributes<HTMLElement>>>;
}>;

function useMDXComponent(code: string): MDXComponent | null {
  const [Component, setComponent] = useState<MDXComponent | null>(null);

  useEffect(() => {
    if (!code) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setComponent(null);
      return;
    }
    try {
      const fn = new Function("runtime", code);
      const mdxModule = fn(runtime);
      setComponent(() => mdxModule.default as MDXComponent);
    } catch {
      setComponent(null);
    }
  }, [code]);

  return Component;
}

function Pre({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = ref.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-2 top-2 rounded-md border bg-background/70 p-1.5 opacity-0 backdrop-blur transform-gpu transition group-hover:opacity-100 focus-visible:opacity-100"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      <pre
        ref={ref}
        className={cn("overflow-x-auto rounded-lg border text-sm", className)}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}

const overrides: Record<string, ComponentType<HTMLAttributes<HTMLElement>>> = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(getTextContent(children));
    return (
      <h2
        id={id}
        className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className="scroll-m-20 text-base font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h6>
  ),
  img: ({
    src,
    alt,
  }: HTMLAttributes<HTMLImageElement> & { src?: string; alt?: string }) => {
    if (typeof src !== "string" || src.length === 0) return null;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 768px"
        className="my-6 h-auto w-full rounded-lg border"
      />
    );
  },
  pre: (props: HTMLAttributes<HTMLPreElement>) => <Pre {...props} />,
  code: ({
    children,
    className,
    ...props
  }: HTMLAttributes<HTMLElement> & { className?: string }) => {
    if ("data-language" in props) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className={cn(
          "relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-neutral-800",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
  a: ({ children, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-medium underline underline-offset-4" {...props}>
      {children}
    </a>
  ),
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({ children, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-2 border-neutral-300 pl-6 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
};

export function MDXContent({ code, className }: MDXContentProps) {
  const Component = useMDXComponent(code);

  if (!Component) {
    return null;
  }

  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className,
      )}
    >
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Component components={overrides} />
    </div>
  );
}
