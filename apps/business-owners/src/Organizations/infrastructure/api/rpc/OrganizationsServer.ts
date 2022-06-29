import { Producers } from '@turnly/rpc'

import { OrganizationsController } from '../controllers/OrganizationsController'
import { OrganizationsMapper } from './OrganizationsMapper'

export class OrganizationsServer extends Producers.ServerImplementation<Producers.BusinessOwners.IOrganizationsServer> {
  public constructor(
    private readonly organizationsController: OrganizationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.BusinessOwners.GetOrganizationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.BusinessOwners.GetOrganizationRequest,
      Producers.BusinessOwners.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessOwners.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.organizationsController.getOne({
      id: call.request.getId(),
    })

    const response = new Producers.BusinessOwners.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.BusinessOwners.GetOrganizationResponse)
  public async getBySubDomain(
    call: Producers.ServerUnaryCall<
      Producers.BusinessOwners.GetOrganizationBySubDomainRequest,
      Producers.BusinessOwners.GetOrganizationResponse
    >,
    callback: Producers.ICallback<Producers.BusinessOwners.GetOrganizationResponse>
  ) {
    const { data, meta } = await this.organizationsController.getBySubDomain({
      subdomain: call.request.getSubdomain(),
    })

    const response = new Producers.BusinessOwners.GetOrganizationResponse()
    const organization = OrganizationsMapper.toRPC(data)

    response.setData(organization)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
      getBySubDomain: this.getBySubDomain.bind(this),
    }
  }
}
