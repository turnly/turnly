import { AggregateRoot } from '@turnly/core'
import { Guid, Identifier } from '@turnly/shared'

import { TicketStatus } from '../enums/TicketStatus'
import { TicketCreatedEvent } from '../events/TicketCreatedEvent'

export interface Attributes {
  id: Guid
  status: TicketStatus
  displayCode: string
  serviceId: Guid
  locationId: Guid
  customerId: Guid
  metadata?: object
}

export class Ticket extends AggregateRoot<Attributes> {
  protected constructor(
    id: Guid,
    private status: TicketStatus,
    private displayCode: string,
    private serviceId: Guid,
    private locationId: Guid,
    private customerId: Guid,
    private metadata?: object
  ) {
    super(id)
  }

  public static create(attributes: Omit<Attributes, 'id'>): Ticket {
    const ticket = new Ticket(
      Identifier.generate('tkt'),
      attributes.status,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.metadata
    )

    ticket.register(new TicketCreatedEvent(ticket.toObject()))

    return ticket
  }

  public static build(attributes: Attributes): Ticket {
    return new Ticket(
      attributes.id,
      attributes.status,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.metadata
    )
  }

  public toObject(): Attributes {
    return {
      id: this.id,
      status: this.status,
      displayCode: this.displayCode,
      serviceId: this.serviceId,
      locationId: this.locationId,
      customerId: this.customerId,
      metadata: this.metadata,
    }
  }
}
