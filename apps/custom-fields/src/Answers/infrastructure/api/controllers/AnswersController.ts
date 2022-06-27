import {
  Controller,
  EntityAttributes,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateAnswersBulkCommand } from 'Answers/application/commands/CreateAnswerBulkCommand'
import { Answer } from 'Answers/domain/entities/Answer'

import { validator } from '../validators/AnswersValidator'

export class AnswersController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: Omit<EntityAttributes<Answer>, 'id'>[]) {
    const answers = await this.commandBus.execute<
      Answer[],
      CreateAnswersBulkCommand
    >(new CreateAnswersBulkCommand(params))

    return this.respond.created(answers.map(answer => answer.toObject()))
  }
}
