import { Guid, Nullable } from '@turnly/common'
import { MongoRepository, QueryBuilderObject } from '@turnly/shared'
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

  public async getOne(id: Guid): Promise<Nullable<Integration>> {
    const document = await this.model.findById(id)

    return document ? this.integrationsMapper.toEntity(document) : null
  }

  public async find(
    query: QueryBuilderObject<Integration>
  ): Promise<Integration[] | Nullable<Integration>> {
    const documents = await this.search(query)

    return Array.isArray(documents)
      ? this.integrationsMapper.toEntityList(documents)
      : documents
      ? this.integrationsMapper.toEntity(documents)
      : null
  }
}
