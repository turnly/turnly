import './localization'
import './styles/styles.scss'
import 'react-phone-input-2/lib/bootstrap.css'

import { Fragment, h } from 'preact'
import { lazy, Suspense } from 'preact/compat'

import { AppPortal } from './components/app-portal'
import { LauncherPortal } from './components/launcher'
import { Loading } from './components/spinner'
import { useInitialize } from './hooks/use-initialize'
import { useVisibility } from './hooks/use-visibility'

const AppContainer = lazy(() => import('./container'))

const App = () => {
  useInitialize()

  const { isShowing } = useVisibility()

  return isShowing ? (
    <Fragment>
      <AppPortal>
        <Suspense fallback={<Loading />}>
          <AppContainer />
        </Suspense>
      </AppPortal>
      <LauncherPortal />
    </Fragment>
  ) : null
}

export default App
