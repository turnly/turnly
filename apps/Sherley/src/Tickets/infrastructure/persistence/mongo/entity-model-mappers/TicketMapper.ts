/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { ITicketMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { TicketDocument, TicketModel } from '../models/TicketModel'

export class TicketMapper implements ITicketMapper<TicketDocument> {
  public toEntity(document: TicketDocument): Ticket {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Ticket>>()

    return Ticket.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Ticket): TicketDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new TicketModel({ ...attrs, _id })
  }

  public toEntityList(documents: TicketDocument[]): Ticket[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Ticket[]): TicketDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
