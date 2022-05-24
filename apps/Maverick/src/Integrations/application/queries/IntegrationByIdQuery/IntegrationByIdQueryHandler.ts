import { IQueryHandler, QueryHandler } from '@turnly/core'
import { Nullable } from '@turnly/shared'
import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'
import { Integration } from 'Integrations/domain/entities/Integration'

import { IntegrationByIdQuery } from './IntegrationByIdQuery'

@QueryHandler(IntegrationByIdQuery)
export class IntegrationByIdQueryHandler
  implements IQueryHandler<IntegrationByIdQuery, Nullable<Integration>>
{
  public constructor(
    private readonly integrationsReadableRepository: IIntegrationReadableRepository
  ) {}

  public async execute({ params }: IntegrationByIdQuery) {
    const { id } = params

    return await this.integrationsReadableRepository.getById(id)
  }
}
