/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { nanoid } from 'nanoid'

import { generateCode } from '../utilities'

/**
 * Universally unique identifier
 */
export type Guid = string

/**
 * Identifier
 *
 * @description Generate secure friendly unique ID. By default, the ID will have
 * 32 symbols to have a collision probability similar to UUID v4.
 *
 * @author Turnly
 */
export class Identifier {
  /**
   * Sizes
   *
   * @description Resulting string sizes for each type of IDs
   */
  private static readonly sizes = {
    medium: 35,
    normal: 28,
    min: 21,
  }

  /**
   * Generate unique ID
   *
   * @memberof Identifier
   * @param size Size of the ID. The default size is 32.
   */
  public static generate(prefix: string, size = this.sizes.min): Guid {
    return `${prefix}_${nanoid(size)}`
  }

  /**
   * Request ID
   *
   * @description Generate a unique request ID to identify each request made to the API,
   * it is sent in the response headers, and will be sent to Sentry in
   * the event of an error in the request process.
   *
   * This ID has 32 symbols
   *
   * @example
   *
   * ```js
   * Identifier.forRequest() // => 'req_nQH8ad9h...VbKUE'
   * ```
   */
  public static forRequest = (): Guid => this.generate('req')

  /**
   * Domain Event
   *
   * @description Generate a unique event ID to identify each events.
   *
   * This ID has 32 symbols
   *
   * @example
   *
   * ```js
   * Identifier.forEvent() // => 'evt_nQH8ad9h...VbKUE'
   * ```
   */
  public static forEvent = (): Guid => this.generate('evt')

  /**
   * Generate unique visitor name
   *
   * @memberof Identifier
   */
  public static holder(prefix = 'Visitor'): Guid {
    return `${prefix} ${generateCode()}`
  }
}
