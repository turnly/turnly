import { NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'

import { LocationsController } from '../controllers/LocationsController'
import { LocationsMapper } from './LocationsMapper'

export class LocationsServer extends Producers.ServerImplementation<Producers.Alfred.ILocationsServer> {
  public constructor(
    private readonly locationsController: LocationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.Alfred.GetLocationResponse)
  public async get(
    call: Producers.ServerUnaryCall<
      Producers.Alfred.GetLocationRequest,
      Producers.Alfred.GetLocationResponse
    >,
    callback: Producers.ICallback<Producers.Alfred.GetLocationResponse>
  ) {
    const { data, meta } = await this.locationsController.get({
      id: call.request.getId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Alfred.GetLocationResponse()
    const location = LocationsMapper.toRPC(data)

    response.setData(location)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      get: this.get.bind(this),
      search: () => {
        throw new NotImplementedError()
      },
    }
  }
}
