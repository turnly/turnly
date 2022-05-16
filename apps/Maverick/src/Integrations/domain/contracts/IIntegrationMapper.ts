import { IEntityMapper } from '@turnly/core'
import { Integration } from 'integrations/domain/entities/Integration'

import { IntegrationModel } from '../../infrastructure/persistence/models/Integration'

export type IIntegrationMapper = IEntityMapper<Integration, IntegrationModel>
