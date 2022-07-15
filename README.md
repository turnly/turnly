<p align="center">
    <a href="https://turnly.app" target="_blank" rel="noopener">
        <img src="https://user-images.githubusercontent.com/40646537/179129882-175b9157-beaf-4c17-9226-59b36bfe5206.png" />
    </a>
</p>

<p align="center">
  <a href="https://docs.turnly.app"><strong>Documentation</strong></a> ·
  <a href="https://github.com/orgs/turnly/projects/2"><strong>Roadmap</strong></a> ·
  <a href="https://github.com/turnly/asgard"><strong>Frontend Apps</strong></a> ·
  <a href="/docs/deployment.md"><strong>Deployments</strong></a>
</p>

### Overview 📖

[Turnly](https://turnly.app) replace take-a-number systems with a web widget-based system,
which your customers can access via any device from your website.

#### Give a Star! ⭐

If you like this project or plan to use it in the future, please give it a star. ❤️

### Features 📦

#### Assistance Centers

Capability to manage multiple locations (branches), services offered, working hours,
desks for support, agents and managers per locations.

#### Custom Fields & Processors

Custom fields to obtain the necessary data according to their logic and internal processes.

#### Customer Reminders

Your customers will receive automatic notifications to keep
them aware of the life cycle of their tickets.

#### Organization Subdomain

Your organization gets a subdomain from Turnly.
The URL you get is the one you should use to interact with your organization's APIs and apps.

You will be able to use the following URLs to interact with the APIs:

| Name                                  | URL                                                      | Live |
| ------------------------------------- | -------------------------------------------------------- |:----:|
| **Help Desk API**                     | `https://{organization}.turnly.app/api/v1/help_desk`     | 🔴   |
| **Back Office API**                   | `https://{organization}.turnly.app/api/v1/back_office`   | 🔴   |
| **Partnership API**                   | `https://{organization}.turnly.app/api/v1/partners`      | 🔴   |
| **Widgets API**                       | `https://{organization}.turnly.app/api/v1/widgets`       | 🟢   |
| **Real Time Messaging API**           | `https://{organization}.turnly.app/api/v1/rtm`           | 🟢   |
| **Identity & Access Management API**  | `https://accounts.turnly.app/api/v1`                     | 🔴   |

> You can check the complete list on the [features document](/docs/features.md).

#### Status 🚧

- [X] Starting: We are constantly developing to bring value to Turnly.
- [ ] Demo: We are testing Turnly Widgets with a closed set of customers.
- [ ] Demo: We are testing Turnly Help Desk with a closed set of customers.
- [ ] Demo: We are testing Turnly Back Office with a closed set of customers.
- [ ] Alpha: We are testing Turnly with a closed set of customers.
- [ ] Public Alpha: Anyone can sign up over at [turnly.app](https://turnly.app).
- [ ] Public Beta: Stable enough for most non-enterprise use-cases.
- [ ] Live: Ahoy!, production-ready. (v1.0.0)

#### APIs (Backend for Frontend) 📦

| Name                                                  | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| [Gateway (Application Proxy)](/apps/gateway)          | API entry point and access management        |
| [Widgets API](/apps/widgets-api)                      | GraphQL API for widgets clients              |
| [Real Time Messaging API (RTM)](/apps/realtime-api)   | A WebSocket-based API for realtime events    |

#### Microservices 📦

| Name                                            | Description                                                       | Live |
| ----------------------------------------------- | ----------------------------------------------------------------- |:----:|
| [Add-ons](/apps/addons)                         | Integrations, Webhooks & Beacons                                  | 🟢   |
| [Assistance Centers](/apps/assistance-centers)  | Locations, services offered, working hours, desk, etc.            | 🟢   |
| [Business Owners](/apps/business-owners)        | Organizations management, promotions, etc.                        | 🟢   |
| [Custom Fields](/apps/custom-fields)            | Business Data Fields, Customers and Agents answers.               | 🟢   |
| [Heimdall IAM](/apps/heimdall)                  | Identity & Access Management (SSO).                               | 🔴   |
| [Interactions](/apps/interactions)              | Activities History, and any data record.                          | 🔴   |
| [Notifications](/apps/notifications)            | Customers reminders, SMS, Calls, WhatsApp messages.               | 🔴   |
| [Queuing System](/apps/queuing-system)          | Tickets and Customers management.                                 | 🟢   |
| [Tasks Scheduling](/apps/tasks-scheduling)      | Scheduling of internal tasks, cleaning, batch, etc.               | 🔴   |
| [Teams Management](/apps/teams)                 | Management of the organization's employees (Agents and Managers). | 🟢   |

### Contributing (Developers) ❤️

Ahoy!, go to [CONTRIBUTING](/CONTRIBUTING.md) for details.

### Security 🔐

Looking to report a vulnerability? Please refer our [SECURITY](/SECURITY.md) file.

### Versioning 🏷️

We use [SemVer](https://semver.org/spec/v2.0.0.html) for versioning.
For the versions available, see the tags on this repository.

### Our Team 🦦

Check out our [owners' document](/OWNERS.md) to meet our great maintainers and friends.

### FAQ 🎲

Please refer our [FAQ](/docs/faq.md) file.

### License 📝

Copyright © 2022 by Turnly Inc. Released under the [MIT License](/LICENSE).
