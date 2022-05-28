import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IAnswerWritableRepository } from 'Answers/domain/contracts/IAnswerRepository'
import { Answer } from 'Answers/domain/entities/Answer'

import { CreateAnswerCommand } from './CreateAnswerCommand'

@CommandHandler(CreateAnswerCommand)
export class CreateAnswerCommandHandler
  implements ICommandHandler<CreateAnswerCommand, Answer>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly answersWritableRepository: IAnswerWritableRepository
  ) {}

  public async execute({
    params: { payload, publishEventsInstantly },
  }: CreateAnswerCommand) {
    const answer = Answer.create(payload)

    await this.answersWritableRepository.save(answer)

    if (publishEventsInstantly) this.eventBus.publish(answer.pull())

    return answer
  }
}
