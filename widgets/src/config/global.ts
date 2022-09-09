import configuration from '../../widget.config.json'

export const config = Object.freeze({
  APP_NAME: configuration.name,
  WIDGET_ID: '__turnly_widget__',
  SCRIPT_ID: 'tly-widget',
  DSN: configuration.sentry_dsn,
  PUBLIC_URL: configuration.public_url,
  TURNLY_URL: configuration.turnly_url,
})

export const WIDGET_ID = configuration.widget_id
export const __DEV__ = process.env.NODE_ENV === 'development'
export const __ENV__ = process.env.NODE_ENV ?? 'production'
