import { IEntityMapper } from '@turnly/core'
import { Integration } from 'packages/integrations/domain/entities/Integration'

import { IntegrationModel } from '../persistence/models/Integration'

export type IIntegrationMapper = IEntityMapper<Integration, IntegrationModel>
