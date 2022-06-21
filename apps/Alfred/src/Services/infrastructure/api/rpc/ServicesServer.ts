import { Producers } from '@turnly/rpc'

import { ServicesController } from '../controllers/ServicesController'
import { ServicesMapper } from './ServicesMapper'

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
    const service = ServicesMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.Alfred.FindByLocationResponse)
  public async findByLocation(
    call: Producers.ServerUnaryCall<
      Producers.Alfred.FindByLocationRequest,
      Producers.Alfred.FindByLocationResponse
    >,
    callback: Producers.ICallback<Producers.Alfred.FindByLocationResponse>
  ) {
    const { data, meta } = await this.servicesController.getServicesByLocation({
      locationId: call.request.getLocationId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Alfred.FindByLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      get: this.get.bind(this),
      findByLocation: this.findByLocation.bind(this),
    }
  }
}
