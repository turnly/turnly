import type { JSX } from 'preact'

export interface IVisibilityProps extends JSX.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  setVisibility: () => void
}

export type TSetVisibilityProps = {
  setVisibility: () => void
}
