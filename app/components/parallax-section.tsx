"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  backgroundImage?: string
  speed?: number
  className?: string
}

export function ParallaxSection({ children, backgroundImage, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !backgroundRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        backgroundRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
