import { ICommandBus } from '@turnly/core'
import { CreateTicketCommand } from 'Tickets/application/commands/CreateTicketCommand'
import { ITakeTicketUseCase } from 'Tickets/domain/contracts/use-cases/ITakeTicketUseCase'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

export class TakeTicketUseCase implements ITakeTicketUseCase {
  public constructor(private readonly commandBus: ICommandBus) {}

  public async present(payload: CreateTicketPayload): Promise<Ticket> {
    /**
     * @todo
     *
     * Check if location is available
     * await this.queryBus.ask(new GetLocationAvailabilityQuery(payload.locationId))
     */

    /**
     * @todo
     *
     * Validate if the location is at its maximum ticket capacity (per service).
     * await this.queryBus.ask(new GetLocationCapacityQuery(payload.locationId))
     */

    /**
     * @todo
     *
     * Get the number of tickets created and calculate the time to know if the ticket can be attended.
     *
     */

    /**
     * @todo
     *
     * 1. Get Customer data by Id
     * 2. Check if the customer has another ticket already
     *
     * await this.queryBus.ask(new GetCustomerByIdQuery(data.customerId))
     * await this.queryBus.ask(new GetTicketsByCustomerIdQuery(data.customerId))
     */

    /**
     * @todo
     *
     * 1. Get business data fields and fill them with data from the request
     * 2. Create answer for the data fields
     *
     * await this.queryBus.ask(new GetBusinessDataFieldsByLocationIdQuery(data.locationId))
     * await this.commandBus.execute(new CreateAnswerCommand(data.answers))
     */

    return await this.commandBus.execute<CreateTicketCommand, Ticket>(
      new CreateTicketCommand({ payload, publishEventsInstantly: true })
    )
  }
}
