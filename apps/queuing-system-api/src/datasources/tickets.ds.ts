/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource, GraphException } from '@turnly/graph'

import { Tickets } from '../api.service'
import { IContext } from '../context.type'
import { TicketsMapper } from './tickets.mapper'

export class TicketsDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, customerId: Guid) {
    const { data: ticket, meta } = await Tickets.getOne({
      id,
      customerId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  public async getTicketsBeforeYours(id: Guid, customerId: Guid) {
    const { dataList } = await Tickets.getTicketsBeforeYours({
      id,
      customerId,
    })

    return dataList.map(ticket => ticket.id)
  }

  public async getCalledTo(
    _id: Guid,
    _customerId: Guid,
    _organizationId: Guid
  ) {
    /**
     * TODO: Implement method to get calledTo (AssignedTo -> Desk)
     */
    return null
  }
}
