<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/main/docs/assets/github-header.png" />
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

# gRPC — Inter-services communication

This shared module facilitates inter-services communication through the RPC protocol.

### Installation

```sh
yarn @turnly/grpc
```

### Usage

##### Consumer (client)

This is an example of how to consume **Tickets** data via RPC using a consumer.

```typescript
import { Consumers } from '@turnly/grpc'

const Tickets = new Consumers.QueuingSystem.Tickets({
  /**
   * This param is optional, if we find GRPC_CONSUMER_ADDRESS in your .env we will ignore it.
   */
  address: '0.0.0.0:50052',
})

Tickets.getOne({ id: 'ticket_eHgxSkoq2msf' }).then(console.log)
```

##### Server producer

This is an example of how to set up an RPC server to define the services of a pre-built proto.

This example assumes that you've already created a `my-service.proto` and want to create the implementation.

```typescript
import { Producers } from '@turnly/grpc'
import { TicketsModule } from 'tickets/tickets.module'

const services = [
  {
    definition: Producers.QueuingSystem.TicketsService,
    implementation: TicketsModule.getServer(),
  },
]

const server = new Producers.Server({ port: 50052, services })

server.setup() // gRPC server started on port 50052
```

### Why use [gRPC](https://www.ibm.com/docs/en/aix/7.1?topic=concepts-remote-procedure-call)?

Communication between microservices must be efficient and robust. With lots of small services interacting
to complete a single business activity, this can be a challenge.

There are two types of communication between services; **Synchronous** and **Asynchronous**.

Asynchronous communication in microservices will be achieved through the
messaging brokers like [Apache Kafka](https://github.com/turnly/shared/tree/main/src/event-bus).

> Most likely in a distributed system you need to communicate with some of your neighboring services
> at the request of a client, this type of case is where you will need to communicate
> directly with a service synchronously and wait for its response.

With that said, you will understand why having synchronous communication is crucial
in a service-oriented architecture and for this we chose RPC because of the following:

- Building **low latency** and **highly scalable** microservice call graphs.
- gRPC uses Protocol Buffers by default, which provide better performance when compared to JSON.
- Ability to auto-generate client stubs in several languages, which reduces
the responsibility of building and maintaining client libraries.
- gRPC communication happens over HTTP/2. HTTP/2 enables more efficient use of **network resources**
and **reduces latency** by using header field compression and allowing concurrent exchange in the same connection.

> In addition to the great advantages of RPC, we use the
> [Circuit Breaker](https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
> pattern in our consumers (clients) to mitigate the minimal temporal coupling of
> our services and prevent cascading failure propagation.
