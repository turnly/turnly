/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { ITokensReadableRepo } from 'tokens/shared/domain/contracts/tokens-repo.interface'
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { GetOneTokenQuery } from './get-one-token.query'

@QueryHandler(GetOneTokenQuery)
export class GetOneTokenQueryHandler
  implements IQueryHandler<GetOneTokenQuery, Nullable<Token>>
{
  public constructor(
    private readonly tokensReadableRepo: ITokensReadableRepo
  ) {}

  public async execute({ secret, organizationId }: GetOneTokenQuery) {
    const query = new QueryBuilder<Token>()
      .equal('prefix', Token.extractPrefix(secret))
      .equal('organizationId', organizationId)
      .getOne()

    const token = await this.tokensReadableRepo.getOne(query)

    if (!token) throw new ResourceNotFoundException()

    if (!token.isSameSecret(secret))
      throw new ResourceNotFoundException(
        'Oops! The token you are looking for appears to be corrupted or has been revoked.'
      )

    return token
  }
}
