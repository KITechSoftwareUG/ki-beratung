import { useEffect } from 'react'
import { Section } from '../components/Section'
import { CtaButton } from '../components/CtaButton'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { RotatingWord } from '../components/RotatingWord'
import { Reveal } from '../components/Reveal'
import { TestimonialGrid } from '../components/TestimonialGrid'
import { initReveals } from '../lib/reveal'
import {
  ROTATING_WORDS,
  HERO,
  PATTERN_INTERRUPT,
  TESTIMONIALS,
  PROBLEM,
  SOLUTION,
  ABOUT,
  RESULTS,
  FINAL,
  CTA_LABEL,
  BOOKING_LINK_PLACEHOLDER,
} from '../data/infrastruktur'

export default function Infrastruktur() {
  useEffect(() => initReveals(), [])

  return (
    <>
      {/* Section 1 -- Hero */}
      <Section
        maxW="max-w-3xl"
        className="pt-24 sm:pt-32"
        decoration={
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        }
      >
        <h1 className="text-hero text-balance font-extrabold text-foreground">
          KI ohne Zugriff ist nur <RotatingWord words={ROTATING_WORDS} />.
        </h1>
        <p className="text-pretty mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">{HERO.sub}</p>
        <div className="mt-10">
          <CtaButton href={BOOKING_LINK_PLACEHOLDER} note="Platzhalter-Link — wird durch deinen Terminbuchungslink ersetzt.">
            {CTA_LABEL}
          </CtaButton>
        </div>
      </Section>

      {/* Section 2 -- Pattern-Interrupt (funnel-narrativ Schema A, Beat 2) */}
      <Section tone="surface" maxW="max-w-2xl">
        <Reveal>
          <h2 className="text-balance text-2xl font-extrabold text-foreground sm:text-3xl">{PATTERN_INTERRUPT.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-pretty mt-5 text-lg text-muted-foreground">{PATTERN_INTERRUPT.body}</p>
        </Reveal>
      </Section>

      {/* Section 3 -- Das Problem (Erwartung vs. Realitaet) */}
      <Section>
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">{PROBLEM.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-pretty mt-5 text-lg text-muted-foreground">{PROBLEM.intro}</p>
        </Reveal>
        <ul className="mt-8 flex flex-col gap-4">
          {PROBLEM.bullets.map((b, i) => (
            <Reveal key={b} delay={0.08 + i * 0.04}>
              <li className="flex items-start gap-3 text-lg font-medium text-foreground">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {b}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Section 4 -- Kundenstimmen (funnel-narrativ Schema A, Beat 4) */}
      <Section tone="surface" maxW="max-w-3xl">
        <Reveal>
          <TestimonialGrid items={TESTIMONIALS} />
        </Reveal>
      </Section>

      {/* Section 5 -- Die Loesung (Unsere These) */}
      <Section>
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">{SOLUTION.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-pretty mt-5 text-lg text-muted-foreground">{SOLUTION.intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {SOLUTION.bullets.map((b) => (
              <li
                key={b}
                className="rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-sm font-bold text-accent"
              >
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-balance mt-10 text-2xl font-bold text-foreground">{SOLUTION.outro}</p>
        </Reveal>
      </Section>

      {/* Section 6 -- Wer bin ich */}
      <Section tone="surface" maxW="max-w-4xl">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center">
          <Reveal>
            <ImagePlaceholder aspect="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3">
              {ABOUT.bullets.map((b) => (
                <p key={b} className="text-lg font-medium text-foreground">
                  {b}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Section 7 -- Kundenergebnisse */}
      <Section maxW="max-w-4xl">
        <div className="grid gap-5 sm:grid-cols-2">
          {RESULTS.map((r, i) => (
            <Reveal key={r.category} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 rounded-xl border border-border p-8">
                <span className="inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                  {r.category}
                </span>
                <p className="text-balance text-2xl font-bold text-foreground">{r.result}</p>
                <p className="text-muted-foreground">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 8 -- Abschluss-CTA */}
      <Section tone="inverted" className="text-center" maxW="max-w-2xl">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">{FINAL.title}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-pretty mx-auto mt-5 max-w-lg text-lg text-accent-foreground/75">{FINAL.sub}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <CtaButton
              href={BOOKING_LINK_PLACEHOLDER}
              note="Platzhalter-Link — wird durch deinen Terminbuchungslink ersetzt."
              inverted
            >
              {CTA_LABEL}
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
