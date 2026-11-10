"use client"

import { Mail, Phone, MapPin, Calendar, Music, Youtube } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="mb-4">
              <h3 className="newspaper-headline text-xl sm:text-2xl font-black tracking-tighter mb-2">
                MICHAEL WEBSTER
              </h3>
              <p className="text-sm text-primary-foreground/80">Professional Alto Saxophonist</p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Bringing the authentic sound of jazz to the Bay Area through professional performances, personalized
              instruction, and musical collaboration.
            </p>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="newspaper-headline text-base sm:text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Private Saxophone Lessons",
                "Live Jazz Performances",
                "Wedding & Event Music",
                "Jazz Workshops",
                "Recording Sessions",
              ].map((service) => (
                <li
                  key={service}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="newspaper-headline text-base sm:text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Book a Lesson",
                "Performance Booking",
                "Listen on Apple Music",
                "Watch on YouTube",
                "Contact & Rates",
              ].map((link) => (
                <li
                  key={link}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="newspaper-headline text-base sm:text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              {[
                { icon: Mail, text: "mpwebst@gmail.com" },
                { icon: Phone, text: "(415) 555-JAZZ" },
                { icon: MapPin, text: "Bay Area, California" },
                { icon: Calendar, text: "Response within 24hrs" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/80 justify-center sm:justify-start"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm justify-center sm:justify-start">
                  <Music className="h-4 w-4 flex-shrink-0" />
                  <span className="text-primary-foreground/80">Available on Apple Music</span>
                </div>
                <div className="flex items-center gap-2 text-sm justify-center sm:justify-start">
                  <Youtube className="h-4 w-4 flex-shrink-0" />
                  <span className="text-primary-foreground/80">Watch on YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="newspaper-byline text-xs text-primary-foreground/60">
              © 2024 Michael Webster Jazz. All rights reserved. • Bay Area Jazz Chronicle
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-primary-foreground/60">
              <span>Professional Jazz Services</span>
              <span className="hidden sm:inline">•</span>
              <span>Streaming on Apple Music & YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
