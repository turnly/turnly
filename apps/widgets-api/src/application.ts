/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Http, Startup } from '@turnly/shared'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { createSources, DataSource, setOrganizationId } from 'datasources'
import { AuthGuard as authChecker } from 'middlewares/auth.guard'
import { buildSchema } from 'type-graphql'

import { resolvers } from './resolvers'

export class Application extends Startup {
  /**
   * Path
   *
   * @description The base path for the graphql endpoint.
   */
  private readonly path = '/api/widgets/graph'

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
      context: ({ req, res }) => ({
        req,
        res,
        setOrganizationId,
      }),
      dataSources: () => createSources(),
    })

    await apollo.start()

    apollo.applyMiddleware({
      app: this.server.app,
      path: this.path,
    })
  }
}
