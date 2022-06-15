import { BadRequestException } from '@turnly/common'
import { Producers } from '@turnly/rpc'

import { CustomersController } from '../controllers/CustomersController'
import { CustomerMapper } from './CustomersMapper'

export class CustomersServer extends Producers.ServerImplementation<Producers.Sherley.ICustomersServer> {
  public constructor(
    private readonly customersController: CustomersController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.Sherley.CreateCustomerResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.Sherley.CreateCustomerRequest,
      Producers.Sherley.CreateCustomerResponse
    >,
    callback: Producers.ICallback<Producers.Sherley.CreateCustomerResponse>
  ) {
    const payload = call.request.getCustomer()

    if (!payload) throw new BadRequestException('Missing customer payload.')

    const { data, meta } = await this.customersController.create({
      name: payload.getName(),
      lastname: payload.getLastname(),
      email: payload.getEmail(),
      phone: payload.getPhone(),
      country: payload.getCountry(),
      hasWhatsapp: payload.getHasWhatsapp(),
      showNameSignage: payload.getShowNameSignage(),
      companyId: payload.getCompanyId(),
      extra: payload.getExtrasList().map(e => e.toObject()),
    })

    const response = new Producers.Sherley.CreateCustomerResponse()
    const customer = CustomerMapper.toRPC(data)

    response.setData(customer)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.Sherley.GetCustomerResponse)
  public async get(
    call: Producers.ServerUnaryCall<
      Producers.Sherley.GetCustomerRequest,
      Producers.Sherley.GetCustomerResponse
    >,
    callback: Producers.ICallback<Producers.Sherley.GetCustomerResponse>
  ) {
    const { data, meta } = await this.customersController.get({
      id: call.request.getId(),
      companyId: call.request.getCompanyId(),
    })

    const response = new Producers.Sherley.GetCustomerResponse()
    const customer = CustomerMapper.toRPC(data)

    response.setData(customer)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      create: this.create.bind(this),
      get: this.get.bind(this),
    }
  }
}
