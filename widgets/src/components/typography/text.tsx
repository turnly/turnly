import clsx from 'clsx'
import { h, JSX } from 'preact'

export interface TextProps extends JSX.HTMLAttributes<HTMLParagraphElement> {
  isSmall: boolean
  isDanger: boolean
  isUpper: boolean
  isStrong: boolean
  isDisabled: boolean
  hasGaps: boolean
}

export const Text = ({
  isSmall,
  isDanger,
  isUpper,
  isStrong,
  isDisabled,
  hasGaps = true,
  ...attributes
}: Partial<TextProps>) => {
  const styles = clsx({
    ['tly-typography-text']: true,
    ['tly-typography-text--has-gaps']: hasGaps,
    ['tly-typography-text--is-small']: isSmall,
    ['tly-typography-text--is-danger']: isDanger,
    ['tly-typography-text--is-strong']: isStrong,
    ['tly-typography-text--is-upper']: isUpper,
    ['tly-typography-text--is-disabled']: isDisabled,
  })

  const classes = clsx(styles, attributes.className)

  return <p {...attributes} className={classes} />
}
