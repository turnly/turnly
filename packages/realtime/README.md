<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="https://github.com/turnly/turnly/blob/develop/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Realtime

Realtime is a shared module that exports the necessary libraries and configurations
to create WebSocket servers in an easy and friendly way.

Currently, this module is used by Bifröst's main real-time events engine, which exposes
several public and private connection channels. If you have to build a socket-based
real-time server, this module will help you.

#### Installation

```sh
yarn add @turnly/realtime
```

#### Usage

```typescript
import { Realtime } from '@turnly/realtime'

const Server = new Realtime({ port: 3000 })

/**
 * Create a channel to listen to events
 */
const queuing = Server.listen('/queuing')

/**
 * Sets up the middleware
 */
queuing.use(new AuthGuard().use())
```

This example creates a WebSocket server, listening on port 3000,
and creating an event channel.

You can now connect to `localhost:3000/queuing`
