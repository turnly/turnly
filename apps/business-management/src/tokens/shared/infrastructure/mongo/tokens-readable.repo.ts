/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { ITokensMapper } from 'tokens/shared/domain/contracts/tokens-mapper.interface'
import { ITokensReadableRepo } from 'tokens/shared/domain/contracts/tokens-repo.interface'
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { ITokenDocument, TokenModel } from './token.model'

export class TokensReadableRepo
  extends MongoReadableRepo<Token, ITokenDocument>
  implements ITokensReadableRepo
{
  public constructor(tokensMapper: ITokensMapper<ITokenDocument>) {
    super(TokenModel, tokensMapper)
  }
}
