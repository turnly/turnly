/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Logger, Observability, UnauthenticatedException } from '@turnly/common'
import { getForwardedUserLogged, UserRoles } from '@turnly/shared'
import { IContext } from '@types'
import { AuthChecker } from 'type-graphql'

const getCredentials = ({ req: { headers } }: IContext) => {
  const roles = [UserRoles.AGENT]

  return getForwardedUserLogged(headers, roles)
}

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  Observability.ExceptionHandler.setUser(null)
  context.setOrganizationId('')

  const { sub: userId } = getCredentials(context)

  Logger.debug('Checking if agent is authorized...')

  const { data: agent } = await context.dataSources.agents.getByUserId(userId)

  if (!agent) {
    throw new UnauthenticatedException(
      'Access denied! We could not find an agent with the provided credentials.'
    )
  }

  context.setOrganizationId(agent.organizationId)

  context.req['agent'] = agent
  context.req['organizationId'] = agent.organizationId

  Observability.ExceptionHandler.setUser(agent)

  Logger.debug('AuthGuard executed successfully!', { agent })

  return true
}
