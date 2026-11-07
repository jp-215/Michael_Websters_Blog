"use client"

import { useEffect, useRef, useState } from "react"
import { ParallaxSection } from "./parallax-section"

// Types the quote out one character at a time once it scrolls into view.
function TypedQuote({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  // Start when the quote is on screen.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text])

  // Add one character per tick.
  useEffect(() => {
    if (!started || count >= text.length) return
    const id = window.setTimeout(() => setCount((c) => c + 1), 38)
    return () => window.clearTimeout(id)
  }, [started, count, text.length])

  const done = count >= text.length

  return (
    <p
      ref={ref}
      className="newspaper-subhead text-3xl leading-snug text-foreground sm:text-5xl lg:text-6xl"
    >
      {/* Full text for screen readers; the typed copy below is hidden from them */}
      <span className="sr-only">&ldquo;{text}&rdquo;</span>
      <span aria-hidden="true">
        &ldquo;{text.slice(0, count)}
        <span
          className={done ? "ml-1 inline-block w-[0.08em] animate-pulse bg-accent" : "ml-1 inline-block w-[0.08em] bg-accent"}
          style={{ height: "0.9em", verticalAlign: "-0.1em" }}
        />
        {done && "”"}
      </span>
    </p>
  )
}

// Full-width parallax break between chapters. The photo drifts slower than the
// page as you scroll, and a single line of the story types out on top of it.
export function StoryBand({ image, quote, speed = 0.4 }: { image?: string; quote: string; speed?: number }) {
  return (
    <ParallaxSection
      backgroundImage={image}
      speed={speed}
      className="flex min-h-[60vh] flex-col justify-center py-24 sm:min-h-[75vh] sm:py-32"
    >
      <blockquote className="site-container text-center">
        <TypedQuote text={quote} />
      </blockquote>
    </ParallaxSection>
  )
}
