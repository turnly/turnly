import {
  BadRequestException,
  ConflictException,
  Guid,
  Nullable,
} from '@turnly/common'
import { ICommandBus, IEventBus, IQueryBus } from '@turnly/shared'
import { CreateTicketCommand } from 'Tickets/application/commands/CreateTicketCommand'
import { ITakeTicketUseCase } from 'Tickets/domain/contracts/use-cases/ITakeTicketUseCase'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { AnswerToCreateFromTicketEvent } from 'Tickets/domain/events/AnswerToCreateFromTicketEvent'
import { CreateTicketPayload } from 'Tickets/domain/payloads/CreateTicketPayload'

import { GetBusinessDataFieldsQuery } from '../queries/GetBusinessDataFieldsQuery'
import { GetCustomerActiveTicketQuery } from '../queries/GetCustomerActiveTicketQuery'

export class TakeTicketUseCase implements ITakeTicketUseCase {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
    private readonly eventBus: IEventBus
  ) {}

  public async present(payload: CreateTicketPayload): Promise<Ticket> {
    const currentTicket = await this.queryBus.ask<
      GetCustomerActiveTicketQuery,
      Nullable<Ticket>
    >(new GetCustomerActiveTicketQuery(payload.customerId))

    if (currentTicket)
      throw new ConflictException('Customer already has an active ticket')

    const hasFieldsAndIsAnswered = await this.checkIfRequiredFieldsAreAnswered(
      payload.serviceId,
      payload.answers
    )

    const ticket = await this.commandBus.execute<CreateTicketCommand, Ticket>(
      new CreateTicketCommand({ payload, publishEventsInstantly: true })
    )

    if (hasFieldsAndIsAnswered)
      this.eventBus.publish([
        new AnswerToCreateFromTicketEvent({
          ticket: ticket.toObject(),
          answers: payload.answers,
        }),
      ])

    return ticket
  }

  private async getRequiredFieldsByServiceId(serviceId: string) {
    return (
      await this.queryBus.ask<
        GetBusinessDataFieldsQuery,
        { id: string; isRequired: boolean }[]
      >(new GetBusinessDataFieldsQuery(serviceId))
    ).filter(field => field.isRequired)
  }

  private async checkIfRequiredFieldsAreAnswered(
    serviceId: Guid,
    answers?: {
      fieldId: Guid
      value: string
    }[]
  ) {
    const fields = await this.getRequiredFieldsByServiceId(serviceId)

    if (fields?.length) {
      if (!answers?.length)
        throw new BadRequestException('Oops!, you forgot to answer some fields')

      for (const field of fields) {
        const isAnswer = answers.some(
          answer => answer.fieldId === field.id && answer.value
        )

        if (!isAnswer)
          throw new BadRequestException(
            `Oops!, you forgot to answer required field ${field.id}`
          )
      }

      return true
    }

    return false
  }
}
