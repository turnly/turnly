/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Token } from 'tokens/shared/domain/entity/token.entity'

type TokenRPC = Omit<EntityAttributes<Token>, 'secret'> & {
  secret?: string
}

export class TokensMapper {
  public static toRPC(
    entity: Nullable<TokenRPC> | undefined
  ): Producers.Tenancy.Token {
    const token = new Producers.Tenancy.Token()

    if (entity) {
      token.setId(entity.id).setName(entity.name).setScopesList(entity.scopes)

      if (entity.secret) token.setSecret(entity.secret)
    }

    return token
  }
}
