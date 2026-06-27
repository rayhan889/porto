import { describe, it, expect } from 'vitest'
import { fc, test } from '@fast-check/vitest'
import { formatDate } from './date'

describe('formatDate', () => {
  describe('Unit Tests - Specific Examples', () => {
    it('formats date in full format by default', () => {
      expect(formatDate('2024-01-15')).toBe('Jan 15, 2024')
    })

    it('formats date in full format explicitly', () => {
      expect(formatDate('2024-01-15', 'full')).toBe('Jan 15, 2024')
    })

    it('formats date in short format', () => {
      expect(formatDate('2024-01-15', 'short')).toBe('01/15/24')
    })

    it('formats date in relative format', () => {
      const result = formatDate('2024-01-15', 'relative')
      // Relative format will vary based on current date, just check it contains expected words
      expect(result).toMatch(/ago|in/)
    })

    it('handles invalid date string gracefully', () => {
      expect(formatDate('not-a-date')).toBe('Invalid date')
    })

    it('handles invalid date string with format parameter', () => {
      expect(formatDate('invalid', 'short')).toBe('Invalid date')
    })

    it('handles empty string gracefully', () => {
      expect(formatDate('')).toBe('Invalid date')
    })

    it('handles malformed date gracefully', () => {
      expect(formatDate('2024-13-45')).toBe('Invalid date')
    })
  })

  describe('Property-Based Tests', () => {
    test.prop(
      [
        fc.integer({ min: 2000, max: 2099 }),
        fc.integer({ min: 1, max: 12 }),
        fc.integer({ min: 1, max: 28 }), // Use 28 to avoid invalid dates
      ],
      { numRuns: 100 }
    )(
      'valid ISO dates always produce formatted output (not "Invalid date")',
      (year, month, day) => {
        const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        const fullResult = formatDate(dateString, 'full')
        const shortResult = formatDate(dateString, 'short')
        const relativeResult = formatDate(dateString, 'relative')

        expect(fullResult).not.toBe('Invalid date')
        expect(shortResult).not.toBe('Invalid date')
        expect(relativeResult).not.toBe('Invalid date')
      }
    )

    test.prop(
      [
        fc.string().filter((s) => {
          // Generate strings that are definitely not valid ISO dates
          return !/^\d{4}-\d{2}-\d{2}/.test(s)
        }),
      ],
      { numRuns: 100 }
    )(
      'invalid date strings always return "Invalid date"',
      (invalidDateString) => {
        const fullResult = formatDate(invalidDateString, 'full')
        const shortResult = formatDate(invalidDateString, 'short')
        const relativeResult = formatDate(invalidDateString, 'relative')

        expect(fullResult).toBe('Invalid date')
        expect(shortResult).toBe('Invalid date')
        expect(relativeResult).toBe('Invalid date')
      }
    )

    test.prop(
      [
        fc.date({ min: new Date('2000-01-01'), max: new Date('2099-12-31') })
          .filter(d => !isNaN(d.getTime())),
      ],
      { numRuns: 100 }
    )(
      'full format always contains month abbreviation and year',
      (date) => {
        const dateString = date.toISOString().split('T')[0]
        const result = formatDate(dateString, 'full')

        // Full format should match pattern: "MMM d, yyyy" (e.g., "Jan 15, 2024")
        expect(result).toMatch(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/)
      }
    )

    test.prop(
      [
        fc.date({ min: new Date('2000-01-01'), max: new Date('2099-12-31') })
          .filter(d => !isNaN(d.getTime())),
      ],
      { numRuns: 100 }
    )(
      'short format always contains slashes and 2-digit year',
      (date) => {
        const dateString = date.toISOString().split('T')[0]
        const result = formatDate(dateString, 'short')

        // Short format should match pattern: "MM/dd/yy" (e.g., "01/15/24")
        expect(result).toMatch(/^\d{2}\/\d{2}\/\d{2}$/)
      }
    )

    test.prop(
      [
        fc.date({ min: new Date('2000-01-01'), max: new Date('2099-12-31') })
          .filter(d => !isNaN(d.getTime())),
      ],
      { numRuns: 100 }
    )(
      'relative format always contains temporal words',
      (date) => {
        const dateString = date.toISOString().split('T')[0]
        const result = formatDate(dateString, 'relative')

        // Relative format should contain words indicating time distance
        expect(result).toMatch(/ago|in|about|over|almost|less than|year|month|day|hour|minute|second/)
      }
    )

    test.prop(
      [
        fc.date({ min: new Date('2000-01-01'), max: new Date('2099-12-31') })
          .filter(d => !isNaN(d.getTime())),
        fc.constantFrom('full' as const, 'short' as const, 'relative' as const),
      ],
      { numRuns: 100 }
    )(
      'same date with same format always produces same output',
      (date, format) => {
        const dateString = date.toISOString().split('T')[0]
        const result1 = formatDate(dateString, format)
        const result2 = formatDate(dateString, format)

        expect(result1).toBe(result2)
      }
    )
  })
})
