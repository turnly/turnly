import { ApolloError } from '@apollo/client'

import { Notifier } from '../../components/notification'
import { __DEV__ } from '../../config'
import { i18n } from '../../localization'

export const onErrorHandler = (error: ApolloError) => {
  const isNotFound = error.graphQLErrors.some(
    ({ extensions }) => extensions['code'] === 'NOT_FOUND'
  )

  const isNetworkError = Boolean(
    error.networkError &&
      !error.graphQLErrors.length &&
      !error.clientErrors.length
  )

  const isClientError = Boolean(
    error.clientErrors.length && !error.graphQLErrors.length
  )

  if (__DEV__) {
    console.info('[GRAPH_QL_ERRORS]:', error.graphQLErrors)
    console.info('[NETWORK_ERRORS]:', error.networkError)
    console.info('[CLIENT_ERRORS]:', error.clientErrors)
    console.info('[EXTRA_INFO]:', error.extraInfo)
  }

  if (isNetworkError) return Notifier.error(i18n.t('errors.network'))

  if (isNotFound) return Notifier.info(i18n.t('errors.not_found'))

  if (isClientError) return Notifier.error(i18n.t('errors.client'))

  Notifier.error(error.message)
}
