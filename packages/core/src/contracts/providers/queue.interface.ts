/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueueMessage } from 'value-objects/queue-message.value-object'

export type QueueOptions = {
  name: string
  messageGroupId: string
  messageBody: string
}

export type EnqueueOpts = {
  queue: QueueOptions
}

/**
 * Queue
 *
 * @description Interface to be implemented by any queue provider.
 * @author Turnly
 */
export interface IQueue {
  send(message: QueueMessage, options: EnqueueOpts): Promise<void>
  receive(options: EnqueueOpts): Promise<QueueMessage>
  acknowledge({ queueUrl, messageId }: QueueMessage): Promise<void>
}
