import { IEntityMapper } from '@turnly/shared'
import { Service } from 'Services/domain/entities/Service'

export type IServicesMapper<Model> = IEntityMapper<Service, Model>
