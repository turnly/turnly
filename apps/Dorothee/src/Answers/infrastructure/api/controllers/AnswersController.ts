import { Controller, TimeoutHandler } from '@turnly/core'
import { CreateAnswerUseCase } from 'Answers/application/use-cases/CreateAnswerUseCase'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

import { AnswerDTO } from '../dtos/AnswerDTO'
// import { validator } from '../validators/AnswersValidator'

export class AnswersController extends Controller {
  public constructor(
    private readonly createAnswerUseCase: CreateAnswerUseCase
  ) {
    super()
  }

  @TimeoutHandler()
  // @InputValidator(validator.create)
  public async create(params: CreateAnswerPayload) {
    const answer = await this.createAnswerUseCase.present(params)

    return this.respond.created(AnswerDTO.create(answer.toObject()))
  }
}
