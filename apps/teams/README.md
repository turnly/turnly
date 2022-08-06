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

# Teams Management System

Management of the organization's employees (Agents and Managers).

### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Express.js    (@turnly/shared)      | Fast, unopinionated, minimalist web framework for Node.js                     |
| Mongoose ORM  (@turnly/shared)      | Elegant mongoDB object modeling.                                              |
| ElasticSearch (@turnly/shared)      | Modern NoSQL database for search and store unstructured data.                 |
| RabbitMQ      (@turnly/shared)      | A message broker for events.                                                  |
| gRPC Server   (@turnly/rpc)         | Efficiently connecting polyglot services in microservices architecture.       |

### Service Modules

| Name               | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| **Agents**         | Represents the service employee in the organization.                          |
| **Managers**       | Represents a Manager employee in the organization.                            |

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

This command will run the necessary infrastructure services for the teams:

```sh
yarn devo start -s teams --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
