"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, DollarSign, Calendar } from "lucide-react"


export function ContactSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !contentRef.current) return

      const scrolled = window.pageYOffset
      const rect = contentRef.current.getBoundingClientRect()
      const speed = 0.2

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
          backgroundImage: `url('/placeholder.svg?height=800&width=1400&text=Jazz+Club+Atmosphere')`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10" />

      <div className="relative z-20 container mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="newspaper-headline text-4xl md:text-5xl font-black tracking-tighter text-primary mb-4">
            BOOK YOUR SESSION
          </h2>
          <div className="newspaper-divider mb-6"></div>
          <p className="newspaper-subhead text-lg  max-w-3xl mx-auto">
            Ready to elevate your jazz journey? Get in touch to schedule lessons, book performances, or inquire about
            master classes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-border animate-fade-in-up">
            <CardHeader>
              <CardTitle className="newspaper-headline text-2xl">Get In Touch</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lessons">Private Lessons</SelectItem>
                    <SelectItem value="performance">Live Performance</SelectItem>
                    <SelectItem value="masterclass">Master Class Notification</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your musical goals, event details, or any questions you have..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 font-bold newspaper-byline transform hover:scale-105 transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Rates */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-2 border-border animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="newspaper-headline text-2xl">Contact Information</CardTitle>
                <CardDescription>Reach out directly or use the contact form</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "michael@websterjazz.com" },
                  { icon: Phone, label: "Phone", value: "(415) 555-JAZZ" },
                  { icon: MapPin, label: "Location", value: "Bay Area, California" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 transform hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-accent" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Rates & Availability */}
            <Card className="border-2 border-border animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="newspaper-headline text-2xl">Rates & Availability</CardTitle>
                <CardDescription>Professional services with competitive pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: DollarSign, service: "Private Lessons", rate: "$75/hour", note: "In-person or virtual" },
                  {
                    icon: Calendar,
                    service: "Live Performances",
                    rate: "Contact for quote",
                    note: "Based on event details",
                  },
                  {
                    icon: DollarSign,
                    service: "Master Classes",
                    rate: "TBA",
                    note: "In-person only • To Be Announced",
                  },
                ].map((item, index) => (
                  <div
                    key={item.service}
                    className="border-l-4 border-accent pl-4 transform hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="h-4 w-4 text-accent" />
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{item.rate}</div>
                    <div className="text-sm">{item.note}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-600">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 font-bold newspaper-byline transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Lesson
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold newspaper-byline transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Quick Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
