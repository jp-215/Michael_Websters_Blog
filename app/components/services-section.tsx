"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Calendar, Award, MapPin, GraduationCap, Play, ExternalLink } from "lucide-react"

export function ServicesSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !contentRef.current) return

      const scrolled = window.pageYOffset
      const rect = contentRef.current.getBoundingClientRect()
      const speed = 0.4

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const rate = scrolled * -speed
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSpotify = () => {
    const spotifySection = document.getElementById("spotify-showcase")
    if (spotifySection) {
      spotifySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={contentRef} className="relative py-16 overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1400&text=Jazz+Studio+Background')`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-muted/90 backdrop-blur-sm z-10" />

      <div className="relative z-20 container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="newspaper-headline text-4xl md:text-5xl font-black tracking-tighter text-primary mb-4">
            PROFESSIONAL SERVICES
          </h2>
          <div className="newspaper-divider mb-6"></div>
          <p className="newspaper-subhead text-lg text-muted-foreground max-w-3xl mx-auto">
            Bringing over a decade of jazz expertise to the Bay Area through personalized instruction, live
            performances, and musical collaboration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Private Lessons",
              desc: "One-on-one saxophone instruction",
              features: [
                "Beginner to Advanced levels",
                "Jazz improvisation techniques",
                "Music theory & ear training",
                "Performance preparation",
              ],
              button: "Book Lesson",
              action: () => {},
            },
            {
              icon: Calendar,
              title: "Live Performances",
              desc: "Professional gig services",
              features: [
                "Wedding ceremonies & receptions",
                "Corporate events",
                "Jazz clubs & venues",
                "Private parties",
              ],
              button: "Book Gig",
              action: () => {},
            },
            {
              icon: Music,
              title: "Latest Album",
              desc: "Original compositions & interpretations",
              features: [
                "Original jazz compositions",
                "Classic standards reimagined",
                "Available on all platforms",
                "Physical copies available",
              ],
              button: "Listen Now",
              action: scrollToSpotify,
            },
            {
              icon: Award,
              title: "Master Classes",
              desc: "Advanced instruction sessions",
              features: [
                "In-person instruction only",
                "Advanced jazz techniques",
                "Professional development",
                "Time: To Be Announced",
              ],
              button: "Get Notified",
              action: () => {},
            },
          ].map((service, index) => (
            <Card
              key={service.title}
              className="border-2 border-border hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-accent mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="newspaper-headline text-xl">{service.title}</CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="transform hover:translate-x-1 transition-transform duration-200">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={service.action}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold newspaper-byline transform hover:scale-105 transition-all duration-300"
                >
                  {service.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-card/95 backdrop-blur-sm border-2 border-border p-8 rounded-lg animate-fade-in-up delay-600 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="newspaper-headline text-3xl font-black text-primary mb-4">About Michael Webster</h3>
              <div className="space-y-4 text-justify">
                <p className="leading-relaxed transform hover:translate-x-1 transition-transform duration-300">
                  Michael Webster is a distinguished alto saxophonist based in the Bay Area, bringing passion and
                  expertise to every performance and lesson. With a Master's degree in Jazz Studies, Michael combines
                  academic excellence with real-world performance experience.
                </p>
                <p className="leading-relaxed transform hover:translate-x-1 transition-transform duration-300">
                  His dedication to the craft of jazz extends beyond performance to nurturing the next generation of
                  musicians through personalized instruction and mentorship.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: GraduationCap, text: "Master's in Jazz Studies" },
                  { icon: MapPin, text: "Bay Area Based" },
                  { icon: Award, text: "Professional Performer" },
                  { icon: Users, text: "Accepting Students" },
                ].map((item, index) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center animate-fade-in-up delay-700">
              <img
                src="/placeholder.svg?height=400&width=300&text=Michael+Webster+Portrait"
                alt="Michael Webster"
                className="w-full max-w-sm mx-auto border-2 border-border rounded-lg transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              />
              <div className="mt-4">
                <div className="newspaper-byline text-xs text-muted-foreground">FEATURED ARTIST</div>
                <div className="font-medium">Michael Webster</div>
                <div className="text-sm text-muted-foreground">Alto Saxophone</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify Showcase Section */}
        <div
          id="spotify-showcase"
          className="bg-card/95 backdrop-blur-sm border-2 border-accent p-8 rounded-lg animate-fade-in-up delay-800"
        >
          <div className="text-center mb-8">
            <div className="newspaper-byline text-xs text-muted-foreground mb-2">NOW STREAMING</div>
            <h3 className="newspaper-headline text-3xl font-black text-primary mb-4">Listen on Spotify</h3>
            <div className="newspaper-divider mb-6"></div>
            <p className="newspaper-subhead text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience Michael Webster's latest recordings featuring original compositions and jazz standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Bay Area Sessions",
                type: "Latest Album",
                tracks: "8 tracks • 42 min",
                image: "/placeholder.svg?height=300&width=300&text=Bay+Area+Sessions+Album+Cover",
              },
              {
                title: "Jazz Standards Reimagined",
                type: "EP",
                tracks: "5 tracks • 28 min",
                image: "/placeholder.svg?height=300&width=300&text=Jazz+Standards+Album+Cover",
              },
              {
                title: "Live at The Blue Note",
                type: "Live Recording",
                tracks: "6 tracks • 38 min",
                image: "/placeholder.svg?height=300&width=300&text=Live+Recording+Album+Cover",
              },
            ].map((album, index) => (
              <Card
                key={album.title}
                className="border-2 border-border hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img
                      src={album.image || "/placeholder.svg"}
                      alt={album.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="newspaper-headline text-lg font-bold text-primary mb-1">{album.title}</h4>
                    <div className="newspaper-byline text-xs text-muted-foreground mb-2">{album.type}</div>
                    <p className="text-sm text-muted-foreground mb-4">{album.tracks}</p>
                    <Button
                      size="sm"
                      className="bg-[#1DB954] text-white hover:bg-[#1ed760] font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Play on Spotify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold newspaper-byline px-8 py-3 transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Discography
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
