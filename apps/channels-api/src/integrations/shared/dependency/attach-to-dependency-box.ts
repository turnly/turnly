/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'

import { GetOneIntegrationQueryHandler } from '../application/queries'
import { IntegrationsMapper } from '../infrastructure/persistence/mongo/entity-model-mappers/integrations.mapper'
import { IntegrationsReadableRepo } from '../infrastructure/persistence/mongo/repositories/integrations-readable.repo'
import { IntegrationsWritableRepo } from '../infrastructure/persistence/mongo/repositories/integrations-writable.repo'

Box.register({
  integrationsMapper: ioc.asClass(IntegrationsMapper).singleton(),
  integrationsReadableRepo: ioc.asClass(IntegrationsReadableRepo).singleton(),
  integrationsWritableRepo: ioc.asClass(IntegrationsWritableRepo).singleton(),
  getOneIntegrationQueryHandler: ioc
    .asClass(GetOneIntegrationQueryHandler)
    .singleton(),
})
