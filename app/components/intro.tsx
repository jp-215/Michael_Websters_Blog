"use client"

import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Music, Users, Calendar, Mail } from "lucide-react"

const carouselImages = [
  "/placeholder.svg?height=800&width=1400&text=Michael+Webster+Live+Performance",
  "/placeholder.svg?height=800&width=1400&text=Jazz+Ensemble+Recording",
  "/placeholder.svg?height=800&width=1400&text=Teaching+Session",
  "/placeholder.svg?height=800&width=1400&text=Bay+Area+Jazz+Scene",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Carousel Background */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%] z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-70" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20 newspaper-header bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between py-4">
            <div className="newspaper-dateline text-muted-foreground">Bay Area Jazz • Est. 2024</div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-5">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="newspaper-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 text-shadow-lg">
            MICHAEL WEBSTER
          </h1>
          <div className="newspaper-divider mb-6 bg-accent"></div>
          <p className="newspaper-subhead text-xl md:text-2xl lg:text-3xl text-accent font-medium mb-2">
            Alto Saxophone • Jazz Studies Master
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Bay Area based jazz musician offering private lessons, live performances, and bringing the authentic sound
            of jazz to your events.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold newspaper-byline px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
          >
            <Users className="mr-2 h-5 w-5" />
            Book Lessons
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-bold newspaper-byline px-8 py-3 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Gigs
          </Button>
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up delay-500">
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
              className="bg-black/50 backdrop-blur-sm border border-white/20 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-black/60"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <service.icon className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="newspaper-headline text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentImage ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
