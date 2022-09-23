import clsx from 'clsx'
import { h, JSX } from 'preact'

export interface TitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
  hasGaps: boolean
  level: 1 | 2 | 3 | 4 | 5
  isUpper: boolean
  isDisabled: boolean
  isDanger: boolean
  isWarning: boolean
}

export const Title = ({
  hasGaps = true,
  level = 2,
  isUpper,
  isDisabled,
  isDanger,
  isWarning,
  ...attributes
}: Partial<TitleProps>) => {
  const styles = clsx({
    ['tly-typography-title']: true,
    ['tly-typography-title--has-gaps']: hasGaps,
    ['tly-typography-title--is-upper']: isUpper,
    ['tly-typography-title--is-disabled']: isDisabled,
    ['tly-typography-title--is-danger']: isDanger,
    ['tly-typography-title--is-warning']: isWarning,
    ['tly-typography-title--is-h1']: level === 1,
    ['tly-typography-title--is-h2']: level === 2,
    ['tly-typography-title--is-h3']: level === 3,
    ['tly-typography-title--is-h4']: level === 4,
    ['tly-typography-title--is-h5']: level === 5,
  })

  const Tag: any = `h${level}`
  const classes = clsx(styles, attributes.className)

  return <Tag {...attributes} className={classes} />
}
