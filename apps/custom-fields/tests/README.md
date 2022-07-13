# Custom Fields Test Suite

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
# Local machine
yarn devo custom-fields test:unit

# Inside docker
docker exec custom-fields yarn test:unit --runInBand
```

**Integration**

Run only integration tests, time to open the windows :D

```sh
# Only inside docker
docker exec custom-fields yarn test:integration --runInBand
```

**Benchmark**

Run only benchmark tests, let's see how this is.

```sh
# Only inside docker
docker exec custom-fields yarn test:benchmark
```

**e2e**

Run e2e tests. This command can be quite slow, so use it with caution.

```sh
# Only inside docker
docker exec custom-fields yarn test:e2e
```

**Matches**

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

When you are creating tests to some specific code, you may want only execute the tests that you're creating,
so you waste less time to verify your code. To do this, you can:

```sh
# Local machine
yarn devo custom-fields test:unit -t name-of-test

# Inside docker
docker exec custom-fields yarn test:unit -t name-of-test --runInBand
```

**Watch mode**

Run tests related to git-based changed files with watch mode enabled.

```sh
# Only inside docker
docker exec custom-fields yarn test:watch --runInBand
```

**Coverage**

Run all the tests and get the coverage report.

```sh
# Only inside docker
docker exec custom-fields yarn test:coverage --runInBand
```
