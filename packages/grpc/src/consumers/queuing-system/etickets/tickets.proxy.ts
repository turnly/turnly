/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CircuitBreaker } from '@turnly/observability'

import { Proxy } from '../../common/base.proxy'
import type { ClientConfig } from '../../common/client-options.type'
import { Tickets as Service } from './tickets.client'
import type {
  IAnnounceTicketRequest,
  IAnnounceTicketResponse,
  ICallTicketRequest,
  ICallTicketResponse,
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
} from './tickets.type'

export class Tickets extends Proxy<Service> {
  /**
   * Circuit breakers
   */
  private createBreaker: CircuitBreaker<
    ICreateTicketRequest[],
    ICreateTicketResponse
  >
  private getBreaker: CircuitBreaker<IGetTicketRequest[], IGetTicketResponse>
  private leaveBreaker: CircuitBreaker<
    ILeaveTicketRequest[],
    ILeaveTicketResponse
  >
  private announceBreaker: CircuitBreaker<
    IAnnounceTicketRequest[],
    IAnnounceTicketResponse
  >
  private serveBreaker: CircuitBreaker<
    IServeTicketRequest[],
    IServeTicketResponse
  >
  private discardBreaker: CircuitBreaker<
    IDiscardTicketRequest[],
    IDiscardTicketResponse
  >
  private returnToQueueBreaker: CircuitBreaker<
    IReturnToQueueRequest[],
    IReturnToQueueResponse
  >
  private callBreaker: CircuitBreaker<ICallTicketRequest[], ICallTicketResponse>
  private getTicketsBeforeYoursBreaker: CircuitBreaker<
    IGetTicketsBeforeYoursRequest[],
    IGetTicketsBeforeYoursResponse
  >
  private getTicketsWaitingForServiceBreaker: CircuitBreaker<
    IGetTicketsWaitingForServiceRequest[],
    IGetTicketsWaitingForServiceResponse
  >
  private getTicketsForServingFromLocationBreaker: CircuitBreaker<
    IGetTicketsForServingFromLocationRequest[],
    IGetTicketsForServingFromLocationResponse
  >
  private getTicketDetailsBreaker: CircuitBreaker<
    IGetTicketDetailsRequest[],
    IGetTicketDetailsResponse
  >

  public constructor(config?: ClientConfig) {
    super(Service, config)

    this.setupBreakers()
  }

  protected setupBreakers() {
    /**
     * Create Ticket Breaker
     */
    this.createBreaker = new CircuitBreaker(
      this.service.create.bind(this.service),
      { name: 'QueuingSystem.Tickets.create' }
    )

    /**
     * Get Ticket Breaker
     */
    this.getBreaker = new CircuitBreaker(
      this.service.getOne.bind(this.service),
      { name: 'QueuingSystem.Tickets.getOne' }
    )

    /**
     * Get Ticket Details Breaker
     */
    this.getTicketDetailsBreaker = new CircuitBreaker(
      this.service.getDetails.bind(this.service),
      { name: 'QueuingSystem.Tickets.getDetails' }
    )

    /**
     * Leave Ticket Breaker
     */
    this.leaveBreaker = new CircuitBreaker(
      this.service.leave.bind(this.service),
      { name: 'QueuingSystem.Tickets.leave' }
    )

    /**
     * Announce Ticket Breaker
     */
    this.announceBreaker = new CircuitBreaker(
      this.service.announce.bind(this.service),
      { name: 'QueuingSystem.Tickets.announce' }
    )

    /**
     * Call Ticket Breaker
     */
    this.callBreaker = new CircuitBreaker(
      this.service.call.bind(this.service),
      { name: 'QueuingSystem.Tickets.call' }
    )

    /**
     * Serve Ticket Breaker
     */
    this.serveBreaker = new CircuitBreaker(
      this.service.serve.bind(this.service),
      { name: 'QueuingSystem.Tickets.serve' }
    )

    /**
     * Discard Ticket Breaker
     */
    this.discardBreaker = new CircuitBreaker(
      this.service.discard.bind(this.service),
      { name: 'QueuingSystem.Tickets.discard' }
    )

    /**
     * Return to Queue Ticket Breaker
     */
    this.returnToQueueBreaker = new CircuitBreaker(
      this.service.returnToQueue.bind(this.service),
      { name: 'QueuingSystem.Tickets.returnToQueue' }
    )

    /**
     * Get Ticket Before Yours Breaker
     */
    this.getTicketsBeforeYoursBreaker = new CircuitBreaker(
      this.service.getTicketsBeforeYours.bind(this.service),
      { name: 'QueuingSystem.Tickets.getTicketsBeforeYours' }
    )

    /**
     * Get Ticket Waiting for Service Breaker
     */
    this.getTicketsWaitingForServiceBreaker = new CircuitBreaker(
      this.service.getTicketsWaitingForService.bind(this.service),
      { name: 'QueuingSystem.Tickets.getTicketsWaitingForService' }
    )

    /**
     * Get Tickets By Location Breaker
     */
    this.getTicketsForServingFromLocationBreaker = new CircuitBreaker(
      this.service.getTicketsForServingFromLocation.bind(this.service),
      { name: 'QueuingSystem.Tickets.getTicketsForServingFromLocation' }
    )
  }

  public async create(request: ICreateTicketRequest) {
    return this.createBreaker.execute(request)
  }

  public async getOne(request: IGetTicketRequest) {
    return this.getBreaker.execute(request)
  }

  public async getDetails(request: IGetTicketDetailsRequest) {
    return this.getTicketDetailsBreaker.execute(request)
  }

  public async leave(request: ILeaveTicketRequest) {
    return this.leaveBreaker.execute(request)
  }

  public async announce(request: IAnnounceTicketRequest) {
    return this.announceBreaker.execute(request)
  }

  public async call(request: ICallTicketRequest) {
    return this.callBreaker.execute(request)
  }

  public async serve(request: IServeTicketRequest) {
    return this.serveBreaker.execute(request)
  }

  public async discard(request: IDiscardTicketRequest) {
    return this.discardBreaker.execute(request)
  }

  public async returnToQueue(request: IReturnToQueueRequest) {
    return this.returnToQueueBreaker.execute(request)
  }

  public async getTicketsBeforeYours(request: IGetTicketsBeforeYoursRequest) {
    return this.getTicketsBeforeYoursBreaker.execute(request)
  }

  public async getTicketsWaitingForService(
    request: IGetTicketsWaitingForServiceRequest
  ) {
    return this.getTicketsWaitingForServiceBreaker.execute(request)
  }

  public async getTicketsForServingFromLocation(
    request: IGetTicketsForServingFromLocationRequest
  ) {
    return this.getTicketsForServingFromLocationBreaker.execute(request)
  }
}
