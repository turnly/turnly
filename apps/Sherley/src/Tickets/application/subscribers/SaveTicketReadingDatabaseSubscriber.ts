import { EventsSubscriber, IEventSubscriber } from '@turnly/core'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketCreatedEvent } from 'Tickets/domain/events/TicketCreatedEvent'
import { TicketUpdatedEvent } from 'Tickets/domain/events/TicketUpdatedEvent'

type Event = TicketCreatedEvent | TicketUpdatedEvent

@EventsSubscriber(TicketCreatedEvent, TicketUpdatedEvent)
export class SaveTicketReadingDatabaseSubscriber
  implements IEventSubscriber<Event>
{
  public constructor(
    private readonly ticketWritableElasticRepository: ITicketWritableRepository
  ) {}

  public async execute(event: Event) {
    const { payload } = event

    if (payload)
      await this.ticketWritableElasticRepository.save(Ticket.build(payload))
  }
}
