# Widgets API — Backend for Frontend

Turnly Widgets is a live ticketing solution that helps businesses improve the
customer experience by allowing them to take tickets from their websites
in an interactive and simple way.

The Widgets API is a GraphQL API that offers flexibility and the ability
to define precisely the data you want to retrieve.

To use this API, you will need to authenticate requests with the integration (widgetId)
and the corresponding customer ID in the authentication header.

The Authorization header follows this format:

```sh
Authorization: Basic <credentials>
Authorization: Basic dHdpbGlvOmFob3kh # Base64 hash
```

### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| GraphQL                             | A query language for APIs. You can use it to request the exact data you need. |
| Apollo GraphQL                      | The best way to build a production-ready TypeScript GraphQL server.           |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Type GraphQL                        | GraphQL schema and resolvers with TypeScript, using classes and decorators.   |

### Inter-services communication (services dependency)

| Name                    | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| **Add-ons**             | Used to get the integration (widget).                     |
| **Assistance Centers**  | Used to interact with locations and services.             |
| **Queuing System**      | Used to take tickets and create customers.                |
| **Custom Fields**       | Used to obtain the fields that a customer must fill out.  |
| **Teams**               | Used to get the agent assigned to a ticket.               |

### Environment Variables

| Name                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `APP_NAME`               | Used for observability of this application.    |
| `HTTP_PORT`              | Port to expose by the application.             |
| `RPC_CONSUMER_ADDRESS`   | The addresses of the rpc servers for clients.  |

**Shared Environment Variables**

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `SENTRY_ORG`             | Your organization's URL in Sentry.           |
| `SENTRY_DSN`             | Your Sentry DSN.                             |
| `SENTRY_SLACK_WEBHOOK`   | Slack webhook for observability.             |
| `FLUENT_HOST`            | FluentD host for observability.              |
| `FLUENT_PORT`            | FluentD port for observability.              |

> Most of these variables have an example value in our parent [.env.example](/.env.example).

### Getting Started

Before you begin, you must have completed steps 1 and 2 of the guide to [contribute](/CONTRIBUTING.md).

**Start**

This command will run the necessary infrastructure services for the widgets-api:

```sh
yarn devo start -s widgets-api -s addons -s assistance-centers -s queuing-system -s custom-fields -s teams --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
