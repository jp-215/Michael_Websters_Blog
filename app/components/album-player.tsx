"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, FastForward, Pause, Play, Rewind, Volume2 } from "lucide-react"
import type { CarouselApi } from "@/components/ui/carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CATALOG } from "@/lib/music-catalog"
import { cn } from "@/lib/utils"

export const APPLE_MUSIC_PLAYER_ID = "apple-music-player"

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60).toString().padStart(2, "0")
  return `${m}:${s}`
}

export function AlbumPlayer() {
  const [api, setApi] = useState<CarouselApi>()
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)

  const audioRef = useRef<HTMLAudioElement>(null)
  // Set when a track ends and we advance, so the next track keeps playing.
  const continueRef = useRef(false)

  const track = CATALOG[index] ?? CATALOG[0]

  // Keep the selected index in sync with the carousel (swipe, drag, arrows, taps).
  useEffect(() => {
    if (!api) return
    const onSelect = () => setIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  // Load the new track when the index changes; keep playing if we should.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    setTime(0)
    const shouldPlay = continueRef.current || (open && isPlaying)
    continueRef.current = false
    if (shouldPlay) {
      audio.play().catch(() => setIsPlaying(false))
    }
    // Only re-run when the track changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  // Apply volume to the audio element.
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const openPanel = () => {
    setOpen(true)
    // Tapping the cover is a user gesture, so playback is allowed to start.
    audioRef.current?.play().catch(() => setIsPlaying(false))
  }

  const closePanel = () => {
    setOpen(false)
    audioRef.current?.pause()
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) audio.play().catch(() => setIsPlaying(false))
    else audio.pause()
  }

  const rewind = () => {
    const audio = audioRef.current
    if (!audio) return
    // Like a music app: restart the track if past 3 seconds, otherwise go to the previous track.
    if (audio.currentTime > 3 || !api?.canScrollPrev()) {
      audio.currentTime = 0
      setTime(0)
    } else {
      continueRef.current = !audio.paused
      api?.scrollPrev()
    }
  }

  const fastForward = () => {
    if (!api?.canScrollNext()) return
    continueRef.current = !audioRef.current?.paused
    api.scrollNext()
  }

  const onEnded = () => {
    if (api?.canScrollNext()) {
      continueRef.current = true
      api.scrollNext()
    } else {
      setIsPlaying(false)
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setTime(value)
  }

  return (
    <div id={APPLE_MUSIC_PLAYER_ID} className="scroll-mt-24 mx-auto w-full max-w-5xl">
      {/* Cover flow: swipe or drag to browse. Tap the centered cover to open Now Playing. */}
      <Carousel setApi={setApi} opts={{ align: "center", loop: false }} className="relative w-full">
        <CarouselContent className="-ml-4 items-center">
          {CATALOG.map((item, i) => {
            const active = i === index
            return (
              <CarouselItem key={item.id} className="basis-1/2 pl-4 sm:basis-2/5 lg:basis-1/3">
                <button
                  type="button"
                  aria-label={active ? `Open ${item.title}` : `Select ${item.title}`}
                  onClick={() => (active ? openPanel() : api?.scrollTo(i))}
                  className={cn(
                    "block w-full transition-all duration-500 ease-out",
                    active ? "scale-100 opacity-100" : "scale-[0.82] opacity-45 hover:opacity-70",
                  )}
                >
                  <img
                    src={item.artwork}
                    alt={item.title}
                    draggable={false}
                    className="aspect-square w-full select-none rounded-sm object-cover shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)]"
                  />
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-2" />
        <CarouselNext className="hidden sm:flex -right-2" />
      </Carousel>

      <div className="mt-6 text-center">
        <h4 className="newspaper-headline text-2xl font-black sm:text-3xl">{track.title}</h4>
        <p className="newspaper-byline mt-1 text-sm text-muted-foreground">Tap the cover to play</p>
      </div>

      {/* Hidden audio element that does the playback */}
      <audio
        ref={audioRef}
        src={track.previewUrl}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={onEnded}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      {/* Now Playing panel */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closePanel}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Now playing: ${track.title}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-2xl"
          >
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close now playing"
              className="mx-auto mb-4 flex h-6 w-12 items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <ChevronDown className="h-6 w-6" />
            </button>

            <img
              src={track.artwork}
              alt={track.title}
              className="aspect-square w-full rounded-md object-cover shadow-lg"
            />

            {/* Progress */}
            <div className="mt-6">
              <input
                type="range"
                aria-label="Seek"
                min={0}
                max={duration || 30}
                step={0.1}
                value={Math.min(time, duration || 30)}
                onChange={(e) => seek(Number(e.target.value))}
                className="w-full accent-[hsl(var(--accent))]"
              />
              <div className="mt-1 flex justify-between text-xs tabular-nums text-muted-foreground">
                <span>{formatTime(time)}</span>
                <span>-{formatTime(Math.max(0, (duration || 0) - time))}</span>
              </div>
            </div>

            {/* Track info */}
            <div className="mt-4 text-center">
              <p className="text-lg font-bold">{track.title}</p>
              <p className="text-sm text-accent">
                Michael Webster • Introducing: Michael Webster
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Preview • full track {track.fullLength}</p>
            </div>

            {/* Transport controls */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={rewind}
                aria-label="Rewind or previous track"
                className="text-foreground hover:text-accent"
              >
                <Rewind className="h-8 w-8" />
              </button>
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
              </button>
              <button
                type="button"
                onClick={fastForward}
                aria-label="Fast forward or next track"
                className="text-foreground hover:text-accent disabled:opacity-30"
                disabled={!api?.canScrollNext()}
              >
                <FastForward className="h-8 w-8" />
              </button>
            </div>

            {/* Volume */}
            <div className="mt-6 flex items-center gap-3 text-muted-foreground">
              <Volume2 className="h-4 w-4 flex-shrink-0" />
              <input
                type="range"
                aria-label="Volume"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-[hsl(var(--accent))]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
