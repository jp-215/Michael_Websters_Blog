"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import emailjs from "emailjs-com"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// EmailJS keys, set in .env.local. The message is sent from the page;
// the visitor never leaves the site to open an email app.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const MESSAGE_LIMIT = 800

type Status = "idle" | "sending" | "sent" | "error"

const SERVICES = [
  { value: "lessons", label: "Private lessons" },
  { value: "performance", label: "Live performance" },
  { value: "other", label: "Something else" },
] as const

const SERVICE_LABELS: Record<string, string> = {
  lessons: "Private Lessons",
  performance: "Live Performance",
  other: "Other Inquiry",
}

const fieldClass =
  "h-14 rounded-2xl border-foreground/10 bg-foreground/5 px-4 text-base font-light placeholder:text-muted-foreground/60 focus-visible:ring-accent"

// Opens the Get In Touch form in a popup, preselected for lessons.
export function BookLessonDialog({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("idle")
  const [service, setService] = useState<string>("lessons")
  const [messageLength, setMessageLength] = useState(0)
  const [error, setError] = useState("")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const value = (key: string) => String(data.get(key) ?? "").trim()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Messaging is not connected yet. Please reach out by email in the meantime.")
      setStatus("error")
      return
    }

    setStatus("sending")
    setError("")
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${value("firstName")} ${value("lastName")}`.trim(),
          reply_to: value("email"),
          phone: value("phone") || "Not provided",
          service: SERVICE_LABELS[service] ?? service,
          message: value("message"),
        },
        PUBLIC_KEY,
      )
      setStatus("sent")
      form.reset()
      setMessageLength(0)
    } catch {
      setError("Something went wrong sending your message. Please try again.")
      setStatus("error")
    }
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setStatus("idle")
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={[
          "glass-clear bg-transparent font-[family-name:var(--font-inter)]",
          "max-h-[92vh] overflow-y-auto rounded-[2rem] p-6 sm:max-w-[720px] sm:p-12",
          "shadow-[inset_0_1px_0_hsl(var(--foreground)/0.35),0_30px_60px_-20px_rgb(0_0_0/0.5)]",
          "[&>button]:right-6 [&>button]:top-6 [&>button]:h-10 [&>button]:w-10 [&>button]:rounded-full",
          "[&>button]:border [&>button]:border-foreground/15 [&>button]:bg-foreground/5 [&>button]:opacity-100",
        ].join(" ")}
      >
        {status === "sent" ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground" style={{ width: 72, height: 72 }}>
              <Check className="h-8 w-8" strokeWidth={2.4} />
            </div>
            <DialogTitle className="mt-8 text-4xl font-light tracking-tight sm:text-5xl">Message sent</DialogTitle>
            <DialogDescription className="mt-4 max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              Thank you for reaching out. I will reply within 24 hours at the email you gave.
            </DialogDescription>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="h-[52px] rounded-full border-foreground/15 bg-foreground/5 px-7 text-base font-normal">
                  Back to the story
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="h-[52px] rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground">
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Private lessons</p>
              <DialogTitle className="text-4xl font-light tracking-tight sm:text-5xl">Get in touch</DialogTitle>
              <DialogDescription className="text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                Tell me a little about your playing. I reply within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form className="mt-10 space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lesson-first-name" className="text-sm font-medium text-muted-foreground">First name</Label>
                  <Input id="lesson-first-name" name="firstName" required className={fieldClass} placeholder="Jordan" autoComplete="given-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lesson-last-name" className="text-sm font-medium text-muted-foreground">Last name</Label>
                  <Input id="lesson-last-name" name="lastName" required className={fieldClass} placeholder="Lee" autoComplete="family-name" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lesson-email" className="text-sm font-medium text-muted-foreground">Email</Label>
                  <Input id="lesson-email" name="email" type="email" required className={fieldClass} placeholder="you@example.com" autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lesson-phone" className="text-sm font-medium text-muted-foreground">
                    Phone <span className="opacity-60">(optional)</span>
                  </Label>
                  <Input id="lesson-phone" name="phone" type="tel" className={fieldClass} placeholder="(555) 123-4567" autoComplete="tel" />
                </div>
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-muted-foreground">What are you interested in?</legend>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICES.map((s) => (
                    <label key={s.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={s.value}
                        checked={service === s.value}
                        onChange={() => setService(s.value)}
                        className="peer sr-only"
                      />
                      <span className="inline-flex h-11 items-center rounded-full border border-foreground/15 bg-foreground/5 px-5 text-sm font-medium text-foreground transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-accent">
                        {s.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-2">
                <Label htmlFor="lesson-message" className="text-sm font-medium text-muted-foreground">Message</Label>
                <Textarea
                  id="lesson-message"
                  name="message"
                  required
                  maxLength={MESSAGE_LIMIT}
                  onChange={(e) => setMessageLength(e.currentTarget.value.length)}
                  placeholder="Your goals, your level, and what you would like to work on"
                  className="min-h-[140px] rounded-2xl border-foreground/10 bg-foreground/5 px-4 py-4 text-base font-light leading-relaxed placeholder:text-muted-foreground/60 focus-visible:ring-accent"
                />
                <div className="text-right text-xs tabular-nums text-muted-foreground">
                  {messageLength} / {MESSAGE_LIMIT}
                </div>
              </div>

              {status === "error" && (
                <p role="alert" className="text-base text-destructive">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "sending"}
                className="h-[60px] w-full gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.01] hover:bg-primary/90"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.2} />}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Your details stay private and go only to Michael Webster.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
