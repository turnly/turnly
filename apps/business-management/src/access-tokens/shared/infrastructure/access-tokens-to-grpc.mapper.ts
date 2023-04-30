/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

type AccessTokenRPC = Omit<EntityAttributes<AccessToken>, 'token'> & {
  token?: string
}

export class AccessTokensMapper {
  public static toRPC(
    entity: Nullable<AccessTokenRPC> | undefined
  ): Producers.BusinessManagement.AccessToken {
    const accessToken = new Producers.BusinessManagement.AccessToken()

    if (entity) {
      accessToken
        .setId(entity.id)
        .setName(entity.name)
        .setScopesList(entity.scopes)
        .setPrefix(entity.prefix)
        .setCreatedByType(entity.createdByType)
        .setCreatedById(entity.createdById)

      if (entity.token) accessToken.setToken(entity.token)
    }

    return accessToken
  }
}
