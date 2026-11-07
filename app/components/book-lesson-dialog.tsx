"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Opens the Get In Touch form in a popup, preselected for lessons.
export function BookLessonDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="newspaper-headline text-3xl font-black text-primary">Get In Touch</DialogTitle>
          <DialogDescription>Fill out the form below and I&apos;ll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lesson-first-name">First Name</Label>
              <Input id="lesson-first-name" placeholder="Your first name" autoComplete="given-name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson-last-name">Last Name</Label>
              <Input id="lesson-last-name" placeholder="Your last name" autoComplete="family-name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-email">Email</Label>
            <Input id="lesson-email" type="email" placeholder="your.email@example.com" autoComplete="email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-phone">Phone (Optional)</Label>
            <Input id="lesson-phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" />
          </div>

          <div className="space-y-2">
            <Label>Service Interest</Label>
            <Select defaultValue="lessons">
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lessons">Private Lessons</SelectItem>
                <SelectItem value="performance">Live Performance</SelectItem>
                <SelectItem value="other">Other Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lesson-message">Message</Label>
            <Textarea
              id="lesson-message"
              placeholder="Tell me about your musical goals, your level, and what you would like to work on..."
              className="min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full bg-primary font-bold text-primary-foreground">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
