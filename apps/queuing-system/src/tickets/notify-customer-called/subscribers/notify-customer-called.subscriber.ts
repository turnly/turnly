/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EventsSubscriber, IEventSubscriber } from '@turnly/shared'
import { NotificationsProvider } from '@turnly/shared'
import { TicketCalledEvent } from 'tickets/create-ticket/events/ticket-called.event'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'

enum Channels {
  SMS = 'notifications.sms',
  WHATSAPP = 'notifications.whatsapp',
}

type Event = TicketCalledEvent

@EventsSubscriber(TicketCalledEvent)
export class NotifyCustomerCalledSubscriber implements IEventSubscriber<Event> {
  public constructor(
    private readonly notificationsProvider: NotificationsProvider
  ) {}

  public async execute(event: Event) {
    const ticket = Ticket.build(event.payload)
    const { sms, whatsapp } = this.getChannelsFromTicket(ticket)

    const message = `Ahoy! Your turn is here. Please go to the desk. Ticket ID: http://localhost:3082/?tly-ticket-id=${event.payload.id}`

    if (sms) await this.notificationsProvider.sms({ to: sms, message })

    if (whatsapp)
      await this.notificationsProvider.whatsapp({ to: whatsapp, message })
  }

  private getChannelsFromTicket(ticket: Ticket) {
    return {
      sms: ticket.getExtra(Channels.SMS),
      whatsapp: ticket.getExtra(Channels.WHATSAPP),
    }
  }
}
