import {
  Logger,
  Observability,
  UnauthenticatedException,
  UnauthorizedException,
} from '@turnly/common'
import { IContext } from '@types'
import { Customers, Integrations } from 'services'
import { AuthChecker } from 'type-graphql'

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  Observability.ExceptionHandler.setUser(null)

  Logger.debug('Executing AuthGuard for current context...')

  const [widgetId, customerId] = [
    context.req.headers['x-turnly-widget'],
    context.req.headers['x-turnly-customer'],
  ]

  if (!widgetId) {
    throw new UnauthorizedException(
      'Access denied! You need to provide an widget before you can access this resource.'
    )
  }

  if (!customerId) {
    throw new UnauthorizedException(
      'Access denied! You need to provide a customer before you can access this resource.'
    )
  }

  Logger.debug('Checking if widget is authorized...', { widgetId })

  /**
   * @todo Add cache with datasources
   * https://www.apollographql.com/docs/apollo-server/data/data-sources/
   */
  const { data: widget } = await Integrations.getOne({
    id: String(widgetId),
  })

  if (!widget) {
    throw new UnauthenticatedException(
      'Access denied! You need to provide an authorized widget before you can access this resource.'
    )
  }

  Logger.debug('Checking if customer is authorized...', { customerId })

  const { data: customer } = await Customers.getOne({
    id: String(customerId),
    companyId: widget.companyId,
  })

  if (!customer) {
    throw new UnauthenticatedException(
      'Access denied! You need to provide an authorized customer.'
    )
  }

  context.req.customer = customer
  context.req.integration = widget

  Observability.ExceptionHandler.setUser(customer)

  Logger.debug('AuthGuard executed successfully!', { widget })

  return true
}
