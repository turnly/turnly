import { IEntityMapper } from '@turnly/core'
import { Answer } from 'Answers/domain/entities/Answer'

export type IAnswerMapper<Model> = IEntityMapper<Answer, Model>
