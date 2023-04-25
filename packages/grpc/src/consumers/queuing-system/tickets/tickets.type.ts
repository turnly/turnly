/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  AnnounceMyArrivalRequest,
  AnnounceMyArrivalResponse,
  CallTicketToDeskRequest,
  CallTicketToDeskResponse,
  CreateTicketRequest,
  CreateTicketResponse,
  DiscardTicketRequest,
  DiscardTicketResponse,
  GetTicketDetailsRequest,
  GetTicketDetailsResponse,
  GetTicketRequest,
  GetTicketResponse,
  GetTicketsBeforeYoursRequest,
  GetTicketsBeforeYoursResponse,
  GetTicketsForServingFromLocationRequest,
  GetTicketsForServingFromLocationResponse,
  GetTicketsWaitingForServiceRequest,
  GetTicketsWaitingForServiceResponse,
  LeaveTicketRequest,
  LeaveTicketResponse,
  ReturnToQueueRequest,
  ReturnToQueueResponse,
  ServeTicketRequest,
  ServeTicketResponse,
} from '../../../producers/queuing-system'

export type ICreateTicketRequest = CreateTicketRequest.AsObject
export type ICreateTicketResponse = CreateTicketResponse.AsObject

export type IGetTicketRequest = GetTicketRequest.AsObject
export type IGetTicketResponse = GetTicketResponse.AsObject

export type IGetTicketDetailsRequest = GetTicketDetailsRequest.AsObject
export type IGetTicketDetailsResponse = GetTicketDetailsResponse.AsObject

export type ICallTicketToDeskRequest = CallTicketToDeskRequest.AsObject
export type ICallTicketToDeskResponse = CallTicketToDeskResponse.AsObject

export type IGetTicketsBeforeYoursRequest =
  GetTicketsBeforeYoursRequest.AsObject
export type IGetTicketsBeforeYoursResponse =
  GetTicketsBeforeYoursResponse.AsObject

export type IGetTicketsWaitingForServiceRequest =
  GetTicketsWaitingForServiceRequest.AsObject
export type IGetTicketsWaitingForServiceResponse =
  GetTicketsWaitingForServiceResponse.AsObject

export type ILeaveTicketRequest = LeaveTicketRequest.AsObject
export type ILeaveTicketResponse = LeaveTicketResponse.AsObject

export type IAnnounceMyArrivalRequest = AnnounceMyArrivalRequest.AsObject
export type IAnnounceMyArrivalResponse = AnnounceMyArrivalResponse.AsObject

export type IServeTicketRequest = ServeTicketRequest.AsObject
export type IServeTicketResponse = ServeTicketResponse.AsObject

export type IDiscardTicketRequest = DiscardTicketRequest.AsObject
export type IDiscardTicketResponse = DiscardTicketResponse.AsObject

export type IReturnToQueueRequest = ReturnToQueueRequest.AsObject
export type IReturnToQueueResponse = ReturnToQueueResponse.AsObject

export type IGetTicketsForServingFromLocationRequest =
  GetTicketsForServingFromLocationRequest.AsObject
export type IGetTicketsForServingFromLocationResponse =
  GetTicketsForServingFromLocationResponse.AsObject

export interface ITicketsClient {
  create(request: ICreateTicketRequest): Promise<ICreateTicketResponse>
  getOne(request: IGetTicketRequest): Promise<IGetTicketResponse>
  leave(request: ILeaveTicketRequest): Promise<ILeaveTicketResponse>
  announce(
    request: IAnnounceMyArrivalRequest
  ): Promise<IAnnounceMyArrivalResponse>
  getTicketsBeforeYours(
    request: IGetTicketsBeforeYoursRequest
  ): Promise<IGetTicketsBeforeYoursResponse>
  getTicketsWaitingForService(
    request: IGetTicketsWaitingForServiceRequest
  ): Promise<IGetTicketsWaitingForServiceResponse>
  getTicketsForServingFromLocation(
    request: IGetTicketsForServingFromLocationRequest
  ): Promise<IGetTicketsForServingFromLocationResponse>
  call(request: ICallTicketToDeskRequest): Promise<ICallTicketToDeskResponse>
  serve(request: IServeTicketRequest): Promise<IServeTicketResponse>
  discard(request: IDiscardTicketRequest): Promise<IDiscardTicketResponse>
  returnToQueue(request: IReturnToQueueRequest): Promise<IReturnToQueueResponse>
}
