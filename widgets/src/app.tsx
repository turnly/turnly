import './localization'
import './styles/styles.scss'

import { Fragment, h } from 'preact'

import AppContainer from './app-container'
import { AppPortal } from './components/app-portal'
import { LauncherPortal } from './components/launcher'
import { useInitialize } from './hooks/use-initialize'
import { useVisibility } from './hooks/use-visibility'

const App = () => {
  useInitialize()

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
