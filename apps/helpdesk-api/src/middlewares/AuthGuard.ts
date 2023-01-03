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
  const userLogged: {
    sub: string
    groups: string[]
  } = JSON.parse(headers['X-Forwarded-User'] as string)

  if (!userLogged) {
    throw new UnauthenticatedException()
  }

  if (!userLogged.groups.includes('agent')) {
    throw new UnauthorizedException(
      'Access denied! You need to be an agent to access this resource.'
    )
  }

  return userLogged
}

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  Observability.ExceptionHandler.setUser(null)
  context.setOrganizationId('')

  const { sub: userId } = getCredentials(context)

  if (!userId) {
    throw new UnauthorizedException(
      'Access denied! You need to be authenticated before you can access this resource.'
    )
  }

  Logger.debug('Checking if agent is authorized...')

  const { data: agent } = await context.dataSources.agents.getByUserId(
    String(userId)
  )

  if (!agent) {
    throw new UnauthenticatedException(
      'Access denied! You need to provide an authorized agent before you can access this resource.'
    )
  }

  context.setOrganizationId(agent.organizationId)

  context.req['agent'] = agent
  context.req['organizationId'] = agent.organizationId

  Observability.ExceptionHandler.setUser(agent)

  Logger.debug('AuthGuard executed successfully!', { agent })

  return true
}
