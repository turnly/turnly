import { Guid, Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { IntegrationByIdQuery } from 'Integrations/application/queries/IntegrationByIdQuery'
import { Integration } from 'Integrations/domain/entities/Integration'

import { validator } from '../validators/IntegrationsValidator'

export class IntegrationsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(id: Guid) {
    const query = new IntegrationByIdQuery(id)

    const integration = await this.queryBus.ask<
      IntegrationByIdQuery,
      Nullable<Integration>
    >(query)

    if (!integration) throw new ResourceNotFoundException()

    return this.respond.ok(integration.toObject())
  }
}
