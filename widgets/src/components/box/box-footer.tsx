import { h } from 'preact'

import { useTranslation } from '../../localization'
import { Logo } from '../svg'

export const BoxFooter = () => {
  const { translate } = useTranslation()

  return (
    <div className="tly-widget-footer">
      <a
        className="tly-widget-powered-by"
        href="https://turnly.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo />
        <small className="tly-widget-powered-by-text">
          {translate('powered_by')}
        </small>
      </a>
    </div>
  )
}
