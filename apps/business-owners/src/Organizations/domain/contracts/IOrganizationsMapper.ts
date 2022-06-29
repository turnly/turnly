import { IEntityMapper } from '@turnly/shared'
import { Organization } from 'Organizations/domain/entities/Organization'

export type IOrganizationsMapper<Model> = IEntityMapper<Organization, Model>
