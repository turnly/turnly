import { EntityAttributes } from '@turnly/shared'

import { Location } from '../entities/Location'

export type CreateLocationPayload = Omit<EntityAttributes<Location>, 'id'>
