import { format, parseISO, formatDistanceToNow, isValid } from 'date-fns'

export type DateFormat = 'full' | 'short' | 'relative'

/**
 * Format a date string in multiple formats
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @param formatType - Format type: 'full' (Jan 15, 2024), 'short' (01/15/24), 'relative' (2 days ago)
 * @returns Formatted date string or 'Invalid date' if parsing fails
 */
export function formatDate(
  dateString: string,
  formatType: DateFormat = 'full'
): string {
  try {
    const date = parseISO(dateString)
    
    // Handle invalid dates gracefully
    if (!isValid(date)) {
      return 'Invalid date'
    }
    
    switch (formatType) {
      case 'full':
        return format(date, 'MMM d, yyyy')
      case 'short':
        return format(date, 'MM/dd/yy')
      case 'relative':
        return formatDistanceToNow(date, { addSuffix: true })
      default:
        return format(date, 'MMM d, yyyy')
    }
  } catch (error) {
    // Handle any parsing errors gracefully
    return 'Invalid date'
  }
}
