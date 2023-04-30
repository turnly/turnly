/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IAccessTokensMapper } from 'access-tokens/shared/domain/contracts/access-tokens-mapper.interface'
import { IAccessTokensWritableRepo } from 'access-tokens/shared/domain/contracts/access-tokens-repo.interface'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { AccessTokenModel, IAccessTokenDocument } from './access-token.model'

export class AccessTokensWritableRepo
  extends MongoWritableRepo<AccessToken, IAccessTokenDocument>
  implements IAccessTokensWritableRepo
{
  public constructor(
    accessTokensMapper: IAccessTokensMapper<IAccessTokenDocument>
  ) {
    super(AccessTokenModel, accessTokensMapper)
  }
}
