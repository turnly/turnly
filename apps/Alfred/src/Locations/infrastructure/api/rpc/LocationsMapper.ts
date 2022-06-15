import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'

export class LocationMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Location>> | undefined
  ): Producers.Alfred.Location {
    const location = new Producers.Alfred.Location()

    if (entity) {
      location.setId(entity.id)
      // location.setCompanyId(entity.companyId)
      location.setName(entity.name)
      location.setAddress(entity.address)
      location.setCountry(entity.country)
      location.setLatitude(entity.coordinates.lat)
      location.setLongitude(entity.coordinates.lng)
      location.setStopServingBeforeInMinutes(entity.stopServingBeforeInMinutes)
    }

    return location
  }
}
