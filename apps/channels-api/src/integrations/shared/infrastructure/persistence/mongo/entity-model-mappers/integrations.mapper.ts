/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { IIntegrationsMapper } from 'integrations/shared/domain/contratcs/integrations-mapper.interface'
import { Integration } from 'integrations/shared/domain/entities/integration.entity'

import {
  IIntegrationDocument,
  IntegrationModel,
} from '../models/integration.model'

export class IntegrationsMapper
  implements IIntegrationsMapper<IIntegrationDocument>
{
  public toEntity(document: IIntegrationDocument): Integration {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Integration>>()

    return Integration.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Integration): IIntegrationDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new IntegrationModel({ ...attrs, _id })
  }

  public toEntityList(documents: IIntegrationDocument[]): Integration[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Integration[]): IIntegrationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
