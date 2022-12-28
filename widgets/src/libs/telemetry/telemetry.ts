import { __DEV__, __ENV__, __VERSION__, config } from '../../config'

export const initTelemetry = async (disable: boolean = false) => {
  let defaultResult = { mixPanel: null }

  if (__DEV__) return defaultResult

  if (!disable) {
    const [Sentry, { CaptureConsole }, { BrowserTracing }, { mixPanel }] =
      await Promise.all([
        import('@sentry/react'),
        import('@sentry/integrations'),
        import('@sentry/tracing'),
        import('./adapters/mixpanel-adapter'),
      ])

    Sentry.init({
      dsn: config.DSN,
      integrations: [
        new BrowserTracing(),
        new CaptureConsole({ levels: ['error'] }),
      ],
      sampleRate: 1,
      tracesSampleRate: 0.2,
      enabled: true,
      environment: __ENV__,
      release: __VERSION__,
    })

    return { mixPanel }
  }

  return defaultResult
}
