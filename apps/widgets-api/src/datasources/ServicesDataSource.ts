/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Services, Tickets } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource()
export class ServicesDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, organizationId: Guid) {
    const { data: service, meta } = await Services.getOne({
      id,

      organizationId,
    })

    if (!service) throw new GraphException(meta)

    return service
  }

  public async getLocationServices(locationId: Guid, organizationId: Guid) {
    const services = (
      await Services.findByLocation({
        locationId,
        organizationId,
      })
    ).dataList

    if (!services) return []

    return services
  }

  public async getTicketsWaitingForService(
    serviceId: Guid,
    customerId: Guid,
    organizationId: Guid
  ): Promise<number> {
    const services = (
      await Tickets.getTicketsWaitingForService({
        serviceIdsList: [serviceId],
        organizationId,
        customerId,
      })
    ).dataList

    if (!services.length) return 0

    return services[0].ticketsList.length
  }
}
