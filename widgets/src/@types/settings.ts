export interface Appearance {
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

export interface General {
  locale: string
  disableTelemetry: boolean
}

export interface About {
  widgetId: string
  organizationURL: string
}

export interface Settings {
  general: General
  appearance: Appearance
  about: About
}
