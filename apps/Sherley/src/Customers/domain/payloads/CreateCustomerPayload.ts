import { EntityAttributes } from '@turnly/shared'

import { Customer } from '../entities/Customer'

export type CreateCustomerPayload = Omit<EntityAttributes<Customer>, 'id'>
