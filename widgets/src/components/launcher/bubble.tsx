import { h, JSX } from 'preact'

export const Bubble = (props: JSX.HTMLAttributes<HTMLButtonElement>) => (
  <button className="button" type="button" {...props} />
)
