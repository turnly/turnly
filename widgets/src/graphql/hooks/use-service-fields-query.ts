import * as Apollo from '@apollo/client'

import {
  FieldModel,
  GetServiceFieldsQuery as Query,
  GetServiceFieldsQueryVariables as Variables,
  useGetServiceFieldsQuery as useQuery,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export type ServiceField = FieldModel

export type ServiceFieldData = ServiceField[]

export const useServiceFieldsQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({
    ...options,
    onError: error => {
      onErrorHandler(error)

      if (options.onError) options.onError(error)
    },
  })

  return {
    data: data?.getServiceFields ?? [],
    error,
    isLoading,
  }
}
