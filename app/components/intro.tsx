"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Music, Users, Calendar, Mail } from "lucide-react"

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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%] z-0">
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 md:px-10 max-w-screen-lg">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="newspaper-headline text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 text-shadow-lg leading-tight">
            MICHAEL WEBSTER
          </h1>
          <div className="newspaper-divider mb-4 bg-accent h-1 w-24 mx-auto" />
          <p className="newspaper-subhead text-lg sm:text-xl md:text-2xl text-accent font-medium mb-2">
            Jazz Saxophone • Jazz Studies Master
          </p>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Bay Area based jazz musician offering private lessons, live performances, and bringing the authentic sound
            of jazz to your events.
          </p>
        </div>

        {/* Call-to-Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-400">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold newspaper-byline px-6 py-3 text-base sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <Users className="mr-2 h-5 w-5" />
            Book Lessons
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-bold newspaper-byline px-6 py-3 text-base sm:text-lg bg-transparent transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Gigs
          </Button>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 animate-fade-in-up delay-500">
          {[
            {
              icon: Music,
              title: "Private Lessons",
              desc: "Personalized instruction for all skill levels, from beginner to advanced jazz performance.",
            },
            {
              icon: Calendar,
              title: "Live Performances",
              desc: "Available for weddings, corporate events, jazz clubs, and private parties.",
            },
            {
              icon: Mail,
              title: "Latest Album",
              desc: "Experience Michael's original compositions and jazz interpretations.",
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="bg-black/50 backdrop-blur-sm border border-white/20 p-5 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-black/60 text-center"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <service.icon className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="newspaper-headline text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentImage ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </section>
  )
}
