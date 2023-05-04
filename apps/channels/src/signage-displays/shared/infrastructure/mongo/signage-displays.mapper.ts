/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { ISignageDisplaysMapper } from 'signage-displays/shared/domain/contratcs/signage-displays-mapper.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import {
  ISignageDisplayDocument,
  SignageDisplayModel,
} from './signage-display.model'

export class SignageDisplaysMapper
  implements ISignageDisplaysMapper<ISignageDisplayDocument>
{
  public toEntity(document: ISignageDisplayDocument): SignageDisplay {
    const { _id, ...attrs } =
      document.toObject<EntityAttributes<SignageDisplay>>()

    return SignageDisplay.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: SignageDisplay): ISignageDisplayDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new SignageDisplayModel({ ...attrs, _id })
  }

  public toEntityList(documents: ISignageDisplayDocument[]): SignageDisplay[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: SignageDisplay[]): ISignageDisplayDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
