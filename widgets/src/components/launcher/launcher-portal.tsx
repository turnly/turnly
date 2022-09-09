import { h } from 'preact'

import { IVisibilityProps } from '../../@types/shared'
import { MESSAGES } from '../../data'
import styles from '../../styles/portals/launcher.module.scss'
import { Portal } from '../portal'
import { Logo } from '../svg'
import { Bubble } from './bubble'

export const LauncherPortal = ({ isOpen, setVisibility }: IVisibilityProps) => (
  <div className={styles['tly-launcher']}>
    <Portal id={styles['tly-launcher']} title={MESSAGES.LAUNCHER_TITLE}>
      <div className="button__container">
        <Bubble onClick={setVisibility} disabled={isOpen}>
          <Logo color="#ffffff" background="#ffffff" />
        </Bubble>
      </div>
    </Portal>
  </div>
)
