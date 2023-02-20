/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { UnauthenticatedException, UnauthorizedException } from '@turnly/common'

import { FORWARDED_USER_HEADER } from './forwarded-user-header.const'
import { UserLogged } from './user-logged.type'
import { UserRoles } from './user-roles.enum'

export const getForwardedUserLogged = <T extends Record<string, any>>(
  headers: T,
  roles?: UserRoles[]
): UserLogged => {
  const payload = headers[FORWARDED_USER_HEADER] as string

  if (!payload) throw new UnauthenticatedException()

  const userLogged = JSON.parse(payload) as UserLogged

  if (!userLogged?.sub) throw new UnauthenticatedException()

  if (roles && !roles.some(role => userLogged.groups.includes(role))) {
    throw new UnauthorizedException(
      'Access denied! You do not have permission to perform this action.'
    )
  }

  return userLogged
}
