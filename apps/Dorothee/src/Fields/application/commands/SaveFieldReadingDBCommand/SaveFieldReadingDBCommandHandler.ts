import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { IFieldWritableRepository } from 'Fields/domain/contracts/IFieldRepository'
import { Field } from 'Fields/domain/entities/Field'

import { SaveFieldReadingDBCommand } from './SaveFieldReadingDBCommand'

@CommandHandler(SaveFieldReadingDBCommand)
export class SaveFieldReadingDBCommandHandler
  implements ICommandHandler<SaveFieldReadingDBCommand, void>
{
  public constructor(
    private readonly fieldWritableElasticRepository: IFieldWritableRepository
  ) {}

  public async execute({ payload }: SaveFieldReadingDBCommand) {
    const field = Field.build(payload)

    await this.fieldWritableElasticRepository.save(field)
  }
}
