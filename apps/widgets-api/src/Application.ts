import { Http, Startup } from '@turnly/shared'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { AuthorizedGuard as authChecker } from 'middlewares/AuthorizedGuard'
import { buildSchema } from 'type-graphql'

import { resolvers } from './resolvers'

export class Application extends Startup {
  private readonly server = new Http()
  /**
   * Sets up application.
   *
   * @memberof Startup
   */
  public async setup(): Promise<void> {
    this.setupMonitoring()

    await this.setupPresentations()
  }

  private async setupPresentations(): Promise<void> {
    this.server.setup()

    const schema = await buildSchema({ resolvers, authChecker })

    const apollo = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [
        ApolloServerPluginDrainHttpServer({
          httpServer: this.server.httpServer,
        }),
      ],
      context: ({ req, res }) => ({ req, res }),
    })

    await apollo.start()

    apollo.applyMiddleware({ app: this.server.app })

    await this.server.listen()
  }
}
