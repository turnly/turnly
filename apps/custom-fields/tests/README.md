<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://user-images.githubusercontent.com/40646537/179328734-625eba82-51f0-48c3-bb7c-7a1ad5487d79.png" />
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

# Custom Fields Test Suites

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
yarn devo custom-fields test:unit
```

**Integration**

Run only integration tests, time to open the windows :D

```sh
yarn devo custom-fields test:integration --runInBand
```

**Benchmark**

Run only benchmark tests, let's see how this is.

```sh
yarn devo custom-fields test:benchmark
```

**e2e**

Run e2e tests. This command can be quite slow, so use it with caution.

```sh
yarn devo custom-fields test:e2e
```

**Matches**

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

When you are creating tests to some specific code, you may want only execute the tests that you're creating,
so you waste less time to verify your code. To do this, you can:

```sh
yarn devo custom-fields test:unit -t name-of-test
```

**Watch mode**

Run tests related to git-based changed files with watch mode enabled.

```sh
yarn devo custom-fields test:watch
```

**Coverage**

Run all the tests and get the coverage report.

```sh
yarn devo custom-fields test:coverage
```
