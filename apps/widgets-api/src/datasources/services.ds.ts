/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource, GraphException } from '@turnly/graph'

import { Services, Tickets } from '../api.service'
import { IContext } from '../context.type'

export class ServicesDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    const { data: service, meta } = await Services.getOne({ id })

    if (!service) throw new GraphException(meta)

    return service
  }

  public async getLocationServices(locationId: Guid) {
    const services = (await Services.listServicesOfOneLocation({ locationId }))
      .dataList

    if (!services) return []

    return services
  }

  public async getTicketsWaitingForService(
    serviceId: Guid,
    customerId: Guid
  ): Promise<number> {
    const services = (
      await Tickets.getTicketsWaitingForService({
        serviceIdsList: [serviceId],
        customerId,
      })
    ).dataList

    if (!services.length) return 0

    return services[0].ticketsList.length
  }
}
