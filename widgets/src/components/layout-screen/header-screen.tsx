import clsx from 'clsx'
import { h, JSX } from 'preact'
import React from 'preact/compat'

export interface HeaderScreenProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[]
}

export const HeaderScreen = (props: HeaderScreenProps) => {
  const styles = clsx({
    ['tly-layout-screen-header']: true,
  })

  const classes = clsx(styles, props.className)

  return <div className={classes}>{props.children}</div>
}
