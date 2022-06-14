/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationMapper
  implements IIntegrationMapper<IntegrationDocument>
{
  public toEntity(document: IntegrationDocument): Integration {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Integration>>()

    return Integration.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Integration): IntegrationDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new IntegrationModel({ ...attrs, _id })
  }

  public toEntityList(documents: IntegrationDocument[]): Integration[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Integration[]): IntegrationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
