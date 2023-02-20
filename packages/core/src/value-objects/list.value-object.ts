/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BadRequestException } from '@turnly/common'

import { config } from '../config'
import { SharedMessages } from '../constants/SharedMessages'

export class List<T> {
  private readonly counter: number

  public constructor(private readonly content: T[]) {
    this.counter = this.content.length
  }

  public toThrowBatchLimit() {
    if (this.counter > config.get('app.batch_limit'))
      throw new BadRequestException(SharedMessages.BATCH_LIMIT)

    return this
  }

  public getContent() {
    return this.content
  }

  public count() {
    return this.counter
  }
}
