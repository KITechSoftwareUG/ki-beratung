import { Star } from 'lucide-react'

export type Testimonial = { quote: string; name: string; role: string }

/** Schema A, Beat 4 (funnel-narrativ): echte Kundenstimmen mit Zahl + Rolle.
 * Platzhalter-Zitate hier NIE als reale Aussage ausformulieren -- siehe
 * .claude/skills/funnel-narrativ/reference/bans.md. */
export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
      {items.map((t) => (
        <div key={t.name} className="flex gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
            aria-hidden="true"
          >
            {t.name
              .split(' ')
              .map((p) => p[0])
              .slice(0, 2)
              .join('')}
          </span>
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
              ))}
            </div>
            <p className="text-base font-medium leading-snug text-foreground">
              "{t.quote}" <span className="font-normal text-muted-foreground">— {t.name} / {t.role}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
