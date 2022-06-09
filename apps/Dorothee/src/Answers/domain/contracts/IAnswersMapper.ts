import { IEntityMapper } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'

export type IAnswersMapper<Model> = IEntityMapper<Answer, Model>
