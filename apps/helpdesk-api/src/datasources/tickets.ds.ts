/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource, GraphException } from '@turnly/graph'
import { TicketsMapper } from 'datasources/tickets.mapper'

import { Tickets } from '../api.service'
import { IContext } from '../context.type'

export type GetTicketsForServingFromLocationParams = {
  locationId: Guid
  status?: string
  searchQuery?: string
  serviceIds?: Guid[]
}

export class TicketsDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async find({
    locationId,
    status = '',
    searchQuery: findQuery = '',
    serviceIds: serviceIdsList = [],
  }: GetTicketsForServingFromLocationParams) {
    const { dataList: tickets } =
      await Tickets.getTicketsForServingFromLocation({
        locationId,
        status,
        findQuery,
        serviceIdsList,
      })

    return tickets || []
  }

  public async getDetails(id: Guid) {
    const { data: ticket, meta } = await Tickets.getDetails({
      id,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }
}
