import { ICommandBus } from '@turnly/shared'
import { CreateAnswerCommand } from 'Answers/application/commands/CreateAnswerCommand'
import { ICreateAnswerUseCase } from 'Answers/domain/contracts/use-cases/ICreateAnswerUseCase'
import { Answer } from 'Answers/domain/entities/Answer'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export class CreateAnswerUseCase implements ICreateAnswerUseCase {
  public constructor(private readonly commandBus: ICommandBus) {}

  public async present(payload: CreateAnswerPayload): Promise<Answer> {
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

    return await this.commandBus.execute<CreateAnswerCommand, Answer>(
      new CreateAnswerCommand({ payload, publishEventsInstantly: true })
    )
  }
}
