/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export type NotificationParams = {
  to: string
  message: string
}

export type NotificationRequest = {
  (params: NotificationParams): Promise<NotificationResponse>
}

export type NotificationResponse = {
  id: string
  to: string
  price: string
  priceUnit: string
  status: string
}
