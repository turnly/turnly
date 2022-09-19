import { h } from 'preact'
import { memo } from 'preact/compat'

import { config } from '../config'
import { useTranslation } from '../localization'
import { Logo } from './svg'

export const PoweredBy = memo(() => {
  const { translate } = useTranslation()

  return (
    <a
      className="tly-powered-by"
      href={config.TURNLY_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <small className="tly-powered-by-text">{translate('powered_by')}</small>

      <Logo />
    </a>
  )
})
