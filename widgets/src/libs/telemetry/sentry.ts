import { CaptureConsole } from '@sentry/integrations'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import { __ENV__, config } from '../../config'
import { __VERSION__ } from '../../config/version'

export const initializeSentry = (enabled: boolean = true) => {
  Sentry.init({
    dsn: config.DSN,
    integrations: [
      new BrowserTracing(),
      new CaptureConsole({ levels: ['error'] }),
    ],
    sampleRate: 1,
    tracesSampleRate: 0.2,
    enabled,
    environment: __ENV__,
    release: __VERSION__,
  })
}
