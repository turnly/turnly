/* eslint-disable @typescript-eslint/naming-convention */
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import {
  Attributes,
  Integration,
} from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationMapper implements IIntegrationMapper {
  public toEntity(document: IntegrationDocument): Integration {
    const { _id, ...attrs } = document.toObject<Attributes>()

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
