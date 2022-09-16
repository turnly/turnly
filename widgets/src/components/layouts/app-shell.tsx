import { Fragment, h } from 'preact'

import { Notification } from '../notification'
import { Spinner } from '../spinner'
import { Footer } from './footer'
import { Header } from './header'

export const AppShell = props => (
  <Fragment>
    <Spinner />
    <Notification />
    <Header />
    <div className="tly-widget-content" {...props} />
    <Footer />
  </Fragment>
)
