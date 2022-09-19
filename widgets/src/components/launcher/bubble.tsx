import { h, JSX } from 'preact'

export const Bubble = (props: JSX.HTMLAttributes<HTMLButtonElement>) => (
  <button className="tly-bubble" type="button" {...props} />
)
