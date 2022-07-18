import { QueryBuilder } from '@turnly/shared'

import { Service } from '../../../../../src/Services/domain/entities/Service'

/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
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
