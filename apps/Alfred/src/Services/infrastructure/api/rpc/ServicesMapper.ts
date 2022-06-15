import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Service } from 'Services/domain/entities/Service'

export class ServiceMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Service>> | undefined
  ): Producers.Alfred.Service {
    const service = new Producers.Alfred.Service()

    if (entity) {
      service.setId(entity.id)
      service.setCompanyId(entity.companyId)
      service.setLocationId(entity.locationId)
      service.setName(entity.name)
      service.setDescription(entity.description)
    }

    return service
  }
}
