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

# RTM Client

A _socket.io-client_ wrapper to facilitate connecting to our RTM & Streaming API.

#### Installation

```sh
yarn add @turnly/realtime-client
```

#### Streaming API

```typescript
import { Realtime } from '@turnly/realtime-client'

const stream = new Realtime.Stream({ url: 'https://{organization}.turnly.app' })

/**
 * Sets your secret token.
 */
stream.setAuthToken(process.env.TURNLY_STREAM_API_TOKEN) // '<your-token>'

/**
 * Subscribes to single event.
 */
stream.subscribe('ticket.announced', event => console.log(event))

/**
 * Unsubscribes
 */
const unsub = stream.subscribe('ticket.discarded', event => console.log(event))

/**
 * Closes the subscription.
 */
unsub()

/**
 * Subscribes to multiple events.
 */
stream.subscribe(['ticket.created', 'customer.created'], event => console.log(event))

/**
 * Subscribes to all events.
 */
stream.subscribe(event => console.log(event))
```

#### Platform Realtime API

```typescript
import { Realtime } from '@turnly/realtime-client'

const rtm = new Realtime.Platform({
  url: 'https://{organization}.turnly.app',
  channel: 'helpdesk',
})

/**
 * Subscribes to single event.
 */
rtm.subscribe('service.tickets.ahead', event => console.log(event))
```

#### widgets Realtime API

```typescript
import { Realtime } from '@turnly/realtime-client'

const rtm = new Realtime.Widgets({
  url: 'https://{organization}.turnly.app',
  channel: 'queuing',
})

/**
 * Subscribes to single event.
 */
rtm.subscribe('service.tickets.ahead', event => console.log(event))
```

#### Event Response

The event from the subscription will contain following properties:

| Name         | Type      | Description                                             |
| ------------ | --------- | ------------------------------------------------------- |
| id           | String    | Unique identifier for this event.                       |
| name         | String    | A human-readable name for the event.                    |
| type         | String    | The operation of the event, commonly update or create.  |
| payload      | Object    | Contains data related to the event.                     |
| timestamp	   | number    | The UNIX timestamp from the server.                     |
