/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BadRequestException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { CreateTicketController } from 'Tickets/CreateTicket'
import { TicketSource } from 'Tickets/Shared/domain/enums/TicketSource'
import { TicketsMapper } from 'Tickets/Shared/infrastructure/grpc/TicketsMapper'

export class CreateTicketServer {
  public constructor(
    private readonly createTicketController: CreateTicketController
  ) {}

  @Producers.CallHandler(Producers.QueuingSystem.CreateTicketResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CreateTicketRequest,
      Producers.QueuingSystem.CreateTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CreateTicketResponse>
  ) {
    const payload = call.request.getTicket()

    if (!payload) throw new BadRequestException('Missing ticket payload.')

    const { data, meta } = await this.createTicketController.execute({
      locationId: payload.getLocationId(),
      customerId: payload.getCustomerId(),
      serviceId: payload.getServiceId(),
      serviceName: payload.getServiceName(),
      source: payload.getSource() as TicketSource,
      organizationId: Client.getOrganizationId(call),
      extra: payload.getExtrasList().map(e => e.toObject()),
    })

    const response = new Producers.QueuingSystem.CreateTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
