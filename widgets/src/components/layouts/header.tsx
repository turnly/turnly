import { h } from 'preact'

import { useShowWidget } from '../../hooks/use-show-widget'
import { useTitle } from '../../hooks/use-title'
import { CloseIcon } from '../svg'

export const Header = () => {
  const { setHide } = useShowWidget()
  const { title } = useTitle()

  return (
    <div className="tly-widget-header">
      <div className="tly-widget-header-back" />
      <h1 className="tly-widget-header-title">{title}</h1>
      <div className="tly-widget-actions">
        <button className="tly-widget-btn-close" onClick={setHide}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
