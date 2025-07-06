import Link from "next/link"
import Date from "./date"
import CoverImage from "./cover-image"
import type { PostMetaFragment } from "./hero-post"

export function PostPreview({ _title, coverImage, date, excerpt, author, _slug }: PostMetaFragment) {
  return (
    <article className="h-full flex flex-col">
      <div className="mb-4">
        <CoverImage
          title={_title}
          slug={_slug}
          url={coverImage.url}
          width={400}
          height={250}
          className="aspect-[16/10] object-cover border-b border-border"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="newspaper-headline text-xl mb-3 leading-tight">
          <Link href={`/posts/${_slug}`} className="hover:text-accent transition-colors">
            {_title}
          </Link>
        </h3>

        <div className="newspaper-byline text-xs text-muted-foreground mb-3 border-b border-border pb-2">
          <Date dateString={date} />
        </div>

        <p className="text-sm leading-relaxed mb-4 flex-1 text-justify">{excerpt}</p>

        {author && (
          <div className="mt-auto pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs newspaper-byline text-muted-foreground">BY</span>
              <div className="text-xs font-medium">{author._title}</div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
