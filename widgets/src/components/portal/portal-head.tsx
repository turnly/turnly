import { Fragment, h } from 'preact'

import { STYLESHEET } from '../../config'
import { MESSAGES } from '../../data'

type TPortalHeadProps = {
  title?: string
}

export const PortalHead = ({ title }: TPortalHeadProps) => (
  <Fragment>
    <title>{title ?? MESSAGES.WIDGET_TITLE}</title>

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="author" content="Turnly" />
    <meta
      name="copyright"
      content="Copyright (C) 202s by Turnly Inc. All Rights Reserved."
    />

    <link rel="stylesheet" href={STYLESHEET} />
  </Fragment>
)
