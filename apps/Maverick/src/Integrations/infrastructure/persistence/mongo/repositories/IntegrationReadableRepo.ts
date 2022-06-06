import { Guid, NotImplementedError, Nullable } from '@turnly/common'
import { Criteria, MongoRepository } from '@turnly/shared'
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { IIntegrationReadableRepo } from 'Integrations/domain/contracts/IIntegrationRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationReadableRepo
  extends MongoRepository<Integration, IntegrationDocument>
  implements IIntegrationReadableRepo
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
