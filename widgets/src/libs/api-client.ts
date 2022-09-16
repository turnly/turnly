import { ApolloClient, InMemoryCache } from '@apollo/client'

export const getApolloClient = (uri: string, credentials: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    headers: {
      Authorization: credentials,
    },
  })
}
