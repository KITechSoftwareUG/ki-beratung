import { ImageIcon } from 'lucide-react'

type ImagePlaceholderProps = {
  label?: string
  aspect?: string
  className?: string
}

/** Clearly marked stand-in for a real, personal photo -- never a stock
 * image. Swap the element for a real <img> once the photo exists. */
export function ImagePlaceholder({ label = 'Platzhalter: dein Foto', aspect = 'aspect-[4/5]', className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface text-muted-foreground ${className}`}
    >
      <ImageIcon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
