# Queuing System Test Suite

The test suite will allow you to easily test parts of this application with dynamic
data created by object mothers to reduce replication and show only cohesive attributes to the test.

### Technologies stack

| Name       | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| TS Jest    | A Jest transformer that allows you to use Jest with TypeScript projects.   |
| Jest       | A delightful JavaScript Testing Framework with a focus on simplicity.      |
| faker      | Generate massive amounts of fake data for testing and development.         |

### Getting Started

The list of commands will help you with the most common command variations,
but if you're missing something, you can refer to the [Jest](https://jestjs.io/docs/cli) documentation.

**All**

Run all available tests, except `e2e`. This command can be quite slow, so use it with caution.

```sh
# Only inside docker
docker exec queuing-system yarn test
```

**Unit**

Run only unit tests, they will usually be the fastest tests.

```sh
# Local machine
yarn devo queuing-system test unit

# Inside docker
docker exec queuing-system yarn test unit
```

**Integration**

Run only integration tests, time to open the windows :D

```sh
# Only inside docker
docker exec queuing-system yarn test integration
```

**Benchmark**

Run only benchmark tests, let's see how this is.

```sh
# Local machine
yarn devo queuing-system test benchmark

# Inside docker
docker exec queuing-system yarn test benchmark
```

**e2e (Pending)**

Run e2e tests. This command can be quite slow, so use it with caution.

```sh
# Local machine
yarn devo queuing-system test:e2e

# Inside docker
docker exec queuing-system yarn test:e2e
```

**Matches**

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

When you are creating tests to some specific code, you may want only execute the tests that you're creating,
so you waste less time to verify your code. To do this, you can:

```sh
# Local machine
yarn devo queuing-system test unit -t name-of-test

# Inside docker
docker exec queuing-system yarn test -t name-of-test
```

**Watch mode**

Run tests related to git-based changed files with watch mode enabled.

```sh
# Local machine
yarn devo queuing-system test:watch

# Inside docker
docker exec queuing-system yarn test:watch
```

**Coverage**

Run all the tests and get the coverage report.

```sh
# Only inside docker
docker exec queuing-system yarn test:coverage
```
