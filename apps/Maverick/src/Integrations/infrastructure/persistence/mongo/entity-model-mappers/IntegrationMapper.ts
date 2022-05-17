/* eslint-disable @typescript-eslint/naming-convention */
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationMapper implements IIntegrationMapper {
  public toEntity({ _id: id, ...document }: IntegrationDocument): Integration {
    return Integration.create({ ...document, id })
  }

  public toModel(entity: Integration): IntegrationDocument {
    const { id: _id, ...document } = entity.toObject()

    return new IntegrationModel({ ...document, _id })
  }

  public toEntityList(documents: IntegrationDocument[]): Integration[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Integration[]): IntegrationDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
