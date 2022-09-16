import { h } from 'preact'

import { useShowWidget } from '../hooks/use-show-widget'
import styles from '../styles/portals/widget.module.scss'
import { Portal } from './portal'

export const AppPortal = props => {
  const { isShowing } = useShowWidget()

  return (
    <div
      className={`${styles['tly-widget']} ${
        isShowing ? styles['tly-widget--open'] : ''
      }`}
    >
      <Portal id={styles['tly-widget']}>
        <div className="tly-widget" {...props} />
      </Portal>
    </div>
  )
}
