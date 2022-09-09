import { h } from 'preact'

import { TSetVisibilityProps } from '../../@types/shared'
import { MESSAGES } from '../../data'
import { CloseIcon, Logo } from '../svg'

export const BoxHeader = ({ setVisibility }: TSetVisibilityProps) => (
  <div className="tly-widget-header">
    <h1>
      <Logo />
      <span>{MESSAGES.WIDGET_TITLE}</span>
    </h1>
    <div className="tly-widget-actions">
      <button className="close" onClick={setVisibility}>
        <CloseIcon />
      </button>
    </div>
  </div>
)
