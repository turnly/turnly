import { Controller, ICommandBus, TimeoutHandler } from '@turnly/shared'
import { CreateAnswersBatchCommand } from 'Answers/application/commands/CreateAnswerBatchCommand'
import { Answer } from 'Answers/domain/entities/Answer'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export class AnswersController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  public async batch(params: CreateAnswerPayload[]) {
    const answers = await this.commandBus.execute<
      CreateAnswersBatchCommand,
      Answer[]
    >(new CreateAnswersBatchCommand(params))

    return this.respond.created(answers.map(answer => answer.toObject()))
  }
}
