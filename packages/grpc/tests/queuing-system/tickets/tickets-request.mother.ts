/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  ICreateTicketRequest,
  IGetTicketRequest,
  IGetTicketsWaitingForServiceRequest,
} from '../../../src/consumers/queuing-system'
import { TicketMother } from './ticket.mother'

export class TicketsRequestMother {
  static randomForCreate(): ICreateTicketRequest {
    return {
      ticket: TicketMother.randomToObject(),
    }
  }

  static randomForCreateEmpty(): ICreateTicketRequest {
    return {
      ticket: undefined,
    }
  }

  static randomForGetOne(): IGetTicketRequest {
    return {
      id: ObjectMother.uuid('tkt'),
      customerId: ObjectMother.uuid('cust'),
    }
  }

  static randomForGetOneEmpty(): IGetTicketRequest {
    return {
      id: '',
      customerId: '',
    }
  }

  static randomForGetWaitingForService(): IGetTicketsWaitingForServiceRequest {
    return {
      serviceIdsList: ObjectMother.repeater(() => ObjectMother.uuid('srv'), 10),
      customerId: ObjectMother.uuid('cust'),
    }
  }

  static randomForGetWaitingForServiceEmpty(): IGetTicketsWaitingForServiceRequest {
    return {
      serviceIdsList: [],
      customerId: '',
    }
  }
}
