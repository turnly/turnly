import { ApolloProvider } from '@apollo/client'
import { h } from 'preact'

import { Shell } from './components/layouts/shell'
import { useApolloClient } from './hooks/use-apollo-client'
import { useTelemetry } from './hooks/use-telemetry'
import { Router } from './routes'

export const AppContainer = () => {
  const apolloClient = useApolloClient()

  useTelemetry()

  return (
    <ApolloProvider client={apolloClient}>
      <Shell>
        <Router />
      </Shell>
    </ApolloProvider>
  )
}

export default AppContainer
