import { Producers } from '@turnly/rpc'

import { ServicesController } from '../controllers/ServicesController'
import { ServiceMapper } from './ServicesMapper'

export class ServicesServer extends Producers.ServerImplementation<Producers.Alfred.IServicesServer> {
  public constructor(private readonly servicesController: ServicesController) {
    super()
  }

  @Producers.CallHandler(Producers.Alfred.GetServiceResponse)
  public async get(
    call: Producers.ServerUnaryCall<
      Producers.Alfred.GetServiceRequest,
      Producers.Alfred.GetServiceResponse
    >,
    callback: Producers.ICallback<Producers.Alfred.GetServiceResponse>
  ) {
    const { data, meta } = await this.servicesController.get({
      id: call.request.getId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Alfred.GetServiceResponse()
    const service = ServiceMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.Alfred.GetByLocationResponse)
  public async getByLocation(
    call: Producers.ServerUnaryCall<
      Producers.Alfred.GetByLocationRequest,
      Producers.Alfred.GetByLocationResponse
    >,
    callback: Producers.ICallback<Producers.Alfred.GetByLocationResponse>
  ) {
    const { data, meta } = await this.servicesController.getByLocationId({
      locationId: call.request.getLocationId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Alfred.GetByLocationResponse()
    const service = ServiceMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      get: this.get.bind(this),
      getByLocation: this.getByLocation.bind(this),
    }
  }
}
