import { useEffect } from 'preact/hooks'

import { initTelemetry } from '../libs/telemetry'
import { useSettings } from './use-settings'

export const useTelemetry = () => {
  const { disableTelemetry } = useSettings()

  useEffect(() => {
    initTelemetry(disableTelemetry)
  }, [disableTelemetry])
}
