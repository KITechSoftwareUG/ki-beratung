/** Minimal scroll-reveal: adds .is-visible via IntersectionObserver. Content
 * is visible-by-default in markup order; this only adds a short fade-up. */
export function initReveals(scope: HTMLElement | Document = document): () => void {
  const els = Array.from(scope.querySelectorAll<HTMLElement>('[data-reveal]'))

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    els.forEach((el) => el.classList.add('is-visible'))
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
  )

  els.forEach((el) => observer.observe(el))

  const safety = window.setTimeout(() => {
    els.forEach((el) => el.classList.add('is-visible'))
  }, 2200)

  return () => {
    window.clearTimeout(safety)
    observer.disconnect()
  }
}
