# Athena — Back-end applications

Monorepo of back-end applications that make up much of Turnly's APIs.

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

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
| [Bifrost](/apps/Bifrost)                   | Streaming API (WebSocket)                    |

### BFF (Back-end for Front-end)

| Name                                       | Description                                  |
| ------------------------------------------ | -------------------------------------------- |
| [Widgets BFF](/apps/Widgets.BFF)            | GraphQL API for widgets clients              |

#### Getting Started as a Developer

1. We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)
2. Please install the [VScode recommendations](/.vscode/extensions.json) to improve your code style.
3. We highly recommend you learn about DevO directory in [devo docs.](/docs/devo.md)
4. If you've understood the purpose of DevO, you're ready to learn [how to set up your development environment.](/docs/development.md)

_Others resources:_

- [Postman Collections](/docs/postman/)
- [Conventions](/docs/conventions.md)
- [Disaster Recovery](/docs/disaster-recovery.md)

#### Software Architecture

Microservices are built using multiple architectural concepts, [learn about.](/docs/architecture)

#### Production & Stage

Learn about production deployments in [deployments documentation.](/docs/deployment.md)

#### Authors

- [Efra](https://github.com/efraa)
