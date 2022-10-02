import clsx from 'clsx'
import { h, JSX } from 'preact'

import { CurrentLocation } from '../../current-location'

export interface HeaderScreenProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[] | null
}

export const HeaderScreen = ({ children, ...props }: HeaderScreenProps) => {
  const styles = clsx({
    ['tly-layout-screen-header']: true,
  })

  const classes = clsx(styles, props.className)

  return (
    <div {...props} className={classes}>
      <CurrentLocation />
      {children}
    </div>
  )
}
