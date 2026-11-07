"use client"

import { ParallaxSection } from "./parallax-section"

// Full-width parallax break between chapters. The photo drifts slower than the
// page as you scroll, and a single line of the story sits on top of it.
export function StoryBand({ image, quote, speed = 0.4 }: { image: string; quote: string; speed?: number }) {
  return (
    <ParallaxSection
      backgroundImage={image}
      speed={speed}
      className="flex min-h-[60vh] flex-col justify-center py-24 sm:min-h-[75vh] sm:py-32"
    >
      <blockquote className="site-container text-center">
        <p className="newspaper-subhead text-3xl leading-snug text-foreground sm:text-5xl lg:text-6xl">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
    </ParallaxSection>
  )
}
