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

# Business Data Fields

An on-demand business data fields management service. The organizations take advantage of this service
to obtain the necessary data according to their logic and internal processes.

### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Express.js    (@turnly/core)      | Fast, unopinionated, minimalist web framework for Node.js                     |
| Mongoose ORM  (@turnly/core)      | Elegant mongoDB object modeling.                                              |
| ElasticSearch (@turnly/core)      | Modern NoSQL database for search and store unstructured data.                 |
| RabbitMQ      (@turnly/core)      | A message broker for events.                                                  |
| gRPC Server   (@turnly/grpc)         | Efficiently connecting polyglot services in microservices architecture.       |

### Service Modules

| Name               | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| **Fields**         | Represents fields that can be used to create custom forms for any entity.     |
| **Answers**        | Represents the answers to the custom field created.                           |

### Environment Variables

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `APP_NAME`               | Used for observability of this application.  |
| `MONGO_DB`               | Database name.                               |
| `APP_PORT`               | Port to expose by the application.           |
| `RABBITMQ_QUEUE`         | Events queue name in RabbitMQ.               |

**Shared Environment Variables**

| Name                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `MONGO_URI`              | URI connection to MongoDB.                   |
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

This command will run the necessary infrastructure services for the business-data-fields:

```sh
yarn start -s business-data-fields --verbose
```

You can see more helpful commands for development in the [contribution guide](/CONTRIBUTING.md).
