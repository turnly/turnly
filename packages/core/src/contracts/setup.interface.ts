/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * The interface of services that setup some aspect of the application.
 *
 * @export
 * @interface ISetup
 *
 * @author Turnly
 */
export interface ISetup {
  /**
   * Method in charge of running the operations necessary for setting up
   * the concrete aspect of the application.
   *
   * @memberof ISetup
   */
  setup(): void | Promise<void>
}
