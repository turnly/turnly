import { h, render } from 'preact'
import { lazy, Suspense } from 'preact/compat'

import { __DEV__, config } from './config'
import { ERROR_MESSAGES } from './data'

const App = lazy(() => import('./app'))

/**
 * Debugging in development
 *
 * @throws If you don't use CI to build a production widget,
 * make sure you don't include this package.
 */
if (__DEV__) import('preact/debug') // @patch-line

/**
 * Widget
 *
 * @description The main class of the widget with the responsibility of
 * centralizing the creation of the elements in DOM, adding styles, and
 * rendering a new app for the current client.
 *
 * @author Turnly
 */
export class Widget {
  /**
   * Initialize
   *
   * @description Render a new app and set events manager
   */
  public mount() {
    const widget = this.render()

    window.__TURNLY_WIDGET_LOADED__ = true

    return widget
  }

  private get app() {
    return (
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    )
  }

  /**
   * Create DOM Element
   *
   * @description Create a new element in the DOM to load the instance.
   */
  private render(id = config.WIDGET_ID) {
    if (this.widgetIsLoaded(id))
      throw new Error(ERROR_MESSAGES.WIDGET_IS_LOADED)

    const widget = document.createElement('div')
    widget.id = id

    document.body.appendChild(widget)

    render(this.app, widget!)

    return widget
  }

  /**
   * Is Loaded
   *
   * @description Verify that no previous instance of the widget was created
   * or that there is an element in the DOM with the same ID.
   */
  public widgetIsLoaded = (id: string) => {
    const widget = document.getElementById(id)
    const isWidget = Boolean(widget ?? window.__TURNLY_WIDGET_LOADED__)

    return isWidget
  }
}
