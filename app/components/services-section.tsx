"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParallaxSection } from "./parallax-section"
import { GraduationCap, Music, Disc3, Calendar, Clock, Users, Star, MapPin, Play, ExternalLink } from "lucide-react"

export function ServicesSection() {
  const scrollToAppleMusic = () => {
    const element = document.getElementById("apple-music")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ParallaxSection
      backgroundImage="/placeholder.svg?height=800&width=1600&text=Jazz+Stage"
      speed={0.3}
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="newspaper-divider mb-6 sm:mb-8"></div>
          <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4 sm:mb-6">
            PROFESSIONAL SERVICES
          </h2>
          <p className="newspaper-subhead text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your musical journey with personalized instruction and world-class performances
          </p>
          <div className="newspaper-divider mt-6 sm:mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Private Lessons */}
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border-2 border-accent/20 hover:border-accent/40 hover:scale-110 transition-all duration-300 mb-6 mx-auto shadow-lg hover:shadow-xl">
                <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-sm" />
              </div>

              <h3 className="newspaper-headline text-xl sm:text-2xl font-bold text-center mb-4">
                Private Saxophone Lessons
              </h3>

              <div className="space-y-3 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>60-minute sessions</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>One-on-one instruction</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>All skill levels welcome</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>Bay Area locations</span>
                </div>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm text-muted-foreground mb-4">
                  STARTING AT $80/LESSON
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Book Lesson
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Master Classes */}
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative">
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground shadow-lg text-xs sm:text-sm">
              Time: TBA
            </Badge>
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full border-2 border-secondary/20 hover:border-secondary/40 hover:scale-110 transition-all duration-300 mb-6 mx-auto shadow-lg hover:shadow-xl">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-foreground drop-shadow-sm" />
              </div>

              <h3 className="newspaper-headline text-xl sm:text-2xl font-bold text-center mb-4">Master Classes</h3>

              <div className="space-y-3 mb-6 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                  <span>Advanced techniques</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                  <span>In-person instruction only</span>
                </div>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm text-muted-foreground mb-4">RATES: TBA</div>
                <Button
                  variant="secondary"
                  className="w-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Get Notified
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Latest Album */}
          <Card className="bg-card/95 backdrop-blur-sm border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border-2 border-accent/20 hover:border-accent/40 hover:scale-110 transition-all duration-300 mb-6 mx-auto shadow-lg hover:shadow-xl">
                <Disc3 className="h-8 w-8 sm:h-10 sm:w-10 text-accent drop-shadow-sm" />
              </div>

              <h3 className="newspaper-headline text-xl sm:text-2xl font-bold text-center mb-4">Latest Album</h3>

              <div className="text-center mb-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Music className="h-8 w-8 sm:h-12 sm:w-12 text-accent-foreground" />
                </div>
                <h4 className="newspaper-headline text-lg sm:text-xl font-bold mb-2">Bay Area Sessions</h4>
                <p className="text-sm sm:text-base text-muted-foreground">12 tracks • 58 minutes</p>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm text-muted-foreground mb-4">NOW STREAMING</div>
                <Button
                  onClick={scrollToAppleMusic}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Listen Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apple Music & YouTube Section */}
        <div
          id="apple-music"
          className="bg-card/95 backdrop-blur-sm rounded-lg border-2 border-border p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="newspaper-headline text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-4">
              Listen & Watch
            </h3>
            <p className="newspaper-subhead text-base sm:text-lg text-muted-foreground">
              Stream on Apple Music and watch performances on YouTube
            </p>
          </div>

          {/* Apple Music Section */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Music className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="newspaper-headline text-xl sm:text-2xl font-bold">Apple Music</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { title: "Bay Area Sessions", tracks: "12 tracks", duration: "58 min", type: "Album" },
                { title: "Jazz Standards Reimagined", tracks: "8 tracks", duration: "42 min", type: "EP" },
                { title: "Live at The Blue Note", tracks: "10 tracks", duration: "67 min", type: "Live" },
              ].map((album, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h5 className="font-bold text-center mb-2 text-sm sm:text-base">{album.title}</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center mb-2">
                      {album.tracks} • {album.duration}
                    </p>
                    <Badge variant="secondary" className="w-full justify-center text-xs">
                      {album.type}
                    </Badge>
                    <Button
                      size="sm"
                      className="w-full mt-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                    >
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Play on Apple Music
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base bg-transparent"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Full Apple Music Profile
              </Button>
            </div>
          </div>

          {/* YouTube Section */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="newspaper-headline text-xl sm:text-2xl font-bold">YouTube</h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Video 1 */}
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Autumn Leaves - Live Studio Session"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="text-center">
                  <h5 className="font-bold mb-2 text-sm sm:text-base">Autumn Leaves - Live Studio Session</h5>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    A beautiful rendition of this jazz standard featuring Michael's signature alto saxophone sound.
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Bay Area Blues - Original Composition"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="text-center">
                  <h5 className="font-bold mb-2 text-sm sm:text-base">Bay Area Blues - Original Composition</h5>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    An original piece inspired by the vibrant jazz scene of the San Francisco Bay Area.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base bg-transparent"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Subscribe to YouTube Channel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
