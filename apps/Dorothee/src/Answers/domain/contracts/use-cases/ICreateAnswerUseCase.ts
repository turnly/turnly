import { IUseCase } from '@turnly/shared'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

import { Answer } from '../../entities/Answer'

export type ICreateAnswerUseCase = IUseCase<CreateAnswerPayload, Answer>
