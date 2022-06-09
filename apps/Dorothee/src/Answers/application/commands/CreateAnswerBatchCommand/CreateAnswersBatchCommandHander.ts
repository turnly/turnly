import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IAnswersWritableRepo } from 'Answers/domain/contracts/IAnswersRepo'
import { Answer } from 'Answers/domain/entities/Answer'

import { CreateAnswersBatchCommand } from './CreateAnswersBatchCommand'

@CommandHandler(CreateAnswersBatchCommand)
export class CreateAnswerBatchCommandHandler
  implements ICommandHandler<CreateAnswersBatchCommand, Answer[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly answersWritableRepo: IAnswersWritableRepo
  ) {}

  public async execute({ payload }: CreateAnswersBatchCommand) {
    // const answers = payload.map(answer => Answer.create(answer))

    return Promise.all(
      payload.map(answer =>
        this.answersWritableRepo.save(Answer.create(answer))
      )
    )

    // await this.answersWritableRepo.save(answer)

    // this.eventBus.publish(answer.pull())

    // return answer
  }
}
