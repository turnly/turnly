import { h } from 'preact'
import { HTMLAttributes, useEffect, useState } from 'preact/compat'

import { useSettings } from '../../hooks/use-settings'
import { initTelemetry } from './telemetry'
import { TelemetryContext } from './telemetry-context'

export interface TelemetryProps extends HTMLAttributes<HTMLDivElement> {}

export const Telemetry = ({ children }: TelemetryProps) => {
  const [mixPanel, setMixPanel] = useState(null)
  const { general } = useSettings()

  useEffect(() => {
    const loadTelemetry = async () => {
      const result = await initTelemetry(general.disableTelemetry)

      setMixPanel(result.mixPanel as any)
    }

    loadTelemetry()
  }, [])

  return (
    <TelemetryContext.Provider value={{ mixPanel }}>
      {children}
    </TelemetryContext.Provider>
  )
}
