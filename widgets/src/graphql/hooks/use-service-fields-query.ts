import * as Apollo from '@apollo/client'

import { Notifier } from '../../components/notification'
import {
  FieldModel,
  GetServiceFieldsQuery as Query,
  GetServiceFieldsQueryVariables as Variables,
  useGetServiceFieldsQuery as useQuery,
} from '../generated/graphql'

export type ServiceField = FieldModel

export type ServiceFieldData = ServiceField[]

export const useServiceFieldsQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({ ...options, onError: error => Notifier.error(error.message) })

  return {
    data: data?.getServiceFields ?? [],
    error,
    isLoading,
  }
}
