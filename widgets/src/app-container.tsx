import { ApolloProvider } from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { h } from 'preact'

import { AppShell } from './components/layouts/app-shell'
import { useTelemetry } from './hooks/use-telemetry'
import { apolloClient } from './libs/api-client'
import { queryClient } from './libs/query-client'
import { Router } from './routes'

export const AppContainer = () => {
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
