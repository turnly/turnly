import { useEffect } from 'preact/hooks'

import { initTelemetry } from '../libs/telemetry'

export const useTelemetry = (enabled = true) => {
  useEffect(() => {
    initTelemetry(enabled)

    return () => {
      initTelemetry(false)
    }
  }, [enabled])
}
