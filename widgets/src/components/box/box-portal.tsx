import { h } from 'preact'

import { IVisibilityProps } from '../../@types/shared'
import styles from '../../styles/portals/widget.module.scss'
import { Portal } from '../portal'
import { BoxFooter } from './box-footer'
import { BoxHeader } from './box-header'

export const BoxPortal = ({
  isOpen,
  setVisibility,
  ...props
}: IVisibilityProps) => (
  <div
    className={`${styles['tly-widget']} ${
      isOpen ? styles['tly-widget--open'] : ''
    }`}
  >
    <Portal id={styles['tly-widget']}>
      <div className="tly-widget">
        <BoxHeader {...{ setVisibility }} />
        <div className="tly-widget-content" {...props} />
        <BoxFooter />
      </div>
    </Portal>
  </div>
)
