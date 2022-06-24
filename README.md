# Athena — Backend applications

Monorepo of backend applications that make up much of Turnly's APIs.

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

### APIs (Backend for Frontend)

| Name                                       | Description                                  |
| ------------------------------------------ | -------------------------------------------- |
| [Gateway](/apps/gateway)                   | API entry point and access management        |
| [Widgets API](/apps/widgets-api)           | GraphQL API for widgets clients              |
| [Streaming API](/apps/streaming-api)       | Streaming API (WebSocket)                    |

> What about [BFF (Backend for Frontend)?](/docs/architecture/BFF.md)

### Microservices

| Name                                            | Description                                  |
| ----------------------------------------------- | -------------------------------------------- |
| [Heimdall IAM](/apps/heimdall)                  | Identity & Access Management                 |
| [Assistance Centers](/apps/assistance-centers)  | Assistance Centers (Locations)               |
| [Queuing System](/apps/queuing-system)          | Queuing System                               |
| [Custom Fields](/apps/custom-fields)            | Business Data Fields                         |
| [Tasks Scheduling](/apps/tasks-scheduling)      | Tasks Scheduling                             |
| [Notifications](/apps/notifications)            | Notifications Service                        |
| [Business Owners](/apps/business-owners)        | Business Owners                              |
| [Team Management](/apps/team)                   | Team Management                              |
| [Interactions](/apps/interactions)              | Activities History                           |
| [Billing](/apps/billing)                        | Billing Service                              |
| [Add-ons](/apps/addons)                         | Integrations, Webhooks & Beacons             |

#### Getting Started as a Developer

1. We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)
2. Please install the [VScode recommendations](/.vscode/extensions.json) to improve your code style.
3. We highly recommend you learn about DevO directory in [devo docs.](/docs/devo.md)
4. If you've understood the purpose of DevO, you're ready to learn [how to set up your development environment.](/docs/development.md)

##### How to create a new application (For developers)

> If you intend to add a new service, BFF, application, or others,
> use [this guide](/docs/how-to-create-new-application.md) to ensure a successful addition.

#### Software Architecture

Microservices are built using multiple architectural concepts,
we highly recommend you review the [docs.](/docs/architecture)

#### Production & Stage

Learn about production deployments in [deployments documentation.](/docs/deployment.md)

#### Others resources

- [How to create a new application](/docs/how-to-create-new-application.md)
- [Postman Collections](/docs/postman/)
- [Conventions](/docs/conventions.md)
- [Disaster Recovery](/docs/disaster-recovery.md)

#### Authors

- [Efra](https://github.com/efraa)
