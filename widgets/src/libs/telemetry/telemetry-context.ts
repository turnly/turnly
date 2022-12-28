import mixpanel from 'mixpanel-browser'
import { createContext } from 'preact'

export interface ITelemetryContext {
  mixPanel: typeof mixpanel
}

export const TelemetryContext = createContext<ITelemetryContext>({
  mixPanel: null,
})
