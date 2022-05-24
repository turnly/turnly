import { ICommandBus, IEventBus, IQueryBus } from '@turnly/core'
import { ITicketWritableRepository } from 'Tickets/domain/contracts/ITicketRepository'
import {
  ITakeTicketUseCase,
  TakeTicketPayload,
} from 'Tickets/domain/contracts/use-cases/ITakeTicketUseCase'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export class TakeTicketUseCase implements ITakeTicketUseCase {
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly commandBus: ICommandBus,
    private readonly ticketWritableRepository: ITicketWritableRepository
  ) {}

  public async present(data: TakeTicketPayload): Promise<Ticket> {
    /**
     * 1. Get Customer data by Id
     * 2. Check if the customer has another ticket already
     *
     * await this.queryBus.ask(new GetCustomerByIdQuery(data.customerId))
     * await this.queryBus.ask(new GetTicketsByCustomerIdQuery(data.customerId))
     */

    /**
     * 3. Get business data fields and fill them with data from the request
     * 4. Create answer for the data fields
     *
     * await this.queryBus.ask(new GetBusinessDataFieldsByLocationIdQuery(data.locationId))
     * await this.commandBus.execute(new CreateAnswerCommand(data.answers))
     */

    /**
     * 5. Create ticket
     */
    const ticket = Ticket.create({ ...data, status: TicketStatus.ACTIVE })

    const saved = await this.ticketWritableRepository.save(ticket)

    this.eventBus.publish(ticket.pull())

    return saved
  }
}
