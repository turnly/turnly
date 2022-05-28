import { EntityAttributes } from '@turnly/shared'

import { Answer } from '../entities/Answer'

export type CreateAnswerPayload = Omit<EntityAttributes<Answer>, 'id'>
