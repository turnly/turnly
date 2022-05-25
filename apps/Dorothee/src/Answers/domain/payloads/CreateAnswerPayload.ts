import { EntityAttributes } from '@turnly/core'

import { Answer } from '../entities/Answer'

export type CreateAnswerPayload = Omit<EntityAttributes<Answer>, 'id'>
