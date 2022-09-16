import './localization'
import './styles/styles.scss'

import { Fragment, h } from 'preact'

import AppContainer from './app-container'
import { AppPortal } from './components/app-portal'
import { LauncherPortal } from './components/launcher'

const App = () => (
  <Fragment>
    <AppPortal>
      <AppContainer />
    </AppPortal>
    <LauncherPortal />
  </Fragment>
)

export default App
