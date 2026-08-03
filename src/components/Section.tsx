import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  id?: string
  tone?: 'base' | 'surface' | 'inverted'
  maxW?: string
  className?: string
  /** Absolutely-positioned decorative element (e.g. a soft blurred accent
   * shape behind a hero). Switches the section to `relative overflow-hidden`. */
  decoration?: ReactNode
}

const TONE_BG: Record<NonNullable<SectionProps['tone']>, string> = {
  base: 'bg-background',
  surface: 'bg-surface',
  inverted: 'bg-accent',
}

/** One visual beat per section: alternating background tone plus generous
 * padding keeps sections clearly separated without borders or shadows.
 * `inverted` is the one deliberate high-contrast beat per page (e.g. the
 * closing CTA) -- solid accent fill, white text, used sparingly. */
export function Section({ children, id, tone = 'base', maxW = 'max-w-2xl', className = '', decoration }: SectionProps) {
  return (
    <section
      id={id}
      className={`${TONE_BG[tone]} px-6 py-20 sm:py-28 ${tone === 'inverted' ? 'text-accent-foreground' : ''} ${decoration ? 'relative overflow-hidden' : ''}`}
    >
      {decoration}
      <div className={`relative mx-auto ${maxW} ${className}`}>{children}</div>
    </section>
  )
}
