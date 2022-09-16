import { h } from 'preact'

import { MESSAGES } from '../../data'
import { useShowWidget } from '../../hooks/use-show-widget'
import styles from '../../styles/portals/launcher.module.scss'
import { Portal } from '../portal'
import { Logo } from '../svg'
import { Bubble } from './bubble'

export const LauncherPortal = () => {
  const { isShowing, setShow } = useShowWidget()

  return (
    <div className={styles['tly-launcher']}>
      <Portal id={styles['tly-launcher']} title={MESSAGES.LAUNCHER_TITLE}>
        <div className="bubble__container">
          <Bubble onClick={setShow} disabled={isShowing}>
            <Logo color="#ffffff" background="#ffffff" />
          </Bubble>
        </div>
      </Portal>
    </div>
  )
}
