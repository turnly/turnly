import { config } from '../../config'

/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export type RabbitMQConfig = {
  uri: string
  queue: string
  exchange: string
}

export const rabbitMQConfig: RabbitMQConfig = Object.freeze({
  uri: config.get('rabbitmq.uri'),
  queue: config.get('rabbitmq.queue'),
  exchange: config.get('rabbitmq.exchange'),
})
