# Athena — Software Architecture

> This document describes how the architecture provides the ability for teams
> to adapt and understand the static structure of the application.
> Documents behavior and addresses potential developer concerns such as code dependencies,
> build, configuration, constraints, design patterns, code styles, etc.

## Architecture Concepts

> The software architecture represents the structure or structures of the system,
> which consists of software components, the externally visible properties of those components,
> and the relationships among them.

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

#### Repository Pattern

Essentially, it provides an abstraction of data, so that your application can work with a simple abstraction that has an interface approximating that of a collection. Adding, removing, updating, and selecting items from this collection is done through a series of straightforward methods, without the need to deal with database concerns like connections, commands, cursors, or readers.

#### DDD

Domain-Driven Design is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain.

#### CQRS

Command Query Responsibility Segregation is the notion that you can use a different model to update information than the model you use to read information.

#### Bounded Contexts

Bounded Context is a central pattern in Domain-Driven Design. It is the focus of DDD's strategic design section which is all about dealing with large models and teams. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.

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

## Architecture Resources

- To understand how the onion architecture works, you can refer to
[Implementing Onion Architecture](https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad)
article that explains in detail all the concepts using TypeScript as a language.

- See how architecture can influence your product's success and growth. 
[Netflix Experience](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)

- Appreciate this resource as much as you can, not just the direct link, please take the
time to look at each section of this [guide. (What’s a design pattern?)](https://refactoring.guru/design-patterns/what-is-pattern)

- API Design Guidelines. [How We Design Our APIs at Slack](https://slack.engineering/how-we-design-our-apis-at-slack/)
