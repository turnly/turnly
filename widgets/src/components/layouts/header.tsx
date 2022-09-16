import { h } from 'preact'

import { useTitle } from '../../hooks/use-title'
import { useVisibility } from '../../hooks/use-visibility'
import { CloseIcon } from '../svg'

export const Header = () => {
  const { setClose } = useVisibility()
  const { title } = useTitle()

  return (
    <div className="tly-widget-header">
      <div className="tly-widget-header-back" />
      <h1 className="tly-widget-header-title">{title}</h1>
      <div className="tly-widget-actions">
        <button className="tly-widget-btn-close" onClick={setClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
