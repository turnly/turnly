/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Http, Startup } from '@turnly/shared'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { createSources, DataSource } from 'datasources'
import { AuthGuard as authChecker } from 'middlewares/AuthGuard'
import { buildSchema } from 'type-graphql'

import { resolvers } from './resolvers'

export class Application extends Startup {
  /**
   * Path
   *
   * @description The base path for the graphql endpoint.
   */
  private readonly path = '/api/v1/widgets/graph'

  private readonly server = new Http()
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
    const schema = await buildSchema({ resolvers, authChecker })

    const apollo = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: DataSource.getCache(),
      plugins: [
        ApolloServerPluginDrainHttpServer({
          httpServer: this.server.httpServer,
        }),
      ],
      context: ({ req, res }) => ({ req, res }),
      dataSources: () => createSources(),
    })

    await apollo.start()

    apollo.applyMiddleware({
      app: this.server.app,
      path: this.path,
    })
  }
}
