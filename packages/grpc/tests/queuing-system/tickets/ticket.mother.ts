/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  CreateTicketObject,
  Extra,
  GetTicketsWaitingForServiceResponse,
  Ticket,
} from '../../../src/producers/queuing-system'

export class TicketMother {
  private static randomExtra() {
    return ObjectMother.repeater(() => {
      const { key, value } = ObjectMother.extra()

      return new Extra().setKey(key).setValue(value)
    }, 10)
  }

  static randomToObject() {
    return new CreateTicketObject()
      .setCustomerId(ObjectMother.uuid('cust'))
      .setLocationId(ObjectMother.uuid('loc'))
      .setServiceId(ObjectMother.uuid('srv'))
      .setServiceName(ObjectMother.word())
      .setExtrasList(TicketMother.randomExtra())
      .toObject()
  }

  static randomServiceTickets() {
    return new GetTicketsWaitingForServiceResponse.ServiceTickets()
      .setWaitingFor(ObjectMother.uuid('srv'))
      .setTicketsList(ObjectMother.repeater(TicketMother.random, 10))
  }

  static random(): Ticket {
    return new Ticket()
      .setId(ObjectMother.uuid('tkt'))
      .setCustomerId(ObjectMother.uuid('cust'))
      .setLocationId(ObjectMother.uuid('loc'))
      .setServiceId(ObjectMother.uuid('srv'))
      .setDisplayCode(ObjectMother.displayCode('TEST'))
      .setAssigneeId(ObjectMother.uuid('agt'))
      .setPriority('normal')
      .setStatus('booked')
      .setCreatedAt(ObjectMother.word())
      .setExtrasList(TicketMother.randomExtra())
  }
}
