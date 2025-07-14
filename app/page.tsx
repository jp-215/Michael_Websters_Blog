import { basehub } from "basehub"
import { Intro } from "./components/intro"
import { ServicesSection } from "./components/services-section"
import { ContactSection } from "./components/contact-section"
import { Newsletter } from "./components/newsletter"

// Fallback data when BaseHub is not available
const fallbackData = {
  posts: {
    items: [],
  },
}

export default async function Page() {
  let data = fallbackData

  try {
    if (process.env.BASEHUB_TOKEN) {
      data = await basehub().query({
        posts: {
          items: {
            _title: true,
            _slug: true,
            excerpt: true,
            coverImage: {
              url: true,
              alt: true,
            },
            author: {
              name: true,
              picture: {
                url: true,
              },
            },
            _sys: {
              createdAt: true,
            },
          },
        },
      })
    }
  } catch (error) {
    console.warn("BaseHub query failed, using fallback data:", error)
    data = fallbackData
  }

  return (
    <div className="min-h-screen">
      <Intro />
      <ServicesSection />
      <ContactSection />
      <Newsletter />
    </div>
  )
}
