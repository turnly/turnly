/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler, Logger, Monitoring } from '@turnly/observability'
import { Application as ExpressApplication } from 'express'

import { config } from '../config'

export abstract class Startup {
  private isMonitoringEnabled = false
  private interval: NodeJS.Timeout

  public constructor(
    private readonly appName: string = config.get('app.name')
  ) {
    this.setupExceptionHandler()
    this.warnings()
  }

  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public abstract setup(): Promise<void>

  private warnings(): void {
    if (!this.isMonitoringEnabled) {
      this.interval = setInterval(() => {
        Logger.error(
          'Application is not being monitored. Please enable monitoring.'
        )

        Logger.warn(
          'Please ensure that you call the `this.setupMonitoring()` method in your setup method.'
        )
      }, 4000)
    }
  }

  /**
   * Sets up application monitoring and error tracking.
   *
   * @memberof Startup
   */
  protected setupMonitoring(app?: ExpressApplication): void {
    this.isMonitoringEnabled = true
    clearInterval(this.interval)

    app
      ? Monitoring.Monitor.forHttp({ name: this.appName, app })
      : Monitoring.Monitor.forInternal(this.appName)
  }

  /**
   * Sets up monitoring for uncaught exception.
   *
   * @memberof Startup
   */
  protected setupExceptionHandler(): void {
    ExceptionHandler.setNamespace(this.appName)
  }
}
