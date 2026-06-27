import Link from 'next/link'
import { formatDate } from '@/lib/date'

interface PostCardProps {
  post: {
    slug: string
    title: string
    description: string
    date: string
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="block p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
    >
      <time className="text-sm text-gray-500">
        {formatDate(post.date)}
      </time>
      <h2 className="text-2xl font-semibold mt-2 mb-3">
        {post.title}
      </h2>
      <p className="text-gray-600 line-clamp-2">
        {post.description}
      </p>
    </Link>
  )
}
