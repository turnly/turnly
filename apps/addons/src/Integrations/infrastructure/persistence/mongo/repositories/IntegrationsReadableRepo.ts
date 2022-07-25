/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IIntegrationsMapper } from 'Integrations/domain/contracts/IIntegrationsMapper'
import { IIntegrationsReadableRepo } from 'Integrations/domain/contracts/IIntegrationsRepo'
import { Integration } from 'Integrations/domain/entities/Integration'

import {
  IIntegrationDocument,
  IntegrationModel,
} from '../models/IntegrationModel'

export class IntegrationsReadableRepo
  extends MongoReadableRepo<Integration, IIntegrationDocument>
  implements IIntegrationsReadableRepo
{
  public constructor(
    integrationsMapper: IIntegrationsMapper<IIntegrationDocument>
  ) {
    super(IntegrationModel, integrationsMapper)
  }
}
