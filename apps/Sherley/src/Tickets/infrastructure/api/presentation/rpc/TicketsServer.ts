import { BadRequestException, NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'

import { TicketsController } from '../../controllers/TicketsController'
import { TicketMapper } from './TicketsMapper'

export class TicketsServer extends Producers.ServerImplementation<Producers.Sherley.ITicketsServer> {
  public constructor(private readonly ticketsController: TicketsController) {
    super()
  }

  @Producers.CallHandler(Producers.Sherley.CreateTicketResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.Sherley.CreateTicketRequest,
      Producers.Sherley.CreateTicketResponse
    >,
    callback: Producers.ICallback<Producers.Sherley.CreateTicketResponse>
  ) {
    const payload = call.request.getTicket()

    if (!payload) throw new BadRequestException('Missing ticket payload.')

    const { data, meta } = await this.ticketsController.create({
      locationId: payload.getLocationId(),
      customerId: payload.getCustomerId(),
      serviceId: payload.getServiceId(),
      companyId: payload.getCompanyId(),
      extra: payload.getExtrasList().map(e => e.toObject()),
    })

    const response = new Producers.Sherley.CreateTicketResponse()
    const ticket = TicketMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      create: this.create.bind(this),
      get: () => {
        throw new NotImplementedError()
      },
      leave: () => {
        throw new NotImplementedError()
      },
      announce: () => {
        throw new NotImplementedError()
      },
      getTicketsBeforeYours: () => {
        throw new NotImplementedError()
      },
      getTicketsWaitingForService: () => {
        throw new NotImplementedError()
      },
    }
  }
}
