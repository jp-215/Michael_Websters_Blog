"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  backgroundImage?: string
  speed?: number
  className?: string
}

// Parallax background that stays inside its section.
// - Progress is measured from where the section sits on screen, not the page's total scroll,
//   so the photo never slides out of view.
// - The position eases toward its target every frame, so motion stays smooth instead of stepping.
// - The photo is 140% of the section height, giving 20% of travel above and below.
export function ParallaxSection({ children, backgroundImage, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const background = backgroundRef.current
    if (!section || !background) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let target = 0 // -1 (section entering from below) .. 1 (leaving at top)
    let current = 0
    let frame = 0

    const measure = () => {
      const rect = section.getBoundingClientRect()
      const viewport = window.innerHeight
      const center = rect.top + rect.height / 2
      const raw = (center - viewport / 2) / (viewport / 2 + rect.height / 2)
      target = Math.max(-1, Math.min(1, raw))
    }

    const render = () => {
      current += (target - current) * 0.12
      const travel = section.offsetHeight * 0.2 * Math.min(1, speed * 2)
      const y = reduceMotion ? 0 : -current * travel
      background.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`

      if (Math.abs(target - current) > 0.0005) {
        frame = requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const kick = () => {
      measure()
      if (!frame) frame = requestAnimationFrame(render)
    }

    kick()
    window.addEventListener("scroll", kick, { passive: true })
    window.addEventListener("resize", kick)

    return () => {
      window.removeEventListener("scroll", kick)
      window.removeEventListener("resize", kick)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-x-0 -top-[20%] h-[140%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div className="absolute inset-0 bg-background/50" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
