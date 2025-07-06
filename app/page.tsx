import { basehub } from "basehub"
import { Intro } from "./components/intro"
import { Newsletter } from "./components/newsletter"
import { ServicesSection } from "./components/services-section"
import { ContactSection } from "./components/contact-section"
import type { Metadata } from "next"

export const dynamic = "force-static"
export const revalidate = 30

export async function generateMetadata(): Promise<Metadata> {
  const data = await basehub().query({
    meta: {
      title: true,
      description: true,
      ogImage: {
        url: true,
      },
    },
  })

  return {
    title: data.meta?.title || `Michael Webster - Bay Area Jazz Saxophonist`,
    description:
      data.meta?.description ||
      `Professional alto saxophone lessons and live jazz performances in the Bay Area. Master's in Jazz Studies.`,
    generator: "v0.dev",
    openGraph: {
      title: data.meta?.title || `Michael Webster - Bay Area Jazz Saxophonist`,
      description:
        data.meta?.description ||
        `Professional alto saxophone lessons and live jazz performances in the Bay Area. Master's in Jazz Studies.`,
      images: data.meta?.ogImage?.url
        ? [
            {
              url: data.meta.ogImage.url,
              width: 1200,
              height: 630,
              alt: data.meta?.title || `Michael Webster - Bay Area Jazz Saxophonist`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta?.title || `Michael Webster - Bay Area Jazz Saxophonist`,
      description:
        data.meta?.description ||
        `Professional alto saxophone lessons and live jazz performances in the Bay Area. Master's in Jazz Studies.`,
      images: data.meta?.ogImage?.url ? [data.meta.ogImage.url] : [],
    },
  }
}

export default async function Page() {
  const data = await basehub().query({
    newsletter: {
      subscribers: {
        ingestKey: true,
        schema: true,
      },
    },
  })

  return (
    <main>
      <Intro />
      <ServicesSection />
      <ContactSection />
      <Newsletter newsletter={data.newsletter.subscribers} />
    </main>
  )
}
