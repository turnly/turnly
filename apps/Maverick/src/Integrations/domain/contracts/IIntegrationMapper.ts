import { IEntityMapper } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'

export type IIntegrationMapper<Model> = IEntityMapper<Integration, Model>
