# Backend for Frontend — Single-purpose Edge Services for UIs and external parties

We have some applications consuming our APIs, each client has different flows and uses
mixed data from different microservices, this would do one of two things; that our clients
have to make many requests or that our services are very talkative with each other.
For this reason, we chose to separate the responsibilities into smaller APIs
focused on a single client and this is where BFF comes in.

Now that you understand the problem, you can follow the links and read about BFF:

- [What is the API Gateway pattern?](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/direct-client-to-microservice-communication-versus-the-api-gateway-pattern#what-is-the-api-gateway-pattern)
- [What is the BFF?](https://samnewman.io/patterns/architectural/bff/)
