import type React from "react"
import { Inter } from "next/font/google"
import { Toolbar } from "basehub/next-toolbar"
import { basehub } from "basehub"
import Footer from "./components/footer"
import { PlaygroundSetupModal } from "./components/playground-notification"
import "./globals.css"
import "../basehub.config"
import { ThemeProvider } from "@/components/theme-provider"
import "../basehub.config"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const dynamic = "force-static"
export const revalidate = 30

export const metadata = {
  generator: "v0.dev",
}

const envs: Record<string, { isValid: boolean; name: string; label: string }> = {}
const _vercel_url_env_name = "VERCEL_URL"
const isMainV0 = process.env[_vercel_url_env_name]?.startsWith("kzmquqo4qg7kooxw6eex")

let allValid = true
const subscribeEnv = ({
  name,
  label,
  value,
}: {
  name: string
  label: string
  value: string | undefined
}) => {
  const isValid = !!value
  if (!isValid) {
    allValid = false
  }
  envs[name] = {
    isValid,
    name,
    label,
  }
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  let playgroundNotification = null

  subscribeEnv({
    name: "BASEHUB_TOKEN",
    label: "BaseHub Read Token",
    value: process.env.BASEHUB_TOKEN,
  })

  if (!isMainV0 && !allValid && process.env.NODE_ENV !== "production") {
    const playgroundData = await basehub().query({
      _sys: {
        playgroundInfo: {
          expiresAt: true,
          editUrl: true,
          claimUrl: true,
        },
      },
    })

    if (playgroundData._sys.playgroundInfo) {
      playgroundNotification = <PlaygroundSetupModal playgroundInfo={playgroundData._sys.playgroundInfo} envs={envs} />
    }
  }

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" storageKey="mw-theme" enableSystem disableTransitionOnChange>
          {/* Site-wide photo: stays fixed while the page scrolls, shows behind the sections after the hero */}
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url(/story/band-2.jpg)" }}>
            <div className="absolute inset-0 bg-background/75" />
          </div>
          {!isMainV0 && <Toolbar />}
          {playgroundNotification}
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
