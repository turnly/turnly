import { ICommandBus } from '@turnly/shared'
import { CreateFieldCommand } from 'Fields/application/commands/CreateFieldCommand'
import { ICreateFieldUseCase } from 'Fields/domain/contracts/use-cases/ICreateFieldUseCase'
import { Field } from 'Fields/domain/entities/Field'
import { CreateFieldPayload } from 'Fields/domain/payloads/CreateFieldPayload'

export class CreateFieldUseCase implements ICreateFieldUseCase {
  public constructor(private readonly commandBus: ICommandBus) {}

  public async present(payload: CreateFieldPayload): Promise<Field> {
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
     *   if (!payload.fields[field.id]) {
     *    throw new Error('The customer did not fill all the required fields')
     *   }
     * }
     */

    /**
     * @todo
     *
     * If Business Data Fields are found, create fields.
     * const fields = await this.commandBus.execute(new CreateFieldCommand({ fields, customerId, ticketId }))
     */

    return await this.commandBus.execute<CreateFieldCommand, Field>(
      new CreateFieldCommand({ payload, publishEventsInstantly: true })
    )
  }
}
