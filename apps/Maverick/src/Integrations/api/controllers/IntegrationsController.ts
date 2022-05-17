import { Controller, InputValidator, TimeoutHandler } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/shared'
import { IIntegrationQueryFactory } from 'Integrations/domain/contracts/IIntegrationQueryFactory'
import { GetIntegrationPayload } from 'Integrations/domain/payloads/GetIntegrationPayload'

import { IntegrationDTO } from '../dtos/IntegrationDTO'
import { validator } from '../validators/IntegrationsValidator'

export class IntegrationsController extends Controller {
  public constructor(
    private readonly _integrationQueryFactory: IIntegrationQueryFactory
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetIntegrationPayload) {
    const integration = await this._integrationQueryFactory
      .getById()
      .ask(params)

    if (!integration) throw new ResourceNotFoundException()

    return this.respond.ok(IntegrationDTO.create(integration))
  }
}
