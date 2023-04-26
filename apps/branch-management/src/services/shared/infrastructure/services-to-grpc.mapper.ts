/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Service } from 'services/shared/domain/entities/service.entity'

export class ServicesMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Service>> | undefined
  ): Producers.BranchManagement.Service {
    const service = new Producers.BranchManagement.Service()

    if (entity) {
      service.setId(entity.id)
      service.setLocationId(entity.locationId)
      service.setName(entity.name)
      service.setDescription(entity.description)
    }

    return service
  }
}
