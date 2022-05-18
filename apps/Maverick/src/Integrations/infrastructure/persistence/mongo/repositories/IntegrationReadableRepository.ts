import { MongoRepository } from '@turnly/core'
import { Nullable, Uuid } from '@turnly/shared'
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationReadableRepository extends MongoRepository<
  Integration,
  IntegrationDocument
> {
  public constructor(private readonly integrationsMapper: IIntegrationMapper) {
    super(IntegrationModel)
  }

  public async getById(id: Uuid): Promise<Nullable<Integration>> {
    const document = await this.model.findById(id)

    return document ? this.integrationsMapper.toEntity(document) : null
  }
}
