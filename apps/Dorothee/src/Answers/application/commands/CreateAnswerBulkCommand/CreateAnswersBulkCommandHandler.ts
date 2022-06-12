import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IAnswersWritableRepo } from 'Answers/domain/contracts/IAnswersRepo'
import { Answer } from 'Answers/domain/entities/Answer'

import { CreateAnswersBulkCommand } from './CreateAnswersBulkCommand'

@CommandHandler(CreateAnswersBulkCommand)
export class CreateAnswerBulkCommandHandler
  implements ICommandHandler<CreateAnswersBulkCommand, Answer[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly answersWritableRepo: IAnswersWritableRepo
  ) {}

  public async execute({ payload }: CreateAnswersBulkCommand) {
    const answers = payload.map(answer => Answer.create(answer))

    await this.answersWritableRepo.save(answers)

    for (const answer of answers) {
      this.eventBus.publish(answer.pull())
    }

    return answers
  }
}
