import { IEntityMapper } from '@turnly/core'
import { Integration } from 'Integrations/domain/entities/Integration'

import { IntegrationDocument } from '../../infrastructure/persistence/mongo/models/IntegrationModel'

export type IIntegrationMapper = IEntityMapper<Integration, IntegrationDocument>
