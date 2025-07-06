import type React from "react"
import { PostPreview } from "./post-preview"
import type { PostMetaFragment } from "./hero-post"

export function MoreStories({
  morePosts,
  title,
}: {
  morePosts: PostMetaFragment[]
  title: React.ReactNode
}) {
  return (
    <section>
      <div className="flex items-center mb-8">
        <div className="flex-1 h-px bg-border"></div>
        <h2 className="newspaper-headline text-3xl md:text-4xl font-black tracking-tight px-6 text-primary">{title}</h2>
        <div className="flex-1 h-px bg-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {morePosts.map((post, index) => (
          <div
            key={post._id}
            className={`
            ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            border border-border bg-card hover:shadow-lg transition-shadow
          `}
          >
            <PostPreview {...post} />
          </div>
        ))}
      </div>
    </section>
  )
}
