type CtaButtonProps = {
  href: string
  children: string
  note?: string
  /** Use inside an inverted (accent-fill) section, where a solid-accent
   * button would disappear into its own background. */
  inverted?: boolean
}

/** The single conversion action on the page. Solid fill, no competing
 * secondary button -- weight, whitespace and a soft accent glow do the
 * work. `note` clearly marks placeholder booking/payment links. */
export function CtaButton({ href, children, note, inverted = false }: CtaButtonProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 sm:px-10 sm:py-5 sm:text-lg ${
          inverted ? 'bg-background text-accent' : 'shadow-accent bg-accent text-accent-foreground'
        }`}
      >
        {children}
      </a>
      {note ? <p className={`text-xs ${inverted ? 'text-accent-foreground/70' : 'text-muted-foreground'}`}>{note}</p> : null}
    </div>
  )
}
