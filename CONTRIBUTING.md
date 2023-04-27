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

### System Requirements

You need the following installed in your system:

- [Docker CE >=20.10.21](https://docs.docker.com/engine/release-notes)
- [Docker Compose >=2.15.1](https://docs.docker.com/compose/release-notes)
- [Git](https://git-scm.com/downloads)
- [Node.js v18.14 (LTS)](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux based terminal like **Git bash**.
- We highly recommend you review the [troubleshooting docs.](/docs/troubleshooting.md)

### Development

#### Clone the repository on your server

Clone these resources to your previously configured server with the basic requirements.

```sh
git clone git@github.com:turnly/turnly.git
```

#### Install local dependencies

```sh
yarn setup
```

#### Environment Variables

Environment variables will allow you to customize Turnly's configurations.
You must change the environment variables before running Turnly using the Docker Compose.

```sh
# Go to the directory where you cloned the resources.
cd /path/to/turnly/

# Now copy the `.env.example` file and set the variables appropriately.
cp .env.example .env
```

#### Get the services up and running

After successfully setting your environment variables, you can get the Turnly using the following command:

```sh
yarn start
``` 

#### Stop running containers

You can stop and remove containers created for Turnly services using the stop command.
The only things removed are containers for Turnly services.

```sh
yarn stop
```

#### Linting

```sh
yarn lint
```

### Conventions (Required)

We highly recommend you review the [conventions docs.](/docs/conventions.md)

### Software Architecture

The Turnly are built using multiple architectural concepts,
we highly recommend you review the [architecture docs.](/docs/architecture)

![high-level-architecture](/docs/diagrams/high-level-architecture.png)

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
