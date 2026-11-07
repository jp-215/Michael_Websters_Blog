import { RichText } from "basehub/react-rich-text"
import { CodeBlock } from "basehub/react-code-block"
import CoverImage from "@/app/components/cover-image"
import Avatar from "@/app/components/avatar"
import Date from "@/app/components/date"
import { BodyImage } from "./body-image"
import { fragmentOn } from "basehub"
import { PostMetaFragment } from "./hero-post"

export const PostFragment = fragmentOn("PostsItem", {
  ...PostMetaFragment,
  body: { json: { content: true } },
})

export type PostFragment = fragmentOn.infer<typeof PostFragment>

export function Post({ _title, author, date, coverImage, body }: PostFragment) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8 pb-8 border-b-2 border-primary">
        <div className="text-center mb-6">
          <div className="newspaper-byline text-xs text-muted-foreground mb-2">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="newspaper-headline text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-primary mb-4">
            {_title}
          </h1>
          <div className="newspaper-divider mb-6"></div>
        </div>

        {/* Byline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {author && (
            <div className="flex items-center gap-4">
              <Avatar title={author._title} url={author.avatar.url} />
              <div>
                <div className="newspaper-byline text-xs text-muted-foreground">CORRESPONDENT</div>
                <div className="font-medium">{author._title}</div>
              </div>
            </div>
          )}
          <div className="newspaper-byline text-sm text-muted-foreground">
            <Date dateString={date} />
          </div>
        </div>

        {/* Featured Image */}
        <div className="border-2 border-border">
          <CoverImage title={_title} url={coverImage.url} width={800} height={500} className="w-full" priority />
        </div>
      </header>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none">
        <div className="newspaper-column text-justify leading-relaxed">
          <RichText
            components={{
              img: (props) => <BodyImage {...props} />,
              pre: ({ code, language }) => (
                <div className="not-prose my-6">
                  <CodeBlock theme="github-light" snippets={[{ code, language }]} />
                </div>
              ),
              li: (props) => <li {...props} className="[&>p]:my-0" />,
              h1: (props) => (
                <h1
                  {...props}
                  className="newspaper-headline text-3xl font-black text-primary border-b border-border pb-2 mb-4"
                />
              ),
              h2: (props) => <h2 {...props} className="newspaper-headline text-2xl font-bold text-primary mt-8 mb-4" />,
              h3: (props) => <h3 {...props} className="newspaper-headline text-xl font-bold text-primary mt-6 mb-3" />,
              blockquote: (props) => (
                <blockquote {...props} className="border-l-4 border-cherry bg-muted/30 pl-6 py-4 my-6 italic text-lg" />
              ),
              p: (props) => <p {...props} className="mb-4 text-justify leading-relaxed" />,
            }}
          >
            {body.json.content}
          </RichText>
        </div>
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="text-center">
          <div className="newspaper-byline text-xs text-muted-foreground">END OF ARTICLE</div>
        </div>
      </footer>
    </article>
  )
}
