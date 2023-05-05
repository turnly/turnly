/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoClient, mongoConfig, Startup } from '@turnly/core'

export class Application extends Startup {
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()

    await this.setupDatabase()
    await this.setupPresentations()
  }

  private async setupPresentations(): Promise<void> {
    const { server } = await import('./server')

    server.setup()
  }

  private async setupDatabase(): Promise<void> {
    await new MongoClient(mongoConfig).connect()
  }
}
