export type Settings = {
  locale: string
  theme: {
    zIndex: number
    primary: string
    secondary: string
    color: string
    position: 'left' | 'right'
    design: 'flat' | 'rounded'
    box: {
      offset: {
        horizontal: string
        vertical: string
      }
      background: string
    }
    launcher: {
      color: string
      background: string
    }
  }
  widget: {
    connectOnLoad: boolean
    hideWhenOffline: boolean
    hideWhenUnavailableLocations: boolean
    disableTelemetry: boolean
  }
}
