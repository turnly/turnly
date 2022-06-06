import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryHandler } from '@turnly/shared'
import { IIntegrationReadableRepo } from 'Integrations/domain/contracts/IIntegrationRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import { IntegrationByIdQuery } from './IntegrationByIdQuery'

@QueryHandler(IntegrationByIdQuery)
export class IntegrationByIdQueryHandler
  implements IQueryHandler<IntegrationByIdQuery, Nullable<Integration>>
{
  public constructor(
    private readonly integrationsReadableRepo: IIntegrationReadableRepo
  ) {}

  public async execute({ params }: IntegrationByIdQuery) {
    const { id } = params

    return await this.integrationsReadableRepo.getById(id)
  }
}
