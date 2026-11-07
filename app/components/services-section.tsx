"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "./parallax-section"
import { AlbumPlayer } from "./album-player"
import { StoryBand } from "./story-band"
import { BookLessonDialog } from "./book-lesson-dialog"
import { Clock, Users, Star, MapPin, DollarSign, Calendar } from "lucide-react"

// A chapter header that opens each part of the story.
function Chapter({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-12 text-center sm:mb-16">
      <p className="newspaper-byline mb-4 text-sm tracking-[0.3em] text-accent sm:text-base">{kicker}</p>
      <h3 className="newspaper-headline text-4xl font-black text-primary sm:text-5xl lg:text-6xl">{title}</h3>
      {children && (
        <p className="newspaper-subhead mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl lg:text-2xl">
          {children}
        </p>
      )}
    </header>
  )
}

export function ServicesSection() {
  return (
    <div className="flex flex-col">
      {/* Opening: the header sets the scene */}
      <ParallaxSection backgroundImage="/story/header.jpg" speed={0.3} className="py-20 sm:py-28 lg:py-32">
        <div className="site-container relative z-10 max-w-7xl">
          <header className="text-center">
            <div className="newspaper-divider mb-8 sm:mb-10" />
            <p className="newspaper-byline mb-4 text-sm tracking-[0.3em] text-accent sm:text-base">PROFESSIONAL SERVICES</p>
            <h2 className="newspaper-headline text-5xl font-black text-primary sm:text-6xl lg:text-8xl">
              Every story starts with a single note.
            </h2>
            <p className="newspaper-subhead mx-auto mt-8 max-w-3xl text-xl text-foreground/90 sm:text-2xl">
              This is a story in three chapters: the sound you can hear, the moments that shaped it, and the lesson
              that lets you make your own.
            </p>
            <div className="newspaper-divider mt-10 sm:mt-12" />
          </header>
        </div>
      </ParallaxSection>

      <StoryBand
        image="/story/band-1.jpg"
        quote="It starts in a room, with one saxophone and everyone listening."
      />

      {/* Chapter I: the sound */}
      <section className="site-container max-w-7xl py-20 sm:py-28">
        <Chapter kicker="CHAPTER I" title="THE SOUND">
        </Chapter>
        <AlbumPlayer />
      </section>

      <StoryBand
        image="/story/band-2.jpg"
        quote="Every tune carries the players who shaped it, one phrase at a time."
      />

      {/* Chapter II: on stage */}
      <section className="site-container max-w-4xl py-20 text-center sm:py-28">
        <Chapter kicker="CHAPTER II" title="ON STAGE">
          Jazz lives in the moment. A room, a rhythm section, and a saxophone trading ideas until the crowd is part of
          the conversation.
        </Chapter>
        <p className="newspaper-subhead mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Whether it is a wedding, a club night, or a private party, the goal is the same: music that feels like it was
          written for that exact room.
        </p>
      </section>

      <StoryBand
        image="/story/band-3.jpg"
        quote="The best sessions end with you playing something you did not know you could."
      />

      {/* Book a lesson: the final chapter, where the reader joins the story */}
      <section className="site-container max-w-4xl py-20 sm:py-28">
        <Chapter kicker="YOUR TURN" title="BOOK A LESSON">
          The sound you just heard began with lessons like this one. Your story starts with the next session.
        </Chapter>

        <div className="mx-auto w-full rounded-xl bg-card p-8 shadow-2xl sm:p-12">
          <h3 className="newspaper-headline mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
            Private Saxophone Lessons
          </h3>

          <div className="mb-10 grid gap-5 text-lg sm:grid-cols-2 sm:text-xl">
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 flex-shrink-0 text-accent" />
              <span>60-minute sessions</span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 flex-shrink-0 text-accent" />
              <span>One-on-one instruction</span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="h-6 w-6 flex-shrink-0 text-accent" />
              <span>All skill levels welcome</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
              <span>Bay Area locations</span>
            </div>
          </div>

          {/* Rates & Availability */}
          <div className="mb-10 border-t border-border pt-10">
            <p className="newspaper-byline mb-6 text-center text-sm tracking-[0.2em] text-accent sm:text-base">
              RATES &amp; AVAILABILITY
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-muted/60 p-6 text-center">
                <DollarSign className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="newspaper-headline text-xl font-bold">Private Lessons</p>
                <p className="mt-2 text-3xl font-bold text-primary">$75/hour</p>
                <p className="mt-2 text-muted-foreground">In-person or virtual</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-6 text-center">
                <Calendar className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="newspaper-headline text-xl font-bold">Live Performances</p>
                <p className="mt-2 text-3xl font-bold text-primary">Contact for quote</p>
                <p className="mt-2 text-muted-foreground">Based on event details</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <BookLessonDialog>
              <Button className="w-full bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
                Book Lesson
              </Button>
            </BookLessonDialog>
          </div>
        </div>
      </section>
    </div>
  )
}
