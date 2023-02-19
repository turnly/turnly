/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import './libs/warnings'

import * as Sentry from '@sentry/node'
import * as SentryTracing from '@sentry/tracing'
import { Environment } from '@turnly/common'

import { config } from './config'
import { SentryEvent } from './libs/sentry-event'
import { Router } from './libs/types'

export class Monitor {
  private static setup(options: Sentry.NodeOptions) {
    if (config.SENTRY_DSN) {
      Sentry.init({
        dsn: config.SENTRY_DSN,
        environment: Environment.getEnv(),
        tracesSampleRate: 1.0,
        beforeSend: event => SentryEvent.handle(event),
        ...options,
      })
    }
  }

  public static forInternal(name: string = process.env.APP_NAME as string) {
    this.setup({ serverName: name })

    return this
  }

  public static forHttp(options: { name?: string; app: Router }) {
    this.setup({
      serverName: options.name || process.env.APP_NAME,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new SentryTracing.Integrations.Express({ app: options.app }),
      ],
    })

    return this
  }

  public static requestHandler(
    options?: Sentry.Handlers.RequestHandlerOptions
  ) {
    return Sentry.Handlers.requestHandler(options)
  }

  public static tracingHandler() {
    return Sentry.Handlers.tracingHandler()
  }
}
