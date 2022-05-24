import { EntityAttributes } from '@turnly/core'
import { Guid } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Ticket>

export class TicketDTO {
  @MapProp()
  id: Guid

  @MapProp()
  displayCode: string

  @MapProp()
  status: TicketStatus

  @MapProp()
  metadata?: object

  @MapProp()
  serviceId: Guid

  @MapProp()
  locationId: Guid

  @MapProp()
  customerId: Guid

  public static create(entity: Entity): TicketDTO {
    return new Mapper().map(entity, new TicketDTO())
  }

  public static createList(collection: Entity[]): TicketDTO[] {
    return new Mapper().mapList(collection, TicketDTO)
  }
}
