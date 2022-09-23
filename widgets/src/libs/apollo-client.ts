import { ApolloClient, InMemoryCache } from '@apollo/client'

import { __DEV__ } from '../config'

export const getApolloClient = (uri: string, credentials: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    headers: {
      Authorization: credentials,
    },
    connectToDevTools: __DEV__,
  })
}
