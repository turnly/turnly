/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BadRequestException, NotImplementedError } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

import { TicketsController } from '../controllers/TicketsController'
import { TicketsMapper } from './TicketsMapper'

export class TicketsServer extends Producers.ServerImplementation<Producers.QueuingSystem.ITicketsServer> {
  public constructor(private readonly ticketsController: TicketsController) {
    super()
  }

  @Producers.CallHandler(Producers.QueuingSystem.CreateTicketResponse)
  public async create(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CreateTicketRequest,
      Producers.QueuingSystem.CreateTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CreateTicketResponse>
  ) {
    const payload = call.request.getTicket()

    if (!payload) throw new BadRequestException('Missing ticket payload.')

    const { data, meta } = await this.ticketsController.create({
      locationId: payload.getLocationId(),
      customerId: payload.getCustomerId(),
      serviceId: payload.getServiceId(),
      serviceName: payload.getServiceName(),
      organizationId: Client.getOrganizationId(call),
      extra: payload.getExtrasList().map(e => e.toObject()),
    })

    const response = new Producers.QueuingSystem.CreateTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketRequest,
      Producers.QueuingSystem.GetTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.getOne({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.GetTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.LeaveTicketResponse)
  public async leave(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.LeaveTicketRequest,
      Producers.QueuingSystem.LeaveTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.LeaveTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.leave({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.LeaveTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.AnnounceTicketResponse)
  public async announce(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.AnnounceTicketRequest,
      Producers.QueuingSystem.AnnounceTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.AnnounceTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.announce({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      customerId: call.request.getCustomerId(),
    })

    const response = new Producers.QueuingSystem.AnnounceTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketsBeforeYoursResponse)
  public async getTicketsBeforeYours(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsBeforeYoursRequest,
      Producers.QueuingSystem.GetTicketsBeforeYoursResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsBeforeYoursResponse>
  ) {
    const { data, meta } = await this.ticketsController.getTicketsBeforeYours({
      ticketId: call.request.getId(),
      customerId: call.request.getCustomerId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetTicketsBeforeYoursResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketsByLocationResponse)
  public async getTicketsByLocation(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsByLocationRequest,
      Producers.QueuingSystem.GetTicketsByLocationResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsByLocationResponse>
  ) {
    const { data, meta } = await this.ticketsController.getTicketsByLocation({
      searchQuery: call.request.getFindQuery(),
      locationId: call.request.getLocationId(),
      serviceIds: call.request.getServiceIdsList(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetTicketsByLocationResponse()

    if (data) response.setDataList(data.map(TicketsMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(
    Producers.QueuingSystem.GetTicketsWaitingForServiceResponse
  )
  public async getTicketsWaitingForService(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsWaitingForServiceRequest,
      Producers.QueuingSystem.GetTicketsWaitingForServiceResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsWaitingForServiceResponse>
  ) {
    const { data, meta } =
      await this.ticketsController.getTicketsWaitingForService({
        serviceIds: call.request.getServiceIdsList(),
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.GetTicketsWaitingForServiceResponse()

    if (data)
      response.setDataList(
        data.map(({ waitingFor, tickets }) =>
          new Producers.QueuingSystem.GetTicketsWaitingForServiceResponse.ServiceTickets()
            .setWaitingFor(waitingFor)
            .setTicketsList(tickets.map(TicketsMapper.toRPC))
        )
      )

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.ResolveTicketResponse)
  public async resolve(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ResolveTicketRequest,
      Producers.QueuingSystem.ResolveTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ResolveTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.resolve({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      status: call.request.getStatus() as TicketStatus,
    })

    const response = new Producers.QueuingSystem.ResolveTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      create: this.create.bind(this),
      getOne: this.getOne.bind(this),
      leave: this.leave.bind(this),
      announce: this.announce.bind(this),
      getTicketsBeforeYours: this.getTicketsBeforeYours.bind(this),
      getTicketsByLocation: this.getTicketsByLocation.bind(this),
      getTicketsWaitingForService: this.getTicketsWaitingForService.bind(this),
      call: () => {
        throw new NotImplementedError()
      },
      resolve: this.resolve.bind(this),
    }
  }
}
