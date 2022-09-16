import './localization'
import './styles/styles.scss'

import { Fragment, h } from 'preact'

import AppContainer from './app-container'
import { AppPortal } from './components/app-portal'
import { LauncherPortal } from './components/launcher'
import { useInitializeSettings } from './hooks/use-initialize-settings'

const App = () => {
  useInitializeSettings()

  return (
    <Fragment>
      <AppPortal>
        <AppContainer />
      </AppPortal>
      <LauncherPortal />
    </Fragment>
  )
}

export default App
