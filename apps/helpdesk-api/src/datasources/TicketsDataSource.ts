/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { TicketsMapper } from 'mappers/TicketsMapper'
import { GraphException } from 'shared/GraphException'

import { Tickets } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

export type GetTicketsByLocationParams = {
  locationId: Guid
  status?: string
  searchQuery?: string
  serviceIds?: Guid[]
}

@CacheSource()
export class TicketsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async find({
    locationId,
    status = '',
    searchQuery: findQuery = '',
    serviceIds: serviceIdsList = [],
  }: GetTicketsByLocationParams) {
    const { dataList: tickets } = await Tickets.getTicketsByLocation({
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
