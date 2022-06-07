# Athena — Backend applications

Monorepo of backend applications that make up much of Turnly's APIs.

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

### APIs (Backend for Frontend)

| Name                                       | Description                                  |
| ------------------------------------------ | -------------------------------------------- |
| [Widgets API](/apps/Widgets.API)           | GraphQL API for widgets clients              |
| [Bifröst API](/apps/Bifrost.API)           | Streaming API (WebSocket)                    |

> What about [BFF (Backend for Frontend)?](/docs/architecture/BFF.md)

### Microservices

| Name                                       | Description                                  |
| ------------------------------------------ | -------------------------------------------- |
| [Heimdall IAM](/apps/Heimdall)             | Identity & Access Management                 |
| [Alfred](/apps/Alfred)                     | Assistance Centers (Locations)               |
| [Sherley](/apps/Sherley)                   | Queuing System                               |
| [Dorothee](/apps/Dorothee)                 | Business Data Fields                         |
| [Curry](/apps/Curry)                       | Tasks Scheduling                             |
| [Chanel](/apps/Chanel)                     | Notifications Service                        |
| [Brennan](/apps/Brennan)                   | Business Owners                              |
| [Shannon](/apps/Shannon)                   | Team Management                              |
| [Polly](/apps/Polly)                       | Activities History                           |
| [Wayne](/apps/Wayne)                       | Billing Service                              |
| [Maverick](/apps/Maverick)                 | Integrations, Webhooks & Beacons             |

#### Getting Started as a Developer

1. We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)
2. Please install the [VScode recommendations](/.vscode/extensions.json) to improve your code style.
3. We highly recommend you learn about DevO directory in [devo docs.](/docs/devo.md)
4. If you've understood the purpose of DevO, you're ready to learn [how to set up your development environment.](/docs/development.md)

#### Software Architecture

Microservices are built using multiple architectural concepts,
we highly recommend you review the [docs.](/docs/architecture)

#### Production & Stage

Learn about production deployments in [deployments documentation.](/docs/deployment.md)

#### Others resources

- [Postman Collections](/docs/postman/)
- [Conventions](/docs/conventions.md)
- [Disaster Recovery](/docs/disaster-recovery.md)

#### Authors

- [Efra](https://github.com/efraa)
