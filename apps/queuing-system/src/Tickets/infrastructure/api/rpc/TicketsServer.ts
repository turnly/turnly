/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BadRequestException } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { Client } from '@turnly/rpc/dist/consumers'
import { TicketsByLocationFilters } from 'Tickets/application/queries/TicketsForServingFromLocationQuery'
import { TicketSource } from 'Tickets/domain/enums/TicketSource'

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

  @Producers.CallHandler(Producers.QueuingSystem.GetTicketDetailsResponse)
  public async getDetails(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketDetailsRequest,
      Producers.QueuingSystem.GetTicketDetailsResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketDetailsResponse>
  ) {
    const { data, meta } = await this.ticketsController.getDetails({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.GetTicketDetailsResponse()
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

  @Producers.CallHandler(
    Producers.QueuingSystem.GetTicketsForServingFromLocationResponse
  )
  public async getTicketsForServingFromLocation(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.GetTicketsForServingFromLocationRequest,
      Producers.QueuingSystem.GetTicketsForServingFromLocationResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.GetTicketsForServingFromLocationResponse>
  ) {
    const { data, meta } =
      await this.ticketsController.getTicketsForServingFromLocation({
        searchQuery: call.request.getFindQuery(),
        locationId: call.request.getLocationId(),
        serviceIds: call.request.getServiceIdsList(),
        status: call.request.getStatus() as TicketsByLocationFilters,
        organizationId: Client.getOrganizationId(call),
      })

    const response =
      new Producers.QueuingSystem.GetTicketsForServingFromLocationResponse()

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

  @Producers.CallHandler(Producers.QueuingSystem.ServeTicketResponse)
  public async serve(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ServeTicketRequest,
      Producers.QueuingSystem.ServeTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ServeTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.serve({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ServeTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.DiscardTicketResponse)
  public async discard(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.DiscardTicketRequest,
      Producers.QueuingSystem.DiscardTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.DiscardTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.discard({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.DiscardTicketResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.ReturnToQueueResponse)
  public async returnToQueue(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.ReturnToQueueRequest,
      Producers.QueuingSystem.ReturnToQueueResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.ReturnToQueueResponse>
  ) {
    const { data, meta } = await this.ticketsController.returnToQueue({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
    })

    const response = new Producers.QueuingSystem.ReturnToQueueResponse()
    const ticket = TicketsMapper.toRPC(data)

    response.setData(ticket)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  @Producers.CallHandler(Producers.QueuingSystem.CallTicketResponse)
  public async call(
    call: Producers.ServerUnaryCall<
      Producers.QueuingSystem.CallTicketRequest,
      Producers.QueuingSystem.CallTicketResponse
    >,
    callback: Producers.ICallback<Producers.QueuingSystem.CallTicketResponse>
  ) {
    const { data, meta } = await this.ticketsController.call({
      id: call.request.getId(),
      organizationId: Client.getOrganizationId(call),
      agentId: call.request.getAgentId(),
    })

    const response = new Producers.QueuingSystem.CallTicketResponse()
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
      getTicketsForServingFromLocation:
        this.getTicketsForServingFromLocation.bind(this),
      getTicketsWaitingForService: this.getTicketsWaitingForService.bind(this),
      serve: this.serve.bind(this),
      call: this.call.bind(this),
      getDetails: this.getDetails.bind(this),
      discard: this.discard.bind(this),
      returnToQueue: this.returnToQueue.bind(this),
    }
  }
}
