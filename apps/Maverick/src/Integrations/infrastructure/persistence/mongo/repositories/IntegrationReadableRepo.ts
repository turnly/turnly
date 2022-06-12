import { MongoReadableRepo } from '@turnly/shared'
import { IIntegrationMapper } from 'Integrations/domain/contracts/IIntegrationMapper'
import { IIntegrationReadableRepo } from 'Integrations/domain/contracts/IIntegrationRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationReadableRepo
  extends MongoReadableRepo<Integration, IntegrationDocument>
  implements IIntegrationReadableRepo
{
  public constructor(
    integrationsMapper: IIntegrationMapper<IntegrationDocument>
  ) {
    super(IntegrationModel, integrationsMapper)
  }
}
