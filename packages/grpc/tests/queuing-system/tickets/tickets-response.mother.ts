/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  CreateTicketResponse,
  GetTicketResponse,
  GetTicketsBeforeYoursResponse,
  GetTicketsWaitingForServiceResponse,
  Meta,
} from '../../../src/producers/queuing-system'
import { TicketMother } from './ticket.mother'

export class TicketsResponseMother {
  static randomForCreate(): CreateTicketResponse {
    const ticket = TicketMother.random()

    return new CreateTicketResponse().setData(ticket)
  }

  static randomForGetOne(): GetTicketResponse {
    const ticket = TicketMother.random()

    return new GetTicketResponse().setData(ticket)
  }

  static randomForGetBeforeYours(): GetTicketsBeforeYoursResponse {
    const tickets = ObjectMother.repeater(TicketMother.random, 10)

    return new GetTicketsBeforeYoursResponse().setDataList(tickets)
  }

  static randomForGetWaitingForService(): GetTicketsWaitingForServiceResponse {
    const tickets = ObjectMother.repeater(TicketMother.randomServiceTickets, 10)

    return new GetTicketsWaitingForServiceResponse().setDataList(tickets)
  }

  static randomForCreateError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): CreateTicketResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new CreateTicketResponse().setMeta(meta)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetTicketResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetTicketResponse().setMeta(meta)
  }

  static randomForGetWaitingForServiceError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetTicketsWaitingForServiceResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetTicketsWaitingForServiceResponse().setMeta(meta)
  }

  static randomForGetBeforeYoursError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetTicketsBeforeYoursResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetTicketsBeforeYoursResponse().setMeta(meta)
  }
}
