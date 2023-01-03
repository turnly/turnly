import { useMemo } from 'preact/hooks'

import { getApolloClient } from '../libs/apollo-client'
import { useSession } from './use-session'
import { useSettings } from './use-settings'

const getBasicAuthCredentials = (username: string, password: string) => {
  return `Basic ${window.btoa(`${username}:${password}`)}`
}

export const useApolloClient = () => {
  const { about } = useSettings()
  const { customer } = useSession()

  return useMemo(() => {
    const GRAPH_URL = `${about.organizationURL}/api/widgets/graph`

    if (!customer.id || !about.widgetId) return null

    return getApolloClient(
      GRAPH_URL,
      getBasicAuthCredentials(about.widgetId, customer.id)
    )
  }, [about.organizationURL])
}
