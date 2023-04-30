<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Helpdesk API — Backend for Frontend

Turnly Helpdesk

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
| **Channels**             | Used to get the integration (helpdesk).                     |
| **Assistance Centers**  | Used to interact with locations and services.             |
| **Queuing System**      | Used to take tickets and create customers.                |
| **Custom Fields**       | Used to obtain the fields that a customer must fill out.  |
| **Memberships**               | Used to get the agent assigned to a ticket.               |

### Environment Variables

| Name                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `APP_NAME`               | Used for observability of this application.    |
| `APP_PORT`              | Port to expose by the application.             |
| `GRPC_CONSUMER_ADDRESS`   | The addresses of the rpc servers for clients.  |

**Shared Environment Variables**

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `SENTRY_DSN`             | Your Sentry DSN.                             |
| `FLUENT_HOST`            | FluentD host for observability.              |
| `FLUENT_PORT`            | FluentD port for observability.              |

> Most of these variables have an example value in our parent [.env.example](/.env.example).

### Getting Started

Before you begin, you must have completed steps 1 and 2 of the guide to [contribute](/CONTRIBUTING.md).

**Start**

This command will run the necessary infrastructure services for the helpdesk-api:

```sh
yarn devo start -s helpdesk-api -s addons -s assistance-centers -s queuing-system -s custom-fields --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
