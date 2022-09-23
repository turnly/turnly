import clsx from 'clsx'
import { h, JSX } from 'preact'

export interface FooterScreenProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[]
}

export const FooterScreen = (props: FooterScreenProps) => {
  const styles = clsx({
    ['tly-layout-screen-footer']: true,
  })

  const classes = clsx(styles, props.className)

  return <div {...props} className={classes} />
}
