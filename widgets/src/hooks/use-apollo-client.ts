import { useMemo } from 'preact/hooks'

import { getApolloClient } from '../libs/apollo-client'
import { useSession } from './use-session'
import { useSettings } from './use-settings'

const getBasicAuthCredentials = (username: string, password: string) => {
  return `Basic ${window.btoa(`${username}:${password}`)}`
}

export const useApolloClient = () => {
  const { organizationURL, widgetId } = useSettings()
  const { customer } = useSession()

  return useMemo(() => {
    const GRAPH_URL = `${organizationURL}/api/v1/widgets/graph`

    if (!customer.id || !widgetId) return null

    return getApolloClient(
      GRAPH_URL,
      getBasicAuthCredentials(widgetId, customer.id)
    )
  }, [organizationURL])
}
