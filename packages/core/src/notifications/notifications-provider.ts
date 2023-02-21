/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { phone } from 'phone'

import {
  NotificationParams,
  NotificationResponse,
} from './notifications-response'

export abstract class NotificationsProvider {
  public abstract sms(params: NotificationParams): Promise<NotificationResponse>
  public abstract whatsapp(
    params: NotificationParams
  ): Promise<NotificationResponse>

  public formatPhone(phoneNumber: string, country = 'DO'): string {
    const formatted = phone(phoneNumber, { country }).phoneNumber

    return formatted || ''
  }
}
