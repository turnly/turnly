/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IAccessTokensMapper } from 'access-tokens/shared/domain/contracts/access-tokens-mapper.interface'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { AccessTokenModel, IAccessTokenDocument } from './access-token.model'

export class AccessTokensMapper
  implements IAccessTokensMapper<IAccessTokenDocument>
{
  public toEntity(document: IAccessTokenDocument): AccessToken {
    const { _id, ...attrs } = document.toObject<EntityAttributes<AccessToken>>()

    return AccessToken.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: AccessToken): IAccessTokenDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new AccessTokenModel({ ...attrs, _id })
  }

  public toEntityList(documents: IAccessTokenDocument[]): AccessToken[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: AccessToken[]): IAccessTokenDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
