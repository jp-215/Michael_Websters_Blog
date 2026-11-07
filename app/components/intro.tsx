"use client"

import { useState, useEffect, useRef } from "react"

const carouselImages = [
  "/CoverImage.png",
  "/CoverImageIII.jpeg",
  "/CoverImageIV.jpeg",
]

export function Intro() {
  const [currentImage, setCurrentImage] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 h-[120%] w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-90" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Background ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="site-container relative z-10 flex flex-col items-center gap-4 text-center text-white animate-fade-in-up">
        <h1 className="newspaper-headline break-words text-4xl font-black leading-tight tracking-tighter text-shadow-lg sm:text-6xl md:text-7xl">
          MICHAEL WEBSTER
        </h1>
        <div className="newspaper-divider h-1 w-24 bg-accent" />
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
          <p className="newspaper-subhead text-lg font-medium text-accent sm:text-xl md:text-2xl">Jazz Saxophone</p>
          <span aria-hidden="true" className="hidden text-accent sm:inline">
            •
          </span>
          <p className="newspaper-subhead text-lg font-medium text-accent sm:text-xl md:text-2xl">
            Jazz Studies Master
          </p>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Bay Area based jazz musician offering private lessons, live performances, and bringing the authentic sound
          of jazz to your events.
        </p>
      </div>
    </section>
  )
}
