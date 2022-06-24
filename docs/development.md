# Athena — Development with DevO Tool

> Docker-backed infrastructure provisioning and systems management for development environment.

### Getting Started

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux
based terminal like **Git bash**.

#### Install application

```sh
# For convenience, clone this repo to a previously created directory called turnly or turnly-apps.

# Create turnly directory (optional)
mkdir turnly

# Go to turnly directory
cd turnly

# Clone repo
git clone git@github.com:turnly/athena.git
```

#### Setup application

```sh
# This command will do:
#
# 1. Install local dependencies.
# 2. Copy environment files on each app.
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
yarn devo start -s maverick -s streaming-api

# OR

# Use verbose to show all the output of the containers and commands.
yarn devo start --verbose

# Build images before starting containers and re-run setup.
yarn devo start --build
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
yarn devo reload -s streaming-api
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
yarn devo streaming-api test

# Same as:
cd ./apps/streaming-api && yarn run test

# -------------------------------------

yarn devo maverick build

# Same as:
cd ./apps/Maverick && yarn run build
```
