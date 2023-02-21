/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Twilio } from 'twilio'

import { config } from '../config'
import { NotificationsProvider } from './notifications-provider'
import {
  NotificationParams,
  NotificationResponse,
} from './notifications-response'

export class TwilioNotificationsProvider extends NotificationsProvider {
  private readonly _t: Twilio

  public constructor() {
    super()

    this._t = new Twilio(config.get('twilio.sid'), config.get('twilio.token'))
  }

  public async sms(params: NotificationParams): Promise<NotificationResponse> {
    return this.send(params)
  }

  public async whatsapp(
    params: NotificationParams
  ): Promise<NotificationResponse> {
    return this.send(params, true)
  }

  private async send(
    params: NotificationParams,
    isWhatsApp = false
  ): Promise<NotificationResponse> {
    const from = isWhatsApp
      ? `whatsapp:${config.get('twilio.phone_number')}`
      : config.get('twilio.phone_number')

    const phoneNumber = this.formatPhone(params.to)

    const {
      sid: id,
      to,
      price,
      priceUnit,
      status,
    } = await this._t.messages.create({
      body: params.message,
      from,
      to: isWhatsApp ? `whatsapp:${phoneNumber}` : phoneNumber,
    })

    return { id, to, price, priceUnit, status }
  }
}
