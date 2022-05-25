import { EntityAttributes } from '@turnly/core'

import { Field } from '../entities/Field'

export type CreateFieldPayload = Omit<EntityAttributes<Field>, 'id'>
