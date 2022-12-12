/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Observability,
  UnauthenticatedException,
  UnauthorizedException,
} from '@turnly/common'
import { IContext } from '@types'
import { AuthChecker } from 'type-graphql'

const getCredentials = ({ req: { headers } }: IContext) => {
  const { authorization } = headers

  if (!authorization) {
    throw new UnauthenticatedException()
  }

  if (!authorization.startsWith('Bearer ')) {
    throw new UnauthorizedException()
  }

  const token = authorization.split(' ')[1]

  return { token }
}

export const AuthGuard: AuthChecker<IContext> = async ({ context }) => {
  Observability.ExceptionHandler.setUser(null)
  context.setOrganizationId('')

  const { token } = getCredentials(context)

  if (token) context.setOrganizationId(token)

  return true
}
