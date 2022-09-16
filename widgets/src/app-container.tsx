import { ApolloProvider } from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { h } from 'preact'

import { AppShell } from './components/layouts/app-shell'
import { useApolloClient } from './hooks/use-apollo-client'
import { useTelemetry } from './hooks/use-telemetry'
import { queryClient } from './libs/query-client'
import { Router } from './routes'

export const AppContainer = () => {
  const apolloClient = useApolloClient()

  useTelemetry()

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <AppShell>
          <Router />
        </AppShell>
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default AppContainer
