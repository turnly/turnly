import { Producers } from '@turnly/rpc'

import { ServicesController } from '../controllers/ServicesController'
import { ServicesMapper } from './ServicesMapper'

export class ServicesServer extends Producers.ServerImplementation<Producers.AssistanceCenters.IServicesServer> {
  public constructor(private readonly servicesController: ServicesController) {
    super()
  }

  @Producers.CallHandler(Producers.AssistanceCenters.GetServiceResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.AssistanceCenters.GetServiceRequest,
      Producers.AssistanceCenters.GetServiceResponse
    >,
    callback: Producers.ICallback<Producers.AssistanceCenters.GetServiceResponse>
  ) {
    const { data, meta } = await this.servicesController.getOne({
      id: call.request.getId(),
      organizationId: call.request.getOrganizationId(),
    })

    const response = new Producers.AssistanceCenters.GetServiceResponse()
    const service = ServicesMapper.toRPC(data)

    response.setData(service)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.AssistanceCenters.FindByLocationResponse)
  public async findByLocation(
    call: Producers.ServerUnaryCall<
      Producers.AssistanceCenters.FindByLocationRequest,
      Producers.AssistanceCenters.FindByLocationResponse
    >,
    callback: Producers.ICallback<Producers.AssistanceCenters.FindByLocationResponse>
  ) {
    const { data, meta } = await this.servicesController.getServicesByLocation({
      locationId: call.request.getLocationId(),
      organizationId: call.request.getOrganizationId(),
    })

    const response = new Producers.AssistanceCenters.FindByLocationResponse()

    if (data) response.setDataList(data.map(ServicesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      findByLocation: this.findByLocation.bind(this),
    }
  }
}
