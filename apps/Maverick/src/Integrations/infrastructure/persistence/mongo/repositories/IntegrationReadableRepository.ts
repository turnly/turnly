import { Criteria, MongoRepository } from '@turnly/core'
import { Guid, NotImplementedError, Nullable } from '@turnly/shared'
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationReadableRepository
  extends MongoRepository<Integration, IntegrationDocument>
  implements IIntegrationReadableRepository
{
  public constructor(
    private readonly integrationsMapper: IIntegrationMapper<IntegrationDocument>
  ) {
    super(IntegrationModel)
  }

  public async getById(id: Guid): Promise<Nullable<Integration>> {
    const document = await this.model.findById(id)

    return document ? this.integrationsMapper.toEntity(document) : null
  }

  public async search(_query: Criteria): Promise<Nullable<Integration[]>> {
    throw new NotImplementedError()
  }
}
