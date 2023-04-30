/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { MemberRoles } from '@turnly/auth'
import {
  ExceptionHandler,
  Logger,
  UnauthenticatedException,
} from '@turnly/observability'
import { AuthChecker } from 'type-graphql'

import { IContext } from './context.type'

const getCredentials = ({ req: { headers } }: IContext) => {
  const roles = [MemberRoles.AGENT]

  return { ...headers, roles, sub: '' }
}

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  ExceptionHandler.setUser(null)
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

  ExceptionHandler.setUser(agent)

  Logger.debug('AuthGuard executed successfully!', { agent })

  return true
}
