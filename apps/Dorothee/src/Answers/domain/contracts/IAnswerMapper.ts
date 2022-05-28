import { IEntityMapper } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export type IAnswerMapper<Model> = IEntityMapper<Answer, Model>
