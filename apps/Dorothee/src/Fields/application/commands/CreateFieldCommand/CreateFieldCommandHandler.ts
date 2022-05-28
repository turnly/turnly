import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IFieldWritableRepository } from 'Fields/domain/contracts/IFieldRepository'
import { Field } from 'Fields/domain/entities/Field'

import { CreateFieldCommand } from './CreateFieldCommand'

@CommandHandler(CreateFieldCommand)
export class CreateFieldCommandHandler
  implements ICommandHandler<CreateFieldCommand, Field>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly fieldsWritableRepository: IFieldWritableRepository
  ) {}

  public async execute({
    params: { payload, publishEventsInstantly },
  }: CreateFieldCommand) {
    const field = Field.create(payload)

    await this.fieldsWritableRepository.save(field)

    if (publishEventsInstantly) this.eventBus.publish(field.pull())

    return field
  }
}
