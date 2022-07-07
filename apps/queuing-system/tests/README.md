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

**All (Pending)**

Run all available tests, except `e2e`. This command can be quite slow, so use it with caution.

```sh
yarn devo queuing-system test
```

**Unit**

Run only unit tests, they will usually be the fastest tests.

```sh
yarn devo queuing-system test unit
```

**Integration**

Run only integration tests, time to open the windows :D

```sh
yarn devo queuing-system test integration
```

**Benchmark**

Run only benchmark tests, let's see how this is.

```sh
yarn devo queuing-system test benchmark
```

**e2e (Pending)**

Run e2e tests. This command can be quite slow, so use it with caution.

```sh
yarn devo queuing-system test:e2e
```

**Uncommitted files**

Run tests related to changed files based on git (uncommitted files):

```sh
yarn devo queuing-system test -o
```

**Matches**

Run tests that match this spec name (match against the name in `describe` or `test`, basically).

```sh
yarn devo queuing-system test -t name-of-test
```

**CI**

Run all tests on the CI machine.

```sh
yarn devo queuing-system test:ci
```

**Watch mode**

Run tests related to git-based changed files with watch mode enabled.

```sh
yarn devo queuing-system test:watch
```

**Coverage**

Run all the tests and get the coverage report.

```sh
yarn devo queuing-system test:coverage
```
