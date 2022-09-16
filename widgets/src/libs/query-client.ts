import { DefaultOptions, QueryClient } from '@tanstack/react-query'

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
    cacheTime: Infinity,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnReconnect: true,
  },
}

export const queryClient = new QueryClient({ defaultOptions })
