import { EntityAttributes } from '@turnly/shared'

import { Service } from '../entities/Service'

export type CreateServicePayload = Omit<EntityAttributes<Service>, 'id'>
