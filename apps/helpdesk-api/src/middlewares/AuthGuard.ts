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

/**
 * @todo Move this to a shared package
 */
export type IUserLogged = {
  sub: string
  groups: string[]
}

/**
 * @todo Move this to a shared package
 */
export enum UserRoles {
  AGENT = 'agent',
  MANAGER = 'manager',
  ORGANIZATION = 'organization',
}

const getCredentials = ({ req: { headers } }: IContext) => {
  const forwarded = headers['x-forwarded-user'] as string

  if (!forwarded) throw new UnauthenticatedException()

  const userLogged: IUserLogged = JSON.parse(forwarded)

  if (!userLogged) throw new UnauthenticatedException()

  if (!userLogged.groups.includes(UserRoles.AGENT)) {
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
