import { h } from 'preact'
import { useMemo } from 'preact/hooks'

import { MESSAGES } from '../../data'
import { useAppearance } from '../../hooks/use-appearance'
import { useShowWidget } from '../../hooks/use-show-widget'
import styles from '../../styles/portals/launcher.module.scss'
import { Portal } from '../portal'
import { Logo } from '../svg'
import { Bubble } from './bubble'

export const LauncherPortal = () => {
  const { isShowing, setShow } = useShowWidget()
  const { appearance } = useAppearance()

  const color = useMemo(
    () => appearance.primary.color || '#ffffff',
    [appearance.primary.color]
  )

  return (
    <div className={styles['tly-launcher']}>
      <Portal id={styles['tly-launcher']} title={MESSAGES.LAUNCHER_TITLE}>
        <div className="tly-bubble-container">
          <Bubble onClick={setShow} disabled={isShowing}>
            <Logo color={color} background={color} />
          </Bubble>
        </div>
      </Portal>
    </div>
  )
}
