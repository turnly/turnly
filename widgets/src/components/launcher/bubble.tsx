import clsx from 'clsx'
import { h, JSX } from 'preact'

import { useAppearance } from '../../hooks/use-appearance'

export const Bubble = (props: JSX.HTMLAttributes<HTMLButtonElement>) => {
  const { isFlat } = useAppearance()

  const classes = clsx({
    ['tly-bubble']: true,
    ['tly-bubble--is-flat']: isFlat,
  })

  return (
    <button
      {...props}
      className={clsx(classes, props.className)}
      type="button"
    />
  )
}
