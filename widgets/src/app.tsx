import './localization'
import './styles/styles.scss'

import { Fragment, FunctionalComponent, h } from 'preact'

import { BoxPortal } from './components/box'
import { LauncherPortal } from './components/launcher'
import { useVisibility } from './hooks/use-visibility'
import { Router } from './routes'

type AppProps = {
  widgetId: string
  url: string
}

const App: FunctionalComponent<AppProps> = () => {
  const { isOpen } = useVisibility()

  return (
    <Fragment>
      <BoxPortal>{isOpen && <Router />}</BoxPortal>
      <LauncherPortal />
    </Fragment>
  )
}

export default App
