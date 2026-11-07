"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "./parallax-section"
import { AlbumPlayer } from "./album-player"
import { GraduationCap, Clock, Users, Star, MapPin, Play, ExternalLink } from "lucide-react"

// A chapter header that opens each part of the story.
function Chapter({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-10 text-center sm:mb-14">
      <p className="newspaper-byline mb-3 text-xs tracking-[0.3em] text-accent sm:text-sm">{kicker}</p>
      <h3 className="newspaper-headline text-3xl font-black text-primary sm:text-4xl lg:text-5xl">{title}</h3>
      {children && (
        <p className="newspaper-subhead mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{children}</p>
      )}
    </header>
  )
}

export function ServicesSection() {
  return (
    <ParallaxSection backgroundImage="Image.jpeg" speed={0.3} className="py-16 sm:py-20 lg:py-24">
      <div className="site-container relative z-10">
        {/* Opening */}
        <header className="mb-16 text-center sm:mb-24">
          <div className="newspaper-divider mb-6 sm:mb-8" />
          <h2 className="newspaper-headline text-4xl font-black text-primary sm:text-5xl lg:text-7xl">
            PROFESSIONAL SERVICES
          </h2>
          <p className="newspaper-subhead mx-auto mt-6 max-w-3xl text-lg text-foreground/90 sm:text-xl md:text-2xl">
            A story told in three chapters: the sound, the stage, and the lesson.
          </p>
        </header>

        {/* Chapter I: the sound */}
        <section className="mb-20 sm:mb-28">
          <Chapter kicker="CHAPTER I" title="THE SOUND">
            Open the record. Tap a cover, then press play.
          </Chapter>
          <AlbumPlayer />
        </section>

        {/* Chapter II: the stage */}
        <section className="mb-20 sm:mb-28">
          <Chapter kicker="CHAPTER II" title="ON STAGE">
            Watch a live rendition of the standard, featuring the alto saxophone.
          </Chapter>

          <div className="mx-auto w-full max-w-4xl space-y-8">
            <div className="flex items-center justify-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cherry text-cherry-foreground">
                <Play className="h-4 w-4" />
              </span>
              <h4 className="newspaper-headline text-xl font-bold sm:text-2xl">YouTube</h4>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/uKx_0PwRIFg"
                title="Introducing: Michael Webster"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="text-center">
              <h5 className="mb-2 font-bold">Introducing: Michael Webster</h5>
              <p className="text-sm text-muted-foreground sm:text-base">
                A beautiful rendition of this jazz standard featuring Michael&apos;s signature alto saxophone sound.
              </p>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-cherry bg-transparent text-foreground shadow-lg transition-all duration-300 hover:bg-cherry hover:text-cherry-foreground hover:shadow-xl sm:text-base"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Subscribe to YouTube Channel
              </Button>
            </div>
          </div>
        </section>

        {/* Chapter III: the lesson (placed after the stage, per the story) */}
        <section>
          <Chapter kicker="CHAPTER III" title="THE LESSON">
            Learn the sound yourself, one session at a time.
          </Chapter>

          <div className="mx-auto w-full max-w-xl rounded-xl bg-card p-6 shadow-2xl sm:p-10">
            <h3 className="newspaper-headline mb-6 text-center text-2xl font-bold text-primary sm:text-3xl">
              Private Saxophone Lessons
            </h3>

            <div className="mb-8 space-y-4 text-base sm:text-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span>60-minute sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <span>One-on-one instruction</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-accent" />
                <span>All skill levels welcome</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Bay Area locations</span>
              </div>
            </div>

            <div className="text-center">
              <p className="newspaper-byline mb-4 text-xs text-muted-foreground sm:text-sm">STARTING AT $120/LESSON</p>
              <Button className="w-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:text-base">
                Book Lesson
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ParallaxSection>
  )
}
