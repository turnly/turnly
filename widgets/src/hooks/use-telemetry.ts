import { useContext } from 'preact/compat'

import { useSession } from '../hooks/use-session'
import { TelemetryContext } from '../libs/telemetry/telemetry-context'

export const useTelemetry = () => {
  const { mixPanel } = useContext(TelemetryContext)
  const { customer } = useSession()

  return {
    tracker: (eventTitle: string) => {
      mixPanel &&
        mixPanel.track(
          `Customer [ID: ${customer.id}] entried to: (${eventTitle})`
        )
    },
  }
}
