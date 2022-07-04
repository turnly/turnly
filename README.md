# Turnly

Open source queue management and customer experience system
for walk-ins at physical locations.

We replace take-a-number systems with a web widget-based system,
which your customers can access via any device from your website.

#### Give a Star! ⭐

If you like this project or plan to use it in the future, please give it a star. ❤️

### The most notable features 📦

##### Assistance Centers

Capability to manage multiple locations (branches), services offered, working hours,
desks for support, agents and managers per locations.

#### Custom Fields & Processors

Business data fields (custom fields) for the organizations to obtain the
necessary data according to their logic and internal processes.

A processor can be a lambda function or an external API that performs
validations or even data transformation.

#### Customer Reminders

Your customers will receive automatic notifications to keep
them aware of the life cycle of their tickets.

Capability of sending reminders (notifications) through different communication
channels, such as SMS, Push, Emails, Calls, or WhatsApp messages.

#### Customer Experience Rating

Your customers can send you feedback on how to improve the experience
in your locations (branches) or even give you the best rating, you can
use this data for service intelligence.

#### Partnership API

Our APIs are completely based on integration with external systems and
that is why we offer partner APIs that will allow you to create your own application flow.

Partner APIs, webhooks, and support for Beacons that integrate with mobile apps to detect customer arrival or create proximity-based logic.

#### Real Time Messaging API (Streaming data)

The RTM API is a WebSocket-based API that allows you to receive
read-only access to a selected set of data from Turnly in realtime.

Once your application establishes a connection to a streaming endpoint,
a feed of events is delivered to your app.

#### Custom Subdomain

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

### Applications 📦

#### APIs (Backend for Frontend)

| Name                                                  | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| [Gateway (Application Proxy)](/apps/gateway)          | API entry point and access management        |
| [Widgets API](/apps/widgets-api)                      | GraphQL API for widgets clients              |
| [Real Time Messaging API (RTM)](/apps/realtime-api)   | A WebSocket-based API for realtime events    |

#### Microservices

| Name                                            | Description                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| [Add-ons](/apps/addons)                         | Integrations, Webhooks & Beacons                                  |
| [Assistance Centers](/apps/assistance-centers)  | Locations, services offered, working hours, desk, etc.            |
| [Business Owners](/apps/business-owners)        | Organizations management, promotions, etc.                        |
| [Custom Fields](/apps/custom-fields)            | Business Data Fields, Customers and Agents answers.               |
| [Heimdall IAM](/apps/heimdall)                  | Identity & Access Management (SSO).                               |
| [Interactions](/apps/interactions)              | Activities History, and any data record.                          |
| [Notifications](/apps/notifications)            | Customers reminders, SMS, Calls, WhatsApp messages.               |
| [Queuing System](/apps/queuing-system)          | Tickets and Customers management.                                 |
| [Tasks Scheduling](/apps/tasks-scheduling)      | Scheduling of internal tasks, cleaning, batch, etc.               |
| [Teams Management](/apps/teams)                 | Management of the organization's employees (Agents and Managers). |

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

### Contributing (Developers) ❤️

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct,
and the process for submitting pull requests to us.

### Deployments 🚀

Learn about [production & stage deployments.](/docs/deployment.md)

### Security 🔐

Review the [SECURITY](/SECURITY.md)

### Versioning 🏷️

We use [SemVer](https://semver.org/spec/v2.0.0.html) for versioning.
For the versions available, see the tags on this repository.

**Summary:**

Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

### Turnly Team 🎨

Check out our [owners' document](/OWNERS.md) to meet our great maintainers and friends.

### License 📝

Copyright (C) 2022 by Turnly Inc. MIT License (see [LICENSE](/LICENSE) for details).
