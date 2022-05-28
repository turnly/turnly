import { EntityAttributes } from '@turnly/shared'

import { Field } from '../entities/Field'

export type CreateFieldPayload = Omit<EntityAttributes<Field>, 'id'>
