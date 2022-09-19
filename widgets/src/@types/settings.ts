export interface Settings {
  appearance: {
    zIndex: number
    position: 'left' | 'right'
    design: 'flat' | 'rounded'
    primary: {
      color: string
      background: string
    }
    secondary: {
      color: string
      background: string
    }
  }
  locale: string
  disableTelemetry: boolean
  widgetId: string
  organizationURL: string
}
