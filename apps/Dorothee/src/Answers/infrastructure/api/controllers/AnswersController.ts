import { Controller, ICommandBus, TimeoutHandler } from '@turnly/shared'
import { CreateAnswersBulkCommand } from 'Answers/application/commands/CreateAnswerBulkCommand'
import { Answer } from 'Answers/domain/entities/Answer'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export class AnswersController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  public async batch(params: CreateAnswerPayload[]) {
    const answers = await this.commandBus.execute<
      CreateAnswersBulkCommand,
      Answer[]
    >(new CreateAnswersBulkCommand(params))

    return this.respond.created(answers.map(answer => answer.toObject()))
  }
}
