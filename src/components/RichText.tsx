interface RichTextProps {
  html: string
  className?: string
}

/** Translation strings contain trusted, author-controlled <b>/<br> markup — safe to inject. */
export function RichText({ html, className }: RichTextProps) {
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
