import { Producers } from '@turnly/rpc'

import { IntegrationsController } from '../controllers/IntegrationsController'
import { IntegrationsMapper } from './IntegrationsMapper'

export class IntegrationsServer extends Producers.ServerImplementation<Producers.Maverick.IIntegrationsServer> {
  public constructor(
    private readonly integrationsController: IntegrationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.Maverick.GetIntegrationResponse)
  public async get(
    call: Producers.ServerUnaryCall<
      Producers.Maverick.GetIntegrationRequest,
      Producers.Maverick.GetIntegrationResponse
    >,
    callback: Producers.ICallback<Producers.Maverick.GetIntegrationResponse>
  ) {
    const { data, meta } = await this.integrationsController.get(
      call.request.getId()
    )

    const response = new Producers.Maverick.GetIntegrationResponse()
    const integration = IntegrationsMapper.toRPC(data)

    response.setData(integration)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      get: this.get.bind(this),
    }
  }
}
