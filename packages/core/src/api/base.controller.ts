/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

/**
 * Base class for controllers.
 *
 * @author Turnly
 */
export abstract class Controller {
  /**
   * HTTP Responses
   *
   * @description All routes and controllers should return a response to be sent back to the user's browser.
   * This controller provides an object with several different ways to return responses related to HTTP codes.
   *
   * @memberof Controller
   * @instance Response
   *
   * @example
   *
   * this.respond.ok()
   * this.respond.created()
   * this.respond.notFound()
   * this.respond.forbidden()
   */
  protected readonly respond = Response
}
