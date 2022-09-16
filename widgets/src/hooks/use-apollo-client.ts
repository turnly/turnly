import { useMemo } from 'preact/hooks'

import { getApolloClient } from '../libs/api-client'
import { useSettings } from './use-settings'

export const useApolloClient = () => {
  const { widget } = useSettings()

  return useMemo(() => getApolloClient(widget.organizationURL), [])
}
