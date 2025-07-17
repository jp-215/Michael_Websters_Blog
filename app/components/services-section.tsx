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
      backgroundImage="Image.jpeg"
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
          <p className="newspaper-subhead text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-black text-primary">
            Elevate your musical journey with personalized instruction and world-class performances
          </p>
          <div className="newspaper-divider mt-6 sm:mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">



          {/* Private Lessons */}
          <Card className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border-2 border-accent/20 hover:border-accent/40 hover:scale-110 transition-all duration-300 mb-6 mx-auto shadow-lg hover:shadow-xl">
                <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-accent " />
              </div>

              <h3 className="newspaper-headline text-xl sm:text-3xl font-bold text-center mb-4">
                Private Saxophone Lessons
              </h3>

              <div className="space-y-5 mb-6 text-lg ">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>60-minute sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>One-on-one instruction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>All skill levels welcome</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>Bay Area locations</span>
                </div>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm mb-4">
                  STARTING AT $120/LESSON
                </div>
                <Button className="w-full bg-primary/30 hover:bg-primary/30 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Book Lesson
                </Button>
              </div>
            </CardContent>
          </Card>


          
          {/* Master Classes */}
          <Card className="bg-card/30 border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative">
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground shadow-lg text-lg sm:text-sm">
              Time: TBA
            </Badge>
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 lg:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full border-2 border-secondary/20 hover:border-secondary/40 hover:scale-110 transition-all duration-300 mb-6 mx-auto shadow-lg hover:shadow-xl">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-foreground drop-shadow-sm" />
              </div>

              <h3 className="newspaper-headline text-xl sm:text-2xl font-bold text-center mb-4">Master Classes</h3>

              <div className="space-y-5 mb-6 text-sm lg:text-base">
                <div className="flex items-center gap-2 ">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>To Be Announced</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Advanced techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>In-person instruction only</span>
                </div>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm mb-4">RATES: TBA</div>
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
          <Card className="bg-card/30  border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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
                <p className="text-sm sm:text-base ">12 tracks • 58 minutes</p>
              </div>

              <div className="text-center">
                <div className="newspaper-byline text-xs sm:text-sm mb-4">NOW STREAMING</div>
                <Button
                  onClick={scrollToAppleMusic}
                  className="w-full bg-accent hover:bg-accent/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
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
          className="bg-card/30  rounded-lg border-2 border-border p-6 sm:p-8 lg:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="newspaper-headline text-2xl :text-3xl lg:text-4xl font-black text-primary mb-4">
              Listen & Watch
            </h3>
            <p className="newspaper-subhead text-base lg:text-lg">
              Stream on Apple Music and watch performances on YouTube
            </p>
          </div>


        {/* Apple Music Section */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <Music className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h4 className="newspaper-headline text-2xl sm:text-3xl font-bold">Apple Music</h4>
            </div>

            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="max-w-4xl w-full">
                <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8 space-y-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg mx-auto flex items-center justify-center shadow-lg">
                      <Music className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>

                    <div className="text-center">
                      <h5 className="font-bold mb-3 text-base sm:text-lg">Bay Area Sessions</h5>
                      <p className="text-sm sm:text-base mb-2">
                        12 tracks • 58 min
                      </p>

                      <ul className = "w-full justify-center text-lg mb-6 ">
                        <li>St. Cecilia</li>
                        <li>Body and Soul</li>
                        <li>Confirmation</li>
                        <li>For Andrew</li>
                      </ul>
                   
                      <Badge variant="secondary" className="w-full justify-center text-sm mb-4 gap-6">
                        Album
                      </Badge>

                      

                      <a 
                         href="https://music.apple.com/us/album/introducing-michael-webster/1822675860" // Replace with your actual link
                         target="_blank"
                         rel="noopener noreferrer"
                      
                      > 
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Play on Apple Music
                      </Button>

                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>



          {/* YouTube Section */}
          <div>
            <div className="flex items-center justify-center  mb-10 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h4 className="newspaper-headline text-xl sm:text-2xl font-bold">YouTube</h4>
            </div>

            <div className="flex justify-center mb-10 sm:mb-10">
              <div className="space-y-4 max-w-7xl w-full">
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/uKx_0PwRIFg"
                    title="Introducing: Michael Webster"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2 text">Introducing: Michael Webster</h3>
                  <p className="text-xs sm:text-sm">
                    A beautiful rendition of this jazz standard featuring Michael's signature alto saxophone sound.
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
