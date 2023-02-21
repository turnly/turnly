/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Http, Startup } from '@turnly/core'
import { ApolloServerPluginDrainHttpServer as Plugin } from 'apollo-server-core'
import { ApolloServer, Config, ExpressContext } from 'apollo-server-express'
import { buildSchema, BuildSchemaOptions } from 'type-graphql'

import { DataSource } from './base.ds'

/**
 * Graph
 *
 * @description Minimal apollo server implementation for start a production ready graphql server.
 */
export class Graph extends Startup {
  private readonly server = new Http()

  public constructor(
    private readonly deps: {
      path: string
      schema: BuildSchemaOptions
      apollo?: Config<ExpressContext>
    }
  ) {
    super()
  }

  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()
    this.server.setup()

    await this.setupPresentations()
    await this.server.listen()
  }

  private async setupPresentations(): Promise<void> {
    const schema = await buildSchema({ ...this.deps.schema })

    const apollo = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: DataSource.getCache(),
      plugins: [Plugin({ httpServer: this.server.httpServer })],
      ...this.deps.apollo,
    })

    await apollo.start()

    apollo.applyMiddleware({ app: this.server.app, path: this.deps.path })
  }
}
