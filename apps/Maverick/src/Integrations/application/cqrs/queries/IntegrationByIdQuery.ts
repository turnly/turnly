import { IQuery } from '@turnly/core'
import { Nullable } from '@turnly/shared'
import { IIntegrationRepository } from 'Integrations/domain/contracts/IIntegrationRepository'
import { Integration } from 'Integrations/domain/entities/Integration'
import { GetIntegrationPayload } from 'Integrations/domain/payloads/GetIntegrationPayload'

export class IntegrationByIdQuery
  implements IQuery<GetIntegrationPayload, Nullable<Integration>>
{
  public constructor(
    private readonly integrationsRepository: IIntegrationRepository
  ) {}

  public async ask({
    id,
  }: GetIntegrationPayload): Promise<Nullable<Integration>> {
    return await this.integrationsRepository.getById(id)
  }
}
