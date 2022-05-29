import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
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
}
