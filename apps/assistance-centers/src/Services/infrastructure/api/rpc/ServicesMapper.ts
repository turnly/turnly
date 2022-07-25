/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Service } from 'Services/domain/entities/Service'

export class ServicesMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Service>> | undefined
  ): Producers.AssistanceCenters.Service {
    const service = new Producers.AssistanceCenters.Service()

    if (entity) {
      service.setId(entity.id)
      service.setLocationId(entity.locationId)
      service.setName(entity.name)
      service.setDescription(entity.description)
    }

    return service
  }
}
