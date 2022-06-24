import { Logger, Observability } from '@turnly/common'
import { IContext } from '@types'
import { Customers, Integrations } from 'services'
import { AuthChecker } from 'type-graphql'

export const AuthorizedGuard: AuthChecker<IContext> = async ({ context }) => {
  try {
    Observability.ExceptionHandler.setUser(null)

    Logger.debug('Executing AuthorizedGuard for current context...')

    const [integrationId, customerId] = [
      context.req.headers['x-integration-id'],
      context.req.headers['x-customer-id'],
    ]

    if (!integrationId || !customerId) return false

    Logger.debug('Checking if integration is authorized...', { integrationId })

    /**
     * @todo Add cache with datasources
     * https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    const { data: integration } = await Integrations.get({
      id: String(integrationId),
    })

    if (!integration) return false

    Logger.debug('Checking if customer is authorized...', { customerId })

    const { data: customer } = await Customers.get({
      id: String(customerId),
      companyId: integration.companyId,
    })

    if (!customer) return false

    context.req.customer = customer
    context.req.integration = integration

    Observability.ExceptionHandler.setUser(customer)

    Logger.debug('AuthorizedGuard executed successfully!', { integration })

    return true
  } catch (error) {
    Observability.ExceptionHandler.handle(error)

    return false
  }
}
