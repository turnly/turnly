import { h, JSX } from 'preact'

export const Title = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="tly-widget__title" {...props} />
)

export const SubTitle = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className="tly-widget__subtitle" {...props} />
)

export const Text = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="tly-widget__text" {...props} />
)
