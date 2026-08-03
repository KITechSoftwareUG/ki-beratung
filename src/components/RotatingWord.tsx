import { useEffect, useState } from 'react'

type RotatingWordProps = {
  words: string[]
  interval?: number
}

/** Swaps the emphasised word on an interval. Reserves layout width for the
 * longest word up front so nothing reflows as it cycles. Freezes on the
 * first word under prefers-reduced-motion. */
export function RotatingWord({ words, interval = 2200 }: RotatingWordProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [words.length, interval])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a))

  return (
    <span className="relative inline-grid text-left align-bottom">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className="col-start-1 row-start-1 text-accent transition-all duration-500 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? 'translateY(0)' : 'translateY(0.3em)',
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}
