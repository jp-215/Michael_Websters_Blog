"use client"

import { Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="newspaper-headline text-2xl font-black tracking-tighter mb-2">MICHAEL WEBSTER</h3>
              <p className="text-sm text-primary-foreground/80">Professional Alto Saxophonist</p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Bringing the authentic sound of jazz to the Bay Area through professional performances, personalized
              instruction, and musical collaboration.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="newspaper-headline text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Private Saxophone Lessons",
                "Live Jazz Performances",
                "Wedding & Event Music",
                "Master Classes (TBA)",
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
          <div>
            <h4 className="newspaper-headline text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Book a Lesson",
                "Performance Booking",
                "Listen on Spotify",
                "Master Class Updates",
                "Contact & Rates",
                "Newsletter Signup",
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
          <div>
            <h4 className="newspaper-headline text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              {[
                { icon: Mail, text: "michael@websterjazz.com" },
                { icon: Phone, text: "(415) 555-JAZZ" },
                { icon: MapPin, text: "Bay Area, California" },
                { icon: Calendar, text: "Response within 24hrs" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <item.icon className="h-4 w-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm">
                <ExternalLink className="h-4 w-4" />
                <span className="text-primary-foreground/80">Available on Spotify</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="newspaper-byline text-xs text-primary-foreground/60">
              © 2024 Michael Webster Jazz. All rights reserved. • Bay Area Jazz Chronicle
            </div>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
              <span>Professional Jazz Services</span>
              <span>•</span>
              <span>Master Classes: To Be Announced</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
