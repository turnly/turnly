import './localization'
import './styles/styles.scss'

import { Fragment, h } from 'preact'

import AppContainer from './app-container'
import { AppPortal } from './components/app-portal'
import { LauncherPortal } from './components/launcher'
import { useRealtimeConnection } from './hooks/use-realtime-connection'
import { useVisibility } from './hooks/use-visibility'

const App = () => {
  useRealtimeConnection()

  const { isShowing } = useVisibility()

  return isShowing ? (
    <Fragment>
      <AppPortal>
        <AppContainer />
      </AppPortal>
      <LauncherPortal />
    </Fragment>
  ) : null
}

export default App
