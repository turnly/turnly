import { h } from 'preact'

import { useVisibility } from '../hooks/use-visibility'
import styles from '../styles/portals/widget.module.scss'
import { Portal } from './portal'

export const AppPortal = props => {
  const { isOpen } = useVisibility()

  return (
    <div
      className={`${styles['tly-widget']} ${
        isOpen ? styles['tly-widget--open'] : ''
      }`}
    >
      <Portal id={styles['tly-widget']}>
        <div className="tly-widget" {...props} />
      </Portal>
    </div>
  )
}
