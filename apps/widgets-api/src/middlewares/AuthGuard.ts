/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Logger,
  Observability,
  UnauthenticatedException,
  UnauthorizedException,
} from '@turnly/common'
import { IContext } from '@types'
import { AuthChecker } from 'type-graphql'

const getCredentials = ({ req: { headers } }: IContext) => {
  const authorization = headers.authorization

  if (!authorization) {
    throw new UnauthenticatedException()
  }

  if (!authorization.startsWith('Basic ')) {
    throw new UnauthorizedException()
  }

  const token = authorization.split(' ')[1]
  const credentials = Buffer.from(token, 'base64').toString('ascii')

  const [widgetId, customerId] = credentials.split(':')

  return { widgetId, customerId }
}

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  Observability.ExceptionHandler.setUser(null)
  context.setOrganizationId('')

  const { widgetId, customerId } = getCredentials(context)

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

  const { data: widget } = await context.dataSources.widgets.getOne(
    String(widgetId)
  )

  if (!widget) {
    throw new UnauthenticatedException(
      'Access denied! You need to provide an authorized widget before you can access this resource.'
    )
  }

  context.setOrganizationId(widget.organizationId)

  Logger.debug('Checking if customer is authorized...', { customerId })

  const { data: customer } = await context.dataSources.customers.getOne(
    customerId
  )

  if (!customer) {
    throw new UnauthenticatedException(
      'Access denied! You need to provide an authorized customer.'
    )
  }

  context.req['customer'] = customer
  context.req['widget'] = widget
  context.req['organizationId'] = widget.organizationId

  Observability.ExceptionHandler.setUser(customer)

  Logger.debug('AuthGuard executed successfully!', { widget })

  return true
}
