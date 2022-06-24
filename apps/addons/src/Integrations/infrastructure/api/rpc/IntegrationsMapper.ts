import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'

export class IntegrationsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Integration>> | undefined
  ): Producers.Addons.Integration {
    const integration = new Producers.Addons.Integration()

    if (entity) {
      integration.setId(entity.id)
      integration.setName(entity.name)
      integration.setOriginsList(entity.origins)
      integration.setCanCustomize(true)
    }

    return integration
  }
}
