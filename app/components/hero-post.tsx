import Link from "next/link"
import Date from "./date"
import CoverImage from "./cover-image"
import Avatar from "./avatar"
import { fragmentOn } from "basehub"

export const PostMetaFragment = fragmentOn("PostsItem", {
  _id: true,
  _slug: true,
  _title: true,
  author: {
    _title: true,
    avatar: {
      url: true,
      alt: true,
    },
  },
  coverImage: {
    url: true,
    alt: true,
    aspectRatio: true,
  },
  date: true,
  excerpt: true,
})

export type PostMetaFragment = fragmentOn.infer<typeof PostMetaFragment>

export function HeroPost({ _title, coverImage, date, excerpt, author, _slug }: PostMetaFragment) {
  return (
    <section className="border-b-2 border-primary pb-8 mb-8">
      {/* Featured Article Banner */}
      <div className="bg-primary text-primary-foreground px-4 py-2 mb-6">
        <div className="flex items-center justify-center">
          <span className="newspaper-byline text-sm font-bold tracking-wider">★ FEATURED ARTICLE ★</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="newspaper-headline text-4xl lg:text-5xl leading-none mb-4 text-primary">
            <Link href={`/posts/${_slug}`} className="hover:text-accent transition-colors">
              {_title}
            </Link>
          </h1>

          <div className="newspaper-byline text-muted-foreground mb-4 flex items-center gap-4">
            <Date dateString={date} />
            {author && (
              <span className="text-sm">
                By <span className="font-medium">{author._title}</span>
              </span>
            )}
          </div>

          <p className="text-lg leading-relaxed mb-6 newspaper-column text-justify">{excerpt}</p>

          <Link
            href={`/posts/${_slug}`}
            className="inline-block bg-accent text-accent-foreground px-6 py-2 text-sm font-bold newspaper-byline hover:bg-accent/90 transition-colors"
          >
            Continue Reading →
          </Link>
        </div>

        <div className="space-y-4">
          <CoverImage
            title={_title}
            slug={_slug}
            url={coverImage.url}
            width={600}
            height={400}
            className="border-2 border-border"
            priority
          />
          {author && (
            <div className="border border-border p-4 bg-muted/30">
              <div className="text-xs newspaper-byline text-muted-foreground mb-2">CONTRIBUTOR</div>
              <Avatar title={author._title} url={author.avatar.url} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
