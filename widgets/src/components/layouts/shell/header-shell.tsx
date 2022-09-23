import { h } from 'preact'

import { useShowWidget } from '../../../hooks/use-show-widget'
import { useTitle } from '../../../hooks/use-title'
import { CloseIcon } from '../../svg'
import { Title } from '../../typography'

export const Header = () => {
  const { setHide } = useShowWidget()
  const { title } = useTitle()

  return (
    <div className="tly-header">
      <div className="tly-header-back" />
      <Title level={5} hasGaps={false}>
        {title}
      </Title>
      <div className="tly-header-actions">
        <button className="tly-header-btn-close" onClick={setHide}>
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}
