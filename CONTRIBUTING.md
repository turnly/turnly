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

# Contributing

First off, thanks for your interest in Turnly and for wanting to contribute!

### Machine dependencies

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js v18.14 (LTS)](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux
based terminal like **Git bash**.
- We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)

### Development

#### Step 1: Install application

```sh
# For convenience, clone this repo to a previously created directory called turnly or turnly-apps.

# Create turnly directory (optional)
mkdir turnly-apps

# Go to turnly directory
cd turnly-apps

# Clone repo
git clone git@github.com:turnly/turnly.git
```

#### Step 2: Setup application

```sh
1. Install local dependencies.
yarn setup

# 2. Copy environment file.
cp .example.env .env
```

#### Step 3: Start command

```sh
# Start all available services:
yarn start --verbose

# Start specific services:
yarn start -s queuing-system -s widgets-api --verbose

# OR

# Build images before starting containers and re-run setup.
yarn start --verbose --build
``` 

### Helpful for development

#### Stop command

```sh
yarn stop

# OR

# Use verbose to show all the output of commands.
yarn stop --verbose
```

#### Linting command

```sh
# Run linter
yarn lint
```

### Testing

Each application has its own set of tests, and they generally follow the same
rules of writing and structure. All the tests are executed on our CI and a PR
could only be merged once the tests pass.

Most tests will benefit from using this template as a starting point:

```typescript
describe('<scope name> > <task title>', async () => {
  test('should <put a detailed description of what it should do here>', () => {
    // test go here
  })

  // additional tests if needed
})
```

### Conventions (Required)

We highly recommend you review the [conventions docs.](/docs/conventions.md)

### Start specific application (Development Mode)

If you don't want to run all of Turnly's apps and services, you can go to the directory of the app
you want to contribute to and you'll find a README with details on how to run just that app.

##### APIs (Backend for Frontend) 🔗

| Name                                                                    | Description                                  | Live |
| ----------------------------------------------------------------------- | -------------------------------------------- |:----:|
| [Widgets API](/apps/widgets-api)                                        | GraphQL API for widgets clients              | 🟢   |
| [Helpdesk Real Time Messaging API (RTM)](/apps/helpdesk-realtime-api)   | A WebSocket-based API for helpdesk events    | 🟢   |
| [Widgets Real Time Messaging API (RTM)](/apps/widgets-realtime-api)     | A WebSocket-based API for widgets events     | 🟢   |

##### Microservices 🔗

| Name                                               | Description                                                       | Live |
| -------------------------------------------------- | ----------------------------------------------------------------- |:----:|
| [Branch Management](/apps/branch-management)       | Locations, services offered, working hours, desk, etc.            | 🟢   |
| [Business Data Fields](/apps/business-data-fields) | Business Data Fields, Customers and Agents answers.               | 🟢   |
| [Queuing System](/apps/queuing-system)             | Tickets and Customers management.                                 | 🟢   |
| [Localization](/apps/localization)                 | Countries, timezones and languages support                        | 🔴   |

### Software Architecture

The Turnly are built using multiple architectural concepts,
we highly recommend you review the [architecture docs.](/docs/architecture)

![high-level-architecture](/docs/diagrams/high-level-architecture.png)
