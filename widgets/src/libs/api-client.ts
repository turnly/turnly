import { ApolloClient, InMemoryCache } from '@apollo/client'

export const getApolloClient = (uri: string) =>
  new ApolloClient({ uri, cache: new InMemoryCache() })
