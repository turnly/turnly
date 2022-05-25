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
     * Check if the customer has active tickets
     * await this.queryBus.ask(new GetCustomerActiveTicketsQuery(payload.customerId))
     */

    /**
     * @todo
     *
     * Search Business Data Fields for the serviceId
     * const fields = await this.queryBus.ask(new GetBusinessDataFieldsQuery(payload.serviceId))
     */

    /**
     * @todo
     *
     * If Business Data Fields are found, validate if the customer filled all the required fields
     *
     * const requiredFields = fields.filter(field => field.isRequired)
     *
     * for (const field of requiredFields) {
     *   if (!payload.answers[field.id]) {
     *    throw new Error('The customer did not fill all the required fields')
     *   }
     * }
     */

    /**
     * @todo
     *
     * If Business Data Fields are found, create answers.
     * const answers = await this.commandBus.execute(new CreateAnswerCommand({ answers, customerId, ticketId }))
     */

    return await this.commandBus.execute<CreateTicketCommand, Ticket>(
      new CreateTicketCommand({ payload, publishEventsInstantly: true })
    )
  }
}
