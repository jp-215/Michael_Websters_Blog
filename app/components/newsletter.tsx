"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Music, Calendar, Users, Award } from "lucide-react"

export function Newsletter() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !contentRef.current) return

      const scrolled = window.pageYOffset
      const rect = contentRef.current.getBoundingClientRect()
      const speed = 0.1

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const rate = scrolled * -speed
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={contentRef} className="relative py-16 overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1400&text=Jazz+Newsletter+Background')`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-accent/90 backdrop-blur-sm z-10" />

      <div className="relative z-20 container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="newspaper-byline text-xs text-accent-foreground/80 mb-2">STAY CONNECTED</div>
            <h2 className="newspaper-headline text-4xl md:text-5xl font-black tracking-tighter text-accent-foreground mb-4">
              JAZZ UPDATES
            </h2>
            <div className="w-24 h-1 bg-accent-foreground mx-auto mb-6"></div>
            <p className="newspaper-subhead text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              Get the latest updates on performances, new recordings, lesson availability, and master class
              announcements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter Form */}
            <Card className="border-2 border-accent-foreground/20 bg-accent-foreground/10 backdrop-blur-sm animate-fade-in-up">
              <CardHeader>
                <CardTitle className="newspaper-headline text-2xl text-accent-foreground">
                  Subscribe to Updates
                </CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  Join the community of jazz enthusiasts and never miss an update
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email" className="text-accent-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-accent-foreground/10 border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/60"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newsletter-name" className="text-accent-foreground">
                    First Name (Optional)
                  </Label>
                  <Input
                    id="newsletter-name"
                    placeholder="Your first name"
                    className="bg-accent-foreground/10 border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/60"
                  />
                </div>

                <Button className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold newspaper-byline transform hover:scale-105 transition-all duration-300">
                  Subscribe to Updates
                </Button>

                <p className="text-xs text-accent-foreground/70 text-center">
                  No spam, unsubscribe at any time. Updates sent monthly or when there's exciting news to share.
                </p>
              </CardContent>
            </Card>

            {/* What You'll Get */}
            <div className="space-y-6 animate-fade-in-up delay-200">
              <h3 className="newspaper-headline text-2xl font-bold text-accent-foreground mb-6">
                What You'll Receive:
              </h3>

              {[
                {
                  icon: Calendar,
                  title: "Performance Schedule",
                  desc: "Be the first to know about upcoming live performances and special events",
                },
                {
                  icon: Music,
                  title: "New Recordings",
                  desc: "Get notified when new albums, singles, or collaborations are released",
                },
                {
                  icon: Users,
                  title: "Lesson Availability",
                  desc: "Updates on lesson openings and special workshop opportunities",
                },
                {
                  icon: Award,
                  title: "Master Class Announcements",
                  desc: "Early notification when master class dates and locations are announced",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 transform hover:translate-x-1 transition-transform duration-300"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="p-2 bg-accent-foreground/20 rounded-lg">
                    <item.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-accent-foreground/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12 animate-fade-in-up delay-400">
            <div className="newspaper-byline text-xs text-accent-foreground/80 mb-2">JOIN THE COMMUNITY</div>
            <p className="text-accent-foreground/90">
              <span className="font-bold">200+</span> jazz enthusiasts already subscribed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
