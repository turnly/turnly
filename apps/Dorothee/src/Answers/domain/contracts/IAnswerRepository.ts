import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Answer } from '../entities/Answer'

export type IAnswerReadableRepository = IReadableRepository<Answer>
export type IAnswerWritableRepository = IWritableRepository<Answer>
