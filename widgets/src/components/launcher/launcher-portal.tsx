import { h } from 'preact'

import { MESSAGES } from '../../data'
import { useVisibility } from '../../hooks/use-visibility'
import styles from '../../styles/portals/launcher.module.scss'
import { Portal } from '../portal'
import { Logo } from '../svg'
import { Bubble } from './bubble'

export const LauncherPortal = () => {
  const { isOpen, setOpen } = useVisibility()

  return (
    <div className={styles['tly-launcher']}>
      <Portal id={styles['tly-launcher']} title={MESSAGES.LAUNCHER_TITLE}>
        <div className="bubble__container">
          <Bubble onClick={setOpen} disabled={isOpen}>
            <Logo color="#ffffff" background="#ffffff" />
          </Bubble>
        </div>
      </Portal>
    </div>
  )
}
