import { useContext } from 'preact/compat'

import { TelemetryContext } from '../libs/telemetry/telemetry-context'
import { i18n } from '../localization'

export const useTelemetry = () => {
  const { mixPanel } = useContext(TelemetryContext)

  return {
    tracker: (eventTitle: string) => {
      mixPanel &&
        mixPanel.track(
          i18n.t('telemetry.customer_action', { action: eventTitle })
        )
    },
  }
}
