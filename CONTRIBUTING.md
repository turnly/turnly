# Contributing

First off, thanks for your interest in Turnly and for wanting to contribute!

This document describes how to set up your development environment to build and test Turnly.

### DevO (Development with DevO Tool)

**As a concept:**

DevO is a concept adopted in Turnly ecosystem to automate and facilitate all tasks
in the development environment.

**As a Tool:**

Application written in bash and docker files that are described as docker-backed
infrastructure provisioning and systems management for the development environment.

#### DevO Commands

All available commands must be run using the `yarn devo` prefix.

#### Verbose and debug

When you run the commands and verbose is not enabled, a `devo.log` file is
generated with all the execution logs that can help you debug errors.

### Machine dependencies

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux
based terminal like **Git bash**.

- We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)

### Getting Started

#### Install application

```sh
# For convenience, clone this repo to a previously created directory called turnly or turnly-apps.

# Create turnly directory (optional)
mkdir turnly-apps

# Go to turnly directory
cd turnly-apps

# Clone repo
git clone git@github.com:turnly/turnly.git
```

#### Setup application

```sh
# This command will do:
#
# 1. Install local dependencies.
# 2. Copy environment file.
# 3. And other common tasks.
yarn devo setup

# OR

# Use verbose to show all the output of commands.
yarn devo setup --verbose
```

#### Start command

```sh
# Start all available services:
yarn devo start

# Start specific services:
yarn devo start -s addons -s realtime-api

# OR

# Use verbose to show all the output of the containers and commands.
yarn devo start --verbose

# Build images before starting containers and re-run setup.
yarn devo start --verbose --build
```

#### Stop command

```sh
yarn devo stop

# OR

# Use verbose to show all the output of commands.
yarn devo stop --verbose
```

#### Reload command

```sh
# Stop all available services:
yarn devo reload

# Stop specific services:
yarn devo reload -s realtime-api
```

#### Developer tools

```sh
# Run linters on each services:
yarn devo lint --all

# Run linters only if the apps has changed since last commit
yarn devo lint

# OR

# Use verbose to show all the output of commands.
yarn devo lint --all --verbose
```

#### Workspace commands

You can take advantage of yarn workspaces to interact with apps, for example,
you can run the commands for one of your services from DevO using:

```sh
yarn devo realtime-api test

# Same as:
cd ./apps/realtime-api && yarn run test

# -------------------------------------

yarn devo addons build

# Same as:
cd ./apps/addons && yarn run build
```

### Software Architecture

The Turnly are built using multiple architectural concepts,
we highly recommend you review the [architecture docs.](/docs/architecture)

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

### Conventions

We highly recommend you review the [conventions doc](/docs/conventions.md)

#### How to create a new application

> If you intend to add a new service, BFF, application, or others,
> use [this guide](/docs/how-to-create-new-application.md) to ensure a successful addition.

### Others resources 🔗

- [Postman Collections](/docs/postman/)
- [Disaster Recovery](/docs/disaster-recovery.md)
