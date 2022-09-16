export interface Settings {
  locale: string
  appearance: {
    zIndex: number
    primary: string
    secondary: string
    color: string
    position: 'left' | 'right'
    design: 'flat' | 'rounded'
    box: {
      color: string
      background: string
    }
    launcher: {
      color: string
      background: string
    }
  }
  disableTelemetry: boolean
}
