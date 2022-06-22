import { Observability } from '@turnly/common'
import { IContext } from '@types'
import { Services } from 'services'
import { AuthChecker } from 'type-graphql'

export const AuthorizedGuard: AuthChecker<IContext> = async ({
  context: {
    req: { headers },
  },
}) => {
  Observability.ExceptionHandler.setUser(null)

  const [integrationId, customerId] = [
    headers['x-integration-id'],
    headers['x-customer-id'],
  ]

  if (!integrationId || !customerId) return false

  /**
   * @todo Add cache with datasources
   * https://www.apollographql.com/docs/apollo-server/data/data-sources/
   */
  const { data: integration } = await Services.Integrations.get({
    id: String(integrationId),
  })

  if (!integration) return false

  const { data: customer } = await Services.Customers.get({
    id: String(customerId),
    companyId: integration.companyId,
  })

  if (!customer) return false

  Observability.ExceptionHandler.setUser(customer)

  return true
}
