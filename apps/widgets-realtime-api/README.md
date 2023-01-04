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

# Widgets Real Time Messaging API (RTM)

The RTM API is a WebSocket-based API that allows you to receive
read-only access to a selected set of data from Turnly in realtime.

To use this API we have a [realtime-client](https://github.com/turnly/realtime-client)
that works for the server/client-side, which will allow you to interact with
the API in the simplest and most user-friendly way.

### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Socket.io   (@turnly/realtime)      | A lib that enables low-latency, bidirectional and event-based communication.  |
| RabbitMQ    (@turnly/shared)        | A message broker for events.                                                  |
| gRPC Client (@turnly/rpc)           | Efficiently connecting polyglot services in microservices architecture.       |

### Inter-services communication (services dependency)

| Name                    | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| **Add-ons**             | Used to get the integration (widget).                     |
| **Queuing System**      | Used to create or get customers.                          |

### Environment Variables

| Name                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `APP_NAME`               | Used for observability of this application.    |
| `APP_PORT`               | Port to expose by the application.             |
| `RPC_CONSUMER_ADDRESS`   | The addresses of the rpc servers for clients.  |
| `RABBITMQ_QUEUE`         | Events queue name in RabbitMQ.                 |

**Shared Environment Variables**

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `RABBITMQ_URI`           | URI connection to RabbitMQ.                  |
| `RABBITMQ_EXCHANGE`      | Exchange name of RabbitMQ.                   |
| `ELASTICSEARCH_URI`      | URI connection to Elastic.                   |
| `SENTRY_DSN`             | Your Sentry DSN.                             |
| `FLUENT_HOST`            | FluentD host for observability.              |
| `FLUENT_PORT`            | FluentD port for observability.              |

> Most of these variables have an example value in our parent [.env.example](/.env.example).

### Getting Started

Before you begin, you must have completed steps 1 and 2 of the guide to [contribute](/CONTRIBUTING.md).

**Start**

This command will run the necessary infrastructure services for the widgets-realtime-api:

```sh
yarn devo start -s widgets-realtime-api -s addons -s queuing-system --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
