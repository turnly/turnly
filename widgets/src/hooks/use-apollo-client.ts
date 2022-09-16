import { useMemo } from 'preact/hooks'

import { getApolloClient } from '../libs/api-client'
import { useSession } from './use-session'
import { useSettings } from './use-settings'

const getBasicAuthCredentials = (username: string, password: string) => {
  return `Basic ${window.btoa(`${username}:${password}`)}`
}

export const useApolloClient = () => {
  const { widget } = useSettings()
  const { customer } = useSession()

  return useMemo(() => {
    const GRAPH_URL = `${widget.organizationURL}/api/v1/widgets/graph`

    if (!customer.id || !widget.id) return null

    return getApolloClient(
      GRAPH_URL,
      getBasicAuthCredentials(widget.id, customer.id)
    )
  }, [widget.organizationURL])
}
