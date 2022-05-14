import { Producers } from '@turnly/rpc'
import { IntegrationsController } from 'packages/integrations/api/controllers'

import { IntegrationMapper } from '../entity-rpc-mappers/IntegrationMapper'

export class IntegrationsServer extends Producers.ServerImplementation<Producers.IIntegrationsServer> {
  public constructor(
    private readonly _integrationsController: IntegrationsController
  ) {
    super()
  }

  @Producers.RequestHandler(Producers.GetIntegrationResponse)
  public async getIntegration(
    call: Producers.ServerUnaryCall<
      Producers.GetIntegrationRequest,
      Producers.GetIntegrationResponse
    >,
    callback: Producers.ICallback<Producers.GetIntegrationResponse>
  ) {
    const { data, meta } = await this._integrationsController.get({
      id: call.request.getId(),
    })

    const response = new Producers.GetIntegrationResponse()
    const integration = IntegrationMapper.toRPC(data)

    response.setData(integration)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getIntegration: this.getIntegration.bind(this),
    }
  }
}
