import { IEntityMapper } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'

export type ICustomersMapper<Model> = IEntityMapper<Customer, Model>
