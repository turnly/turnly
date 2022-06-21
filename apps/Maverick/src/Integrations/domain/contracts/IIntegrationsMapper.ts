import { IEntityMapper } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'

export type IIntegrationsMapper<Model> = IEntityMapper<Integration, Model>
