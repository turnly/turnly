# Assistance Centers

This service manages the creation of locations (branches), services offered,
working hours, location desks, etc.

Everything related to the assistance center as such is included in this service,
except the agents and managers.

### Service Modules

| Name               | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| **Locations**      | Represent physical locations, such as buildings, service points or retail store.  |
| **Schedules**      | Represents the hours in which the Location is open to receive tickets.            |
| **Holidays**       | Represents a special schedule for the holidays that the Location decides to work. |
| **Desks**          | Represent working stations in a Location.                                         |
| **Services**       | Represents the different services that are provided in that Location.             |

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

This command will run the necessary infrastructure services for the assistance centers:

```sh
yarn devo start -s assistance-centers --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
