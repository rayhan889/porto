import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from '../PostCard'

describe('PostCard Component', () => {
  const mockPost = {
    slug: 'test-post',
    title: 'Test Blog Post',
    description: 'This is a test description for the blog post',
    date: '2024-01-15',
  }

  it('displays post title, date, and description', () => {
    render(<PostCard post={mockPost} />)
    
    // Requirement 9.2: Display title, date, and description
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()
    expect(screen.getByText('This is a test description for the blog post')).toBeInTheDocument()
    expect(screen.getByText('Jan 15, 2024')).toBeInTheDocument()
  })

  it('renders as a link to the individual post page', () => {
    render(<PostCard post={mockPost} />)
    
    // Requirement 9.5: Link to individual post pages
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/test-post')
  })

  it('applies hover effects with transition classes', () => {
    render(<PostCard post={mockPost} />)
    
    // Requirement 9.4: Apply hover effects and consistent styling
    const link = screen.getByRole('link')
    expect(link).toHaveClass('hover:border-gray-400')
    expect(link).toHaveClass('transition-colors')
  })

  it('uses consistent styling with border and rounded corners', () => {
    render(<PostCard post={mockPost} />)
    
    // Requirement 9.4: Consistent styling
    const link = screen.getByRole('link')
    expect(link).toHaveClass('border')
    expect(link).toHaveClass('border-gray-200')
    expect(link).toHaveClass('rounded-lg')
    expect(link).toHaveClass('p-6')
  })

  it('formats the date using formatDate utility', () => {
    render(<PostCard post={mockPost} />)
    
    // Verify formatDate is used correctly (default 'full' format)
    const timeElement = screen.getByText('Jan 15, 2024')
    expect(timeElement.tagName).toBe('TIME')
  })

  it('truncates long descriptions with line-clamp', () => {
    const longPost = {
      ...mockPost,
      description: 'This is a very long description that should be truncated to two lines using the line-clamp utility class from TailwindCSS',
    }
    
    render(<PostCard post={longPost} />)
    
    const description = screen.getByText(longPost.description)
    expect(description).toHaveClass('line-clamp-2')
  })
})
