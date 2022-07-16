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

# Software Architecture

> This document describes how the architecture provides the ability for teams
> to adapt and understand the static structure of the application.
> Documents behavior and addresses potential developer concerns such as code dependencies,
> build, configuration, constraints, design patterns, code styles, etc.

## Architecture Concepts

> The software architecture represents the structure or structures of the system,
> which consists of software components, the externally visible properties of those components,
> and the relationships among them.

#### Backend for Frontend — Single-purpose Edge Services for UIs and external parties

We have some applications consuming our APIs, each client has different flows and uses
mixed data from different microservices, this would do one of two things; that our clients
have to make many requests or that our services are very talkative with each other.
For this reason, we chose to separate the responsibilities into smaller APIs
focused on a single client and this is where BFF comes in.

Now that you understand the problem, you can follow the links and read about BFF:

- [What is the API Gateway pattern?](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/direct-client-to-microservice-communication-versus-the-api-gateway-pattern#what-is-the-api-gateway-pattern)
- [What is the BFF?](https://samnewman.io/patterns/architectural/bff/)

#### Microservices

The microservice architecture enables the rapid, frequent and reliable delivery of large,
complex applications. It also enables an organization to evolve its technology stack.

[Learn more about microservices](https://microservices.io/)

#### Entity

An Entity is anything that has continuity through a life cycle and distinctions independent
of attributes that are important to the application's user. Entities should be the first
place that we think of to put domain logic. (**do not confuse with the entities of the orm**)

#### Value Object

A Value Object is an immutable type that is distinguishable only by the state of its properties.
That is, unlike an Entity, which has a unique identifier and remains distinct even if its
properties are otherwise identical, two Value Objects with the exact same properties can be considered equal.

#### Aggregate

Aggregate is a pattern in Domain-Driven Design. A DDD aggregate is a cluster of domain objects that can be treated as a single unit.

#### Aggregate Root

An Aggregate will have one of its component objects be the aggregate root. Any references from outside the aggregate should only go to the aggregate root. The root can thus ensure the integrity of the aggregate as a whole.

#### Repo Pattern

Essentially, it provides an abstraction of data, so that your application can work with a simple abstraction that has an interface approximating that of a collection. Adding, removing, updating, and selecting items from this collection is done through a series of straightforward methods, without the need to deal with database concerns like connections, commands, cursors, or readers.

#### DDD

Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain.

#### CQRS

CQRS stands for Command and Query Responsibility Segregation, a pattern that separates read and update operations for a data store. Implementing CQRS in your application can maximize its performance, scalability, and security. The flexibility created by migrating to CQRS allows a system to better evolve over time and prevents update commands from causing merge conflicts at the domain level.

#### Onion Architecture

![Onion-Architecture](/docs/architecture/assets/onion-architecture.jpeg)

Onion Architecture was introduced by Jeffrey Palermo to provide a better way to build applications in perspective of better testability, maintainability, and dependability. Onion Architecture addresses the challenges faced with 3-tier and n-tier architectures, and to provide a solution for common problems. Onion architecture layers interact to each other by using the Interfaces.

#### Observer Pattern

Is a behavioral design pattern that lets you define a subscription mechanism to notify multiple Subscribers about any Events that happen to the object they’re observing.

#### Abstract Factory Pattern

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

#### State Pattern

The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes.

Instead of implementing all behaviors on its own, the original object, called context, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

#### Object Mother

The [Object Mother pattern](https://martinfowler.com/bliki/ObjectMother.html) helps us to have consistent instances
of entities and value objects throughout the suite of tests.

An Object Mother looks like a factory and exposes methods that return fully assembled objects to us.
These methods add meaning to our examples, so we can ask them for objects that meet certain characteristics.

## Architecture Resources

- Appreciate this resource as much as you can, not just the direct link, please take the
time to look at each section of this [guide. (What’s a design pattern?)](https://refactoring.guru/design-patterns/what-is-pattern)

- API Design Guidelines. [How We Design Our APIs at Slack](https://slack.engineering/how-we-design-our-apis-at-slack/)
