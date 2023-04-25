/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CallOptions, Metadata } from '@grpc/grpc-js'

import { ICallback } from '../../../../src/producers'
import {
  AnnounceMyArrivalRequest,
  AnnounceMyArrivalResponse,
  CreateTicketRequest,
  CreateTicketResponse,
  GetTicketRequest,
  GetTicketResponse,
  GetTicketsBeforeYoursRequest,
  GetTicketsBeforeYoursResponse,
  GetTicketsWaitingForServiceRequest,
  GetTicketsWaitingForServiceResponse,
  LeaveTicketRequest,
  LeaveTicketResponse,
} from '../../../../src/producers/queuing-system'

export class TestTicketsClient {
  protected readonly createMock = jest.fn()
  protected readonly getOneMock = jest.fn()
  protected readonly leaveMock = jest.fn()
  protected readonly announceMock = jest.fn()
  protected readonly getTicketBeforeYoursMock = jest.fn()
  protected readonly getTicketsWaitingForServiceMock = jest.fn()

  public create(
    _request: CreateTicketRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<CreateTicketResponse>
  ) {
    callback(null, this.createMock())
  }

  public getOne(
    _request: GetTicketRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetTicketResponse>
  ) {
    callback(null, this.getOneMock())
  }

  public leave(
    _request: LeaveTicketRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<LeaveTicketResponse>
  ) {
    callback(null, this.leaveMock())
  }

  public announce(
    _request: AnnounceMyArrivalRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<AnnounceMyArrivalResponse>
  ) {
    callback(null, this.announceMock())
  }

  public getTicketsBeforeYours(
    _request: GetTicketsBeforeYoursRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetTicketsBeforeYoursResponse>
  ) {
    callback(null, this.getTicketBeforeYoursMock())
  }

  public getTicketsWaitingForService(
    _request: GetTicketsWaitingForServiceRequest,
    _metadata: Metadata,
    _options: Partial<CallOptions>,
    callback: ICallback<GetTicketsWaitingForServiceResponse>
  ) {
    callback(null, this.getTicketsWaitingForServiceMock())
  }

  public attachCreateResponse(response: CreateTicketResponse) {
    this.createMock.mockReturnValue(response)

    return this
  }

  public attachGetOneResponse(response: GetTicketResponse) {
    this.getOneMock.mockReturnValue(response)

    return this
  }

  public attachLeaveResponse(response: LeaveTicketResponse) {
    this.leaveMock.mockReturnValue(response)

    return this
  }

  public attachAnnounceResponse(response: AnnounceMyArrivalResponse) {
    this.announceMock.mockReturnValue(response)

    return this
  }

  public attachBeforeYoursResponse(response: GetTicketsBeforeYoursResponse) {
    this.getTicketBeforeYoursMock.mockReturnValue(response)

    return this
  }

  public attachWaitingForServiceResponse(
    response: GetTicketsWaitingForServiceResponse
  ) {
    this.getTicketsWaitingForServiceMock.mockReturnValue(response)

    return this
  }

  public assertCreateHasBeenCalled() {
    expect(this.createMock).toHaveBeenCalled()
  }

  public assertGetOneHasBeenCalled() {
    expect(this.getOneMock).toHaveBeenCalled()
  }

  public assertLeaveHasBeenCalled() {
    expect(this.leaveMock).toHaveBeenCalled()
  }

  public assertAnnounceHasBeenCalled() {
    expect(this.announceMock).toHaveBeenCalled()
  }

  public assertBeforeYoursHasBeenCalled() {
    expect(this.getTicketBeforeYoursMock).toHaveBeenCalled()
  }

  public assertWaitingForServiceHasBeenCalled() {
    expect(this.getTicketsWaitingForServiceMock).toHaveBeenCalled()
  }
}
