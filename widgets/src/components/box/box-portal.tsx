import { h } from 'preact'

import { useVisibility } from '../../hooks/use-visibility'
import styles from '../../styles/portals/widget.module.scss'
import { Notification } from '../notification'
import { Portal } from '../portal'
import { Spinner } from '../spinner'
import { BoxFooter } from './box-footer'
import { BoxHeader } from './box-header'

export const BoxPortal = props => {
  const { isOpen } = useVisibility()

  return (
    <div
      className={`${styles['tly-widget']} ${
        isOpen ? styles['tly-widget--open'] : ''
      }`}
    >
      <Portal id={styles['tly-widget']}>
        <div className="tly-widget">
          <Spinner />
          <Notification />
          <BoxHeader />
          <div className="tly-widget-content" {...props} />
          <BoxFooter />
        </div>
      </Portal>
    </div>
  )
}
