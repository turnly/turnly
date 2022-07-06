/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { ITicketsMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ITicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsMapper implements ITicketsMapper<ITicketDocument> {
  public toEntity(document: ITicketDocument): Ticket {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Ticket>>()

    return Ticket.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Ticket): ITicketDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new TicketModel({ ...attrs, _id })
  }

  public toEntityList(documents: ITicketDocument[]): Ticket[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Ticket[]): ITicketDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
