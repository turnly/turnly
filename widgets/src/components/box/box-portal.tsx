import { h } from 'preact'

import { useVisibility } from '../../hooks/use-visibility'
import styles from '../../styles/portals/widget.module.scss'
import { Footer, Header } from '../layouts'
import { Notification } from '../notification'
import { Portal } from '../portal'
import { Spinner } from '../spinner'

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
          <Header />
          <div className="tly-widget-content" {...props} />
          <Footer />
        </div>
      </Portal>
    </div>
  )
}
