import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Customer } from '../entities/Customer'

export type ICustomerReadableRepo = IReadableRepository<Customer>
export type ICustomerWritableRepo = IWritableRepository<Customer>
