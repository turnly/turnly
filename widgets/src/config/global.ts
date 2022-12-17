import configuration from '../../widget.config.json'

export const config = Object.freeze({
  APP_NAME: configuration.name,
  WIDGET_ID: '__turnly_widget__',
  SCRIPT_ID: 'tly-widget',
  SCRIPT_TLY_URL: 'data-tly-url',
  SCRIPT_TLY_WIDGET_ID: 'data-tly-widget-id',
  DSN: configuration.sentry_dsn,
  PUBLIC_URL: configuration.public_url,
  TURNLY_URL: configuration.turnly_url,
  GOOGLE_MAPS_URL: configuration.google_maps_url,
})

export const __DEV__ = process.env.NODE_ENV === 'development'
export const __ENV__ = process.env.NODE_ENV ?? 'production'
