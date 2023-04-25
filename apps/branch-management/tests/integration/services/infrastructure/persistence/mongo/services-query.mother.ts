/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Service } from '../../../../../../src/services/shared/domain/entities/service.entity'

export class ServicesQueryMother {
  static getOneWith(service: Service) {
    const { id, locationId, organizationId } = service.toObject()

    return new QueryBuilder<Service>()
      .equal('id', id)
      .equal('locationId', locationId)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(services: Service[]) {
    const ids = services.map(service => service.toObject().id)

    return new QueryBuilder<Service>().in('id', ids).getMany(0, ids.length)
  }
}
