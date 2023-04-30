/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IAccessTokensMapper } from 'access-tokens/shared/domain/contracts/access-tokens-mapper.interface'
import { IAccessTokensReadableRepo } from 'access-tokens/shared/domain/contracts/access-tokens-repo.interface'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { AccessTokenModel, IAccessTokenDocument } from './access-token.model'

export class AccessTokensReadableRepo
  extends MongoReadableRepo<AccessToken, IAccessTokenDocument>
  implements IAccessTokensReadableRepo
{
  public constructor(
    accessTokensMapper: IAccessTokensMapper<IAccessTokenDocument>
  ) {
    super(AccessTokenModel, accessTokensMapper)
  }
}
