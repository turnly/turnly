import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IIntegrationsReadableRepo } from 'Integrations/domain/contracts/IIntegrationsRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import { IntegrationByIdQuery } from './IntegrationByIdQuery'

@QueryHandler(IntegrationByIdQuery)
export class IntegrationByIdQueryHandler
  implements IQueryHandler<IntegrationByIdQuery, Nullable<Integration>>
{
  public constructor(
    private readonly integrationsReadableRepo: IIntegrationsReadableRepo
  ) {}

  public async execute({ id }: IntegrationByIdQuery) {
    const query = new QueryBuilder<Integration>().equal('id', id).getOne()

    return await this.integrationsReadableRepo.getOne(query)
  }
}
