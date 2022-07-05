# Add-ons

Service that manages the integrations (widgets) built on Turnly by an organization,
enables integrations between external systems to share data.

### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Express.js    (@turnly/shared)      | Fast, unopinionated, minimalist web framework for Node.js                     |
| Moongose ORM  (@turnly/shared)      | Elegant mongoDB object modeling.                                              |
| RabbitMQ      (@turnly/shared)      | A message broker for events.                                                  |
| gRPC Server   (@turnly/rpc)         | Efficiently connecting polyglot services in microservices architecture.       |

### Service Modules

| Name               | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| **Integrations**   | Represents a widget or a third-party service or application.                  |
| **Webhooks**       | We use webhooks to notify your app when an event occurs in your organization. |
| **Beacons**        | TO DO                                                                         |

### Environment Variables

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `APP_NAME`               | Used for observability of this application.  |
| `MONGO_DB`               | Database name.                               |
| `HTTP_PORT`              | Port to expose by the application.           |
| `RPC_BIND_ADDRESS`       | The RPC bind address. (e.g. 0.0.0.0:50501)   |
| `RABBITMQ_QUEUE`         | Events queue name in RabbitMQ.               |

**Shared Environment Variables**

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `MONGO_URI`              | URI connection to MongoDB.                   |
| `RABBITMQ_URI`           | URI connection to RabbitMQ.                  |
| `RABBITMQ_EXCHANGE`      | Exchange name of RabbitMQ.                   |
| `ELASTICSEARCH_URI`      | URI connection to Elastic.                   |
| `SENTRY_ORG`             | Your organization's URL in Sentry.           |
| `SENTRY_DSN`             | Your Sentry DSN.                             |
| `SENTRY_SLACK_WEBHOOK`   | Slack webhook for observability.             |
| `FLUENT_HOST`            | FluentD host for observability.              |
| `FLUENT_PORT`            | FluentD port for observability.              |

> Most of these variables have an example value in our parent [.env.example](/.env.example).

### Getting Started

Before you begin, you must have completed steps 1 and 2 of the guide to [contribute](/CONTRIBUTING.md).

**Start**

This command will run the necessary infrastructure services for the add-ons:

```sh
yarn devo start -s addons --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
