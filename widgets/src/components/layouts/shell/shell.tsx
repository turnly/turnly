import { Fragment, h } from 'preact'

import { Notification } from '../../notification'
import { Spinner } from '../../spinner'
import { Footer } from './footer-shell'
import { Header } from './header-shell'

export const Shell = props => (
  <Fragment>
    <Spinner />
    <Notification />
    <Header />
    <div className="tly-widget-content" {...props} />
    <Footer />
  </Fragment>
)
