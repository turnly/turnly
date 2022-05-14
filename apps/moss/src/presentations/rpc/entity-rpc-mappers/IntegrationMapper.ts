import { Producers } from '@turnly/rpc'
import { Nullable } from '@turnly/shared'
import { IntegrationDTO } from 'modules/integrations/api/dtos/IntegrationDTO'
import { Integration } from 'modules/integrations/domain/entities/Integration'
import { IntegrationStatus } from 'modules/integrations/domain/enums/IntegrationStatus'

export class IntegrationMapper {
  public static toRPC(
    entity: Nullable<IntegrationDTO | Integration> | undefined
  ): Producers.Integration {
    const integration = new Producers.Integration()

    if (entity) {
      integration.setId(entity.id)
      integration.setName(entity.name)
      integration.setOriginsList(entity.origins)
      integration.setCanCustomize(true)
    }

    return integration
  }

  public static toEntity(model: Producers.Integration): Integration {
    return Integration.create({
      id: model.getId(),
      name: model.getName(),
      origins: model.getOriginsList(),
      status: IntegrationStatus.ACTIVE,
    })
  }
}
