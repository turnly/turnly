import { h } from 'preact'
import { memo } from 'preact/compat'

import { PoweredBy } from '../../powered-by'

export const Footer = memo(() => (
  <div className="tly-footer">
    <PoweredBy />
  </div>
))
