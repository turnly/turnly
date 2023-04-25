/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers, Producers } from '@turnly/grpc'
import { BadRequestException } from '@turnly/observability'
import { CreateTicketController } from 'tickets/create-ticket'
import { TicketSource } from 'tickets/shared/domain/enums/TicketSource'
import { TicketsMapper } from 'tickets/shared/infrastructure/grpc/tickets-mapper.grpc'

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
      organizationId: Consumers.Client.getOrganizationId(call),
      extra: payload.getExtrasList().map(e => e.toObject()),
    })

    const response = new Producers.QueuingSystem.CreateTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
