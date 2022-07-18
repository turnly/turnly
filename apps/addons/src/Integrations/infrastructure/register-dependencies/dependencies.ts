/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Box, ioc } from '@turnly/shared'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { IntegrationsMapper } from 'Integrations/infrastructure/persistence/mongo/entity-model-mappers/IntegrationsMapper'
import { IntegrationsReadableRepo } from 'Integrations/infrastructure/persistence/mongo/repositories/IntegrationsReadableRepo'

import { IntegrationsController } from '../api/controllers/IntegrationsController'
import { IntegrationsWritableRepo } from '../persistence/mongo/repositories/IntegrationsWritableRepo'

Box.register({
  integrationsMapper: ioc.asClass(IntegrationsMapper).singleton(),
  integrationsReadableRepo: ioc.asClass(IntegrationsReadableRepo).singleton(),
  integrationsWritableRepo: ioc.asClass(IntegrationsWritableRepo).singleton(),
  integrationsController: ioc.asClass(IntegrationsController).singleton(),
})

/**
 * Query handlers
 */
Box.register({
  integrationByIdQueryHandler: ioc
    .asClass(IntegrationByIdQueryHandler)
    .singleton(),
})
