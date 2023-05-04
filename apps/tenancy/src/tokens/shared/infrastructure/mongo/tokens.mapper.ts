/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { ITokensMapper } from 'tokens/shared/domain/contracts/tokens-mapper.interface'
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { ITokenDocument, TokenModel } from './token.model'

export class TokensMapper implements ITokensMapper<ITokenDocument> {
  public toEntity(document: ITokenDocument): Token {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Token>>()

    return Token.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Token): ITokenDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new TokenModel({ ...attrs, _id })
  }

  public toEntityList(documents: ITokenDocument[]): Token[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Token[]): ITokenDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
