# Widgets API — Backend for Frontend

Turnly Widgets is a live ticketing solution that helps businesses improve the
customer experience by allowing them to take tickets from their websites
in an interactive and simple way.

The Widgets API is a GraphQL API that offers flexibility and the ability
to define precisely the data you want to retrieve.

To use this API, you will need to authenticate requests with the integration (widgetId)
and the corresponding customer ID in the authentication header.

The Authorization header follows this format:

```sh
Authorization: Basic <credentials>
Authorization: Basic dHdpbGlvOmFob3kh # Base64 hash
```

### Technical details

| Environment       | Deployed version | Link                                                   |
|-------------------|------------------|--------------------------------------------------------|
| Development       | v1.0.0           | [Go to](http://widgets.turnly:6030/graphql)            |
| Staging           | v0.0.0           | N/A                                                    |
| Production        | v0.0.0           | N/A                                                    |

#### Technologies stack

| Name                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| GraphQL                             | A query language for APIs. You can use it to request the exact data you need. |
| Apollo GraphQL                      | The best way to build a production-ready TypeScript GraphQL server.           |
| TypeScript                          | Types reduce bugs and increases reliability.                                  |
| Type GraphQL                        | GraphQL schema and resolvers with TypeScript, using classes and decorators.   |
