'use client'

import { useMemo, type ComponentType, type HTMLAttributes, type ReactNode } from 'react'
import * as runtime from 'react/jsx-runtime'
import { cn } from '@/lib/utils'

interface MDXContentProps {
  code: string
  className?: string
}

type MDXComponent = ComponentType<{ components?: Record<string, ComponentType<any>> }>

function useMDXComponent(code: string): MDXComponent | null {
  return useMemo(() => {
    if (!code) return null
    try {
      const fn = new Function('runtime', code)
      const mdxModule = fn(runtime)
      return mdxModule.default as MDXComponent
    } catch {
      return null
    }
  }, [code])
}

const overrides: Record<string, ComponentType<any>> = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props}>
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
    <h6 className="scroll-m-20 text-base font-semibold tracking-tight" {...props}>
      {children}
    </h6>
  ),
  pre: ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre className="overflow-x-auto rounded-lg border p-4 text-sm" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }: HTMLAttributes<HTMLElement> & { className?: string }) => (
    <code
      className={cn(
        'relative rounded bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
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
    <blockquote className="mt-6 border-l-2 border-neutral-300 pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),
}

export function MDXContent({ code, className }: MDXContentProps) {
  const Component = useMDXComponent(code)

  if (!Component) {
    return null
  }

  return (
    <div className={cn('prose prose-neutral dark:prose-invert max-w-none', className)}>
      <Component components={overrides} />
    </div>
  )
}
