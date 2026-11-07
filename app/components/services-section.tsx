"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlbumPlayer } from "./album-player"
import { StoryBand } from "./story-band"
import { BookLessonDialog } from "./book-lesson-dialog"
import { Clock, Users, Star, MapPin, DollarSign, Calendar } from "lucide-react"

// A chapter header that opens each part of the story.
function Chapter({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <header className="mb-12 text-center sm:mb-16">
      <p className="newspaper-byline mb-4 text-base tracking-[0.3em] text-accent sm:text-lg">{kicker}</p>
      <h3 className="newspaper-headline text-5xl font-black text-primary sm:text-6xl lg:text-7xl">{title}</h3>
      {children && (
        <p className="newspaper-subhead mx-auto mt-6 max-w-4xl text-xl text-muted-foreground sm:text-2xl lg:text-3xl">
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
      {/* Services header: static photo, replace public/story/services-header.jpg */}
     

      {/* Break 1: no photo of its own, the site background shows through */}
      <StoryBand
        quote="It starts in a room, with one saxophone and everyone listening."
      />

      {/* Chapter I: the sound */}
      <section className="site-container max-w-7xl py-20 sm:py-28">
        <Chapter kicker="CHAPTER I" title="THE SOUND">
        </Chapter>
        <AlbumPlayer />
      </section>

 
      {/* Book a lesson: the final chapter, where the reader joins the story */}
      <div className="py-20 sm:py-28">
      <section className="site-container max-w-5xl">
        <Chapter kicker="YOUR TURN" title="BOOK A LESSON">
          The sound you just heard began with lessons like this one. Your story starts with the next session.
        </Chapter>

        <div className="glass-clear mx-auto w-full rounded-3xl p-8 sm:p-14">
          <h3 className="newspaper-headline mb-10 text-center text-4xl font-bold text-primary sm:text-5xl">
            Private Saxophone Lessons
          </h3>

          <div className="mb-12 grid gap-6 text-xl sm:grid-cols-2 sm:text-2xl">
            <div className="flex items-center gap-4">
              <Clock className="h-7 w-7 flex-shrink-0 text-accent" />
              <span>60-minute sessions</span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="h-7 w-7 flex-shrink-0 text-accent" />
              <span>One-on-one instruction</span>
            </div>
            <div className="flex items-center gap-4">
              <Star className="h-7 w-7 flex-shrink-0 text-accent" />
              <span>All skill levels welcome</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-7 w-7 flex-shrink-0 text-accent" />
              <span>Bay Area locations</span>
            </div>
          </div>

          {/* Rates & Availability */}
          <div className="mb-12">
            <p className="newspaper-byline mb-6 text-center text-sm tracking-[0.2em] text-accent sm:text-base">
              RATES &amp; AVAILABILITY
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass rounded-2xl p-8 text-center">
                <DollarSign className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="newspaper-headline text-2xl font-bold">Private Lessons</p>
                <p className="mt-2 text-4xl font-bold text-primary">$75/hour</p>
                <p className="mt-2 text-muted-foreground">In-person or virtual</p>
              </div>
              <div className="glass rounded-2xl p-8 text-center">
                <Calendar className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="newspaper-headline text-2xl font-bold">Live Performances</p>
                <p className="mt-2 text-4xl font-bold text-primary">Contact for quote</p>
                <p className="mt-2 text-muted-foreground">Based on event details</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <BookLessonDialog>
              <Button className="w-full bg-primary px-10 py-7 text-xl font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
                Book Lesson
              </Button>
            </BookLessonDialog>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
