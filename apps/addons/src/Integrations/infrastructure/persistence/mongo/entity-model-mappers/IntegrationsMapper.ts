/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { IIntegrationsMapper } from 'Integrations/domain/contracts/IIntegrationsMapper'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IIntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

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
