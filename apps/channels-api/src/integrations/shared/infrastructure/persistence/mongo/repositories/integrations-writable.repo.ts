/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IIntegrationsMapper } from 'integrations/shared/domain/contratcs/integrations-mapper.interface'
import { IIntegrationsWritableRepo } from 'integrations/shared/domain/contratcs/integrations-repo.interface'
import { Integration } from 'integrations/shared/domain/entities/integration.entity'

import {
  IIntegrationDocument,
  IntegrationModel,
} from '../models/integration.model'

export class IntegrationsWritableRepo
  extends MongoWritableRepo<Integration, IIntegrationDocument>
  implements IIntegrationsWritableRepo
{
  public constructor(
    integrationsMapper: IIntegrationsMapper<IIntegrationDocument>
  ) {
    super(IntegrationModel, integrationsMapper)
  }
}
