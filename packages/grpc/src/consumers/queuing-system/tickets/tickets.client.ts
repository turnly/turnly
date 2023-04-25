/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExtraMapper } from '../../../producers'
import {
  AnnounceMyArrivalRequest,
  CallTicketToDeskRequest,
  DiscardTicketRequest,
  GetTicketDetailsRequest,
  GetTicketRequest,
  GetTicketsBeforeYoursRequest,
  GetTicketsForServingFromLocationRequest,
  GetTicketsWaitingForServiceRequest,
  LeaveTicketRequest,
  ReturnToQueueRequest,
  ServeTicketRequest,
} from '../../../producers/queuing-system'
import {
  CreateTicketObject,
  CreateTicketRequest,
  TicketsClient,
} from '../../../producers/queuing-system'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IAnnounceMyArrivalRequest,
  IAnnounceMyArrivalResponse,
  ICallTicketToDeskRequest,
  ICallTicketToDeskResponse,
  ICreateTicketRequest,
  ICreateTicketResponse,
  IDiscardTicketRequest,
  IDiscardTicketResponse,
  IGetTicketDetailsRequest,
  IGetTicketDetailsResponse,
  IGetTicketRequest,
  IGetTicketResponse,
  IGetTicketsBeforeYoursRequest,
  IGetTicketsBeforeYoursResponse,
  IGetTicketsForServingFromLocationRequest,
  IGetTicketsForServingFromLocationResponse,
  IGetTicketsWaitingForServiceRequest,
  IGetTicketsWaitingForServiceResponse,
  ILeaveTicketRequest,
  ILeaveTicketResponse,
  IReturnToQueueRequest,
  IReturnToQueueResponse,
  IServeTicketRequest,
  IServeTicketResponse,
  ITicketsClient,
} from './tickets.type'

export class Tickets extends Client<TicketsClient> implements ITicketsClient {
  public constructor(config?: ClientConfig) {
    super(TicketsClient, {
      internalAddress: 'queuing-system.turnly.local',
      ...config,
    })
  }

  public async create({
    ticket,
  }: ICreateTicketRequest): Promise<ICreateTicketResponse> {
    const req = new CreateTicketRequest()

    if (ticket) {
      req.setTicket(
        new CreateTicketObject()
          .setServiceId(ticket.serviceId)
          .setCustomerId(ticket.customerId)
          .setLocationId(ticket.locationId)
          .setServiceName(ticket.serviceName)
          .setSource(ticket.source)
          .setExtrasList(ExtraMapper.toRPC(ticket.extrasList))
      )
    }

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getOne(request: IGetTicketRequest): Promise<IGetTicketResponse> {
    const req = new GetTicketRequest()
      .setId(request.id)
      .setCustomerId(request.customerId)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getDetails(
    request: IGetTicketDetailsRequest
  ): Promise<IGetTicketDetailsResponse> {
    const req = new GetTicketDetailsRequest().setId(request.id)

    return (
      await promisify(this.client.getDetails.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async leave(
    request: ILeaveTicketRequest
  ): Promise<ILeaveTicketResponse> {
    const req = new LeaveTicketRequest()
      .setId(request.id)
      .setCustomerId(request.customerId)

    return (
      await promisify(this.client.leave.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async announce(
    request: IAnnounceMyArrivalRequest
  ): Promise<IAnnounceMyArrivalResponse> {
    const req = new AnnounceMyArrivalRequest()
      .setId(request.id)
      .setCustomerId(request.customerId)

    return (
      await promisify(this.client.announce.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async call(
    request: ICallTicketToDeskRequest
  ): Promise<ICallTicketToDeskResponse> {
    const req = new CallTicketToDeskRequest()
      .setId(request.id)
      .setAgentId(request.agentId)

    return (
      await promisify(this.client.call.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async serve(
    request: IServeTicketRequest
  ): Promise<IServeTicketResponse> {
    const req = new ServeTicketRequest().setId(request.id)

    return (
      await promisify(this.client.serve.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async discard(
    request: IDiscardTicketRequest
  ): Promise<IDiscardTicketResponse> {
    const req = new DiscardTicketRequest().setId(request.id)

    return (
      await promisify(this.client.discard.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async returnToQueue(
    request: IReturnToQueueRequest
  ): Promise<IReturnToQueueResponse> {
    const req = new ReturnToQueueRequest().setId(request.id)

    return (
      await promisify(this.client.returnToQueue.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getTicketsBeforeYours(
    request: IGetTicketsBeforeYoursRequest
  ): Promise<IGetTicketsBeforeYoursResponse> {
    const req = new GetTicketsBeforeYoursRequest()
      .setId(request.id)
      .setCustomerId(request.customerId)

    return (
      await promisify(this.client.getTicketsBeforeYours.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getTicketsWaitingForService(
    request: IGetTicketsWaitingForServiceRequest
  ): Promise<IGetTicketsWaitingForServiceResponse> {
    const req = new GetTicketsWaitingForServiceRequest()
      .setServiceIdsList(request.serviceIdsList)
      .setCustomerId(request.customerId)

    return (
      await promisify(
        this.client.getTicketsWaitingForService.bind(this.client)
      )(req, this.getMeta(), {})
    ).toObject()
  }

  public async getTicketsForServingFromLocation(
    request: IGetTicketsForServingFromLocationRequest
  ): Promise<IGetTicketsForServingFromLocationResponse> {
    const req = new GetTicketsForServingFromLocationRequest()
      .setLocationId(request.locationId)
      .setServiceIdsList(request.serviceIdsList)
      .setFindQuery(request.findQuery)
      .setStatus(request.status)

    return (
      await promisify(
        this.client.getTicketsForServingFromLocation.bind(this.client)
      )(req, this.getMeta(), {})
    ).toObject()
  }
}
