import clsx from 'clsx'
import { h } from 'preact'

import { useShowWidget } from '../hooks/use-show-widget'
import styles from '../styles/portals/widget.module.scss'
import { Portal } from './portal'

export const AppPortal = props => {
  const { isShowing } = useShowWidget()

  const classes = clsx({
    [styles['tly-widget']]: true,
    [styles['tly-widget--is-open']]: isShowing,
  })

  return (
    <div className={classes}>
      <Portal id={styles['tly-widget']}>
        <div className="tly-widget" {...props} />
      </Portal>
    </div>
  )
}
