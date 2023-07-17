<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/main/docs/assets/github-header.png" />
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

# Queuing System Test Suites

The test suite will allow you to easily test parts of this application with dynamic
data created by object mothers to reduce replication and show only cohesive attributes to the test.

### Technologies stack

| Name       | Description                                                                | Used for                |
| ---------- | -------------------------------------------------------------------------- | ----------------------- |
| Jest       | A delightful JavaScript Testing Framework with a focus on simplicity.      | Integration & Unit      |
| TS Jest    | A Jest transformer that allows you to use Jest with TypeScript projects.   | Integration & Unit      |
| Faker      | Generate massive amounts of fake data for testing and development.         | Integration & Unit      |
| Postman    | An API platform for building and using APIs.                               | Acceptance (e2e)        |
| Newman     | Newman is a command-line Collection Runner for Postman.                    | Acceptance (e2e)        |
| k6         | Open source load testing tool.                                             | Benchmark (Performance) |

### Getting Started

The list of commands will help you with the most common command variations,
but if you're missing something, you can refer to the [Jest](https://jestjs.io/docs/cli) documentation.

**Unit**

Run only unit tests, they will usually be the fastest tests.

```sh
yarn test:unit
```

**Integration**

Run only integration tests, time to open the windows :D

```sh
yarn test:integration
```

**Benchmark**

Run only benchmark tests, let's see how this is.

```sh
yarn test:benchmark
```

**e2e**

Run e2e tests. This command can be quite slow, so use it with caution.

```sh
yarn test:e2e
```

**Coverage**

Run all the tests and get the coverage report.

```sh
yarn test:coverage
```
