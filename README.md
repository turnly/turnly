<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://user-images.githubusercontent.com/40646537/182500338-95256227-1bda-48d5-9752-3878c2267f4d.png" />
      </a>
  </p>

  <p align="center">
    <a href="https://docs.turnly.app"><strong>Documentation</strong></a> ·
    <a href="https://github.com/orgs/turnly/projects/2"><strong>Roadmap</strong></a> ·
    <a href="https://github.com/turnly/asgard"><strong>Frontend</strong></a> ·
    <a href="https://github.com/turnly/kubbe"><strong>Deployments</strong></a>
    <br />
  </p>

  ![tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fturnlyapp)
  ![stars](https://img.shields.io/github/stars/turnly/turnly)
  ![issues](https://img.shields.io/github/issues/turnly/turnly)
  ![license](https://img.shields.io/github/license/turnly/turnly)
  [![Tests](https://github.com/turnly/turnly/actions/workflows/continuous-integration-tests.yml/badge.svg)](https://github.com/turnly/turnly/actions)

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

## What's Turnly? 📖

[Turnly](https://turnly.app) helps businesses save their customers time waiting
in physical queues by eliminating legacy number-taking systems.
Customers join from their smart device to a web widget-based system that
can be accessed from your own website or application.

## Features 📦

The most notable features.

- **Assistance Centers**: Capability to manage multiple locations, services offered,
desks, agents and managers per location.
- **Custom Fields & Processors**: Define custom fields to obtain the necessary information about
a customer to match your internal workflow.
- **Customer Reminders**: Your customers will receive automatic notifications to keep
them aware of the life cycle of their tickets.
- **Organization Subdomain**: Your organization gets a subdomain from Turnly. (e.g. https://{org-name}.turnly.app/)

> Check the complete list on the [features document](/docs/features.md).

### APIs (Backend for Frontend) 🔗

| Name                                                  | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| [Gateway (Application Proxy)](/apps/gateway)          | API entry point and access management        |
| [Widgets API](/apps/widgets-api)                      | GraphQL API for widgets clients              |
| [Real Time Messaging API (RTM)](/apps/realtime-api)   | A WebSocket-based API for realtime events    |

### Microservices 🔗

| Name                                            | Description                                                       | Live |
| ----------------------------------------------- | ----------------------------------------------------------------- |:----:|
| [Add-ons](/apps/addons)                         | Integrations, Webhooks & Beacons                                  | 🟢   |
| [Assistance Centers](/apps/assistance-centers)  | Locations, services offered, working hours, desk, etc.            | 🟢   |
| [Business Owners](/apps/business-owners)        | Organizations management, promotions, etc.                        | 🟢   |
| [Custom Fields](/apps/custom-fields)            | Business Data Fields, Customers and Agents answers.               | 🟢   |
| [Heimdall IAM](/apps/heimdall)                  | Identity & Access Management (SSO).                               | 🔴   |
| [Notifications](/apps/notifications)            | Customers reminders, SMS, Calls, WhatsApp messages.               | 🔴   |
| [Queuing System](/apps/queuing-system)          | Tickets and Customers management.                                 | 🟢   |
| [Tasks Scheduling](/apps/tasks-scheduling)      | Scheduling of internal tasks, cleaning, batch, etc.               | 🔴   |
| [Teams Management](/apps/teams)                 | Management of the organization's employees (Agents and Managers). | 🟢   |

## Project Status 🚧

- [x] **Demo**: We are developing and testing Turnly Widgets.
- [ ] **Demo**: We are developing and testing Turnly Help Desk with a closed set of customers.
- [ ] **Demo**: We are developing and testing Turnly Back Office with a closed set of customers.
- [ ] **Alpha**: We are testing Turnly with a closed set of customers.
- [ ] **Public Alpha**: Anyone can sign up over at [turnly.app](https://turnly.app).
- [ ] **Public Beta**: Stable enough for most non-enterprise use-cases.
- [ ] **Live**: Ahoy!, production-ready. (v1.0.0)

## Getting Started 🚀

- [Deploying Turnly with One-Click Setups, Kubernetes, or Docker Compose.](https://github.com/turnly/kubbe) - (Soon)
- [Demo for banks, hospitals, labs, food pantries, travels, and shops.](/docs/demo.md) - (Soon)
- [Getting Started with Turnly](https://turnly.app/) - (Soon)

## Contributing 🧑🏻‍🚒

Ahoy!, please refer to our [Contributing Guide](/CONTRIBUTING.md) for details.

## Community & Support? Got a Question, Problem or Feature? ❤️

If you need help or just want to hear from Turnly, there are several ways to connect with us:

- Create discussion on [Community Forum](https://github.com/turnly/turnly/discussions)
- Join on [Slack](https://join.slack.com/t/turnly/shared_invite/zt-1de1x0z68-w_tWv50tUaSnYJW8C1lWIw)
- Create issue on [Github](https://github.com/turnly/turnly/issues)
- Follow us on [Twitter](https://twitter.com/turnlyapp)

## Security 🔐

Looking to report a vulnerability? Please refer our [SECURITY](/SECURITY.md) file.

## Versioning 🏷️

We use [SemVer](https://semver.org/spec/v2.0.0.html) for versioning.
For the versions available, see the tags on this repository.

## Our Team 🦦

Check out our [owners' document](/OWNERS.md) to meet our great maintainers and friends.

## FAQ 🎲

Please refer our [FAQ](/docs/faq.md) file.

## Sponsors ⛑️

If you plan to use Turnly for your business and want to give back to the
team or if you are an organization looking to help emerging open-source
software, please consider [becoming a Github Sponsor](https://github.com/sponsors/efraa).

## License 📝

Copyright © 2022 by Turnly Inc. Released under the [BSD 3-Clause License](/LICENSE).
