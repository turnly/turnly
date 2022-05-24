import { IEntityMapper } from '@turnly/core'
import { Integration } from 'Integrations/domain/entities/Integration'

export type IIntegrationMapper<Model> = IEntityMapper<Integration, Model>
