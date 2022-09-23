import { ApolloProvider } from '@apollo/client'
import { h } from 'preact'

import { AppShell } from './components/layouts/app-shell'
import { useApolloClient } from './hooks/use-apollo-client'
import { useTelemetry } from './hooks/use-telemetry'
import { Router } from './routes'

export const AppContainer = () => {
  const apolloClient = useApolloClient()

  useTelemetry()

  return (
    <ApolloProvider client={apolloClient}>
      <AppShell>
        <Router />
      </AppShell>
    </ApolloProvider>
  )
}

export default AppContainer
