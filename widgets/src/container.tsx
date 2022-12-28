import { ApolloProvider } from '@apollo/client'
import { h } from 'preact'

import { Shell } from './components/layouts/shell'
import { useApolloClient } from './hooks/use-apollo-client'
import { Telemetry } from './libs/telemetry'
import { Router } from './routes'

export const AppContainer = () => {
  const apolloClient = useApolloClient()

  return (
    <ApolloProvider client={apolloClient}>
      <Telemetry>
        <Shell>
          <Router />
        </Shell>
      </Telemetry>
    </ApolloProvider>
  )
}

export default AppContainer
