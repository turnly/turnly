/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { IAccessTokensReadableRepo } from 'access-tokens/shared/domain/contracts/access-tokens-repo.interface'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { GetOneAccessTokenQuery } from './get-one-access-token.query'

@QueryHandler(GetOneAccessTokenQuery)
export class GetOneAccessTokenQueryHandler
  implements IQueryHandler<GetOneAccessTokenQuery, Nullable<AccessToken>>
{
  public constructor(
    private readonly accessTokensReadableRepo: IAccessTokensReadableRepo
  ) {}

  public async execute({ token, organizationId }: GetOneAccessTokenQuery) {
    const query = new QueryBuilder<AccessToken>()
      .equal('prefix', AccessToken.extractPrefix(token))
      .equal('organizationId', organizationId)
      .getOne()

    const accessToken = await this.accessTokensReadableRepo.getOne(query)

    if (!accessToken) throw new ResourceNotFoundException()

    if (!accessToken.isSameToken(token))
      throw new ResourceNotFoundException(
        'Oops! The token you are looking for appears to be corrupted or has been revoked.'
      )

    return accessToken
  }
}
