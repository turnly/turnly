import './localization'
import './styles/styles.scss'

import { Fragment, FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'

import { BoxPortal } from './components/box'
import { LauncherPortal } from './components/launcher'
import { Router } from './routes'
import { $bus } from './services/event-bus'

type AppProps = {
  widgetId: string
  url: string
}

const App: FunctionalComponent<AppProps> = () => {
  const [isOpen, setOpen] = useState(false)

  const setVisibility = () => {
    setOpen(prevOpen => {
      $bus.visibility.dispatch({ isVisible: !prevOpen })

      return !prevOpen
    })
  }

  const params = {
    isOpen,
    setVisibility,
  }

  return (
    <Fragment>
      <BoxPortal {...params}>{isOpen && <Router />}</BoxPortal>
      <LauncherPortal {...params} />
    </Fragment>
  )
}

export default App
