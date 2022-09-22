import { useEffect } from 'preact/hooks'

import { initTelemetry } from '../libs/telemetry'
import { useSettings } from './use-settings'

export const useTelemetry = () => {
  const { general } = useSettings()

  useEffect(() => {
    initTelemetry(general.disableTelemetry)
  }, [general.disableTelemetry])
}
