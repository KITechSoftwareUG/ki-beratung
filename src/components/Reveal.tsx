import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <div data-reveal className={className} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
