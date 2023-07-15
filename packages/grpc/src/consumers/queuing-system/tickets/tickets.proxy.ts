/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Tickets as Service } from './tickets.client'
import type {
  IAnnounceMyArrivalRequest,
  ICallTicketToDeskRequest,
  ICreateTicketRequest,
  IDiscardTicketRequest,
  IGetTicketDetailsRequest,
  IGetTicketRequest,
  IGetTicketsBeforeYoursRequest,
  IGetTicketsForServingFromLocationRequest,
  IGetTicketsWaitingForServiceRequest,
  ILeaveTicketRequest,
  IListTicketsForSignageDisplaysRequest,
  IReturnToQueueRequest,
  IServeTicketRequest,
} from './tickets.type'

export class Tickets extends Proxy<Service> {
  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * TODO: Remove this implementation once the service is ready
     */
  }

  public async create(request: ICreateTicketRequest) {
    return this.service.create(request)
  }

  public async getOne(request: IGetTicketRequest) {
    return this.service.getOne(request)
  }

  public async getDetails(request: IGetTicketDetailsRequest) {
    return this.service.getDetails(request)
  }

  public async leave(request: ILeaveTicketRequest) {
    return this.service.leave(request)
  }

  public async announce(request: IAnnounceMyArrivalRequest) {
    return this.service.announce(request)
  }

  public async call(request: ICallTicketToDeskRequest) {
    return this.service.call(request)
  }

  public async serve(request: IServeTicketRequest) {
    return this.service.serve(request)
  }

  public async discard(request: IDiscardTicketRequest) {
    return this.service.discard(request)
  }

  public async returnToQueue(request: IReturnToQueueRequest) {
    return this.service.returnToQueue(request)
  }

  public async getTicketsBeforeYours(request: IGetTicketsBeforeYoursRequest) {
    return this.service.getTicketsBeforeYours(request)
  }

  public async getTicketsWaitingForService(
    request: IGetTicketsWaitingForServiceRequest
  ) {
    return this.service.getTicketsWaitingForService(request)
  }

  public async getTicketsForServingFromLocation(
    request: IGetTicketsForServingFromLocationRequest
  ) {
    return this.service.getTicketsForServingFromLocation(request)
  }

  public async listTicketsForSignageDisplays(
    request: IListTicketsForSignageDisplaysRequest
  ) {
    return this.service.listTicketsForSignageDisplays(request)
  }
}
