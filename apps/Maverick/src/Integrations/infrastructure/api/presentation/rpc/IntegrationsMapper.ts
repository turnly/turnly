import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Integration } from 'Integrations/domain/entities/Integration'
import { IntegrationStatus } from 'Integrations/domain/enums/IntegrationStatus'
import { IntegrationDTO } from 'Integrations/infrastructure/api/dtos/IntegrationDTO'

export class IntegrationMapper {
  public static toRPC(
    entity: Nullable<IntegrationDTO> | undefined
  ): Producers.Maverick.Integration {
    const integration = new Producers.Maverick.Integration()

    if (entity) {
      integration.setId(entity.id)
      integration.setName(entity.name)
      integration.setOriginsList(entity.origins)
      integration.setCanCustomize(true)
    }

    return integration
  }

  public static toEntity(model: Producers.Maverick.Integration): Integration {
    return Integration.build({
      id: model.getId(),
      name: model.getName(),
      origins: model.getOriginsList(),
      status: IntegrationStatus.ACTIVE,
    })
  }
}
