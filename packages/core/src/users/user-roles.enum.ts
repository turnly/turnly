/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * User Roles
 *
 * @enum
 * @author Turnly
 */
export enum UserRoles {
  /**
   * Organization Role
   *
   * @description Can manage the settings for the whole organization,
   * this role cannot be granted to others or removed from the organization of the account.
   */
  ORGANIZATION = 'organization',

  /**
   * Manager Role
   *
   * @description Can manage settings of a single location and see statistics
   * for the whole location, and all agents in that location.
   */
  MANAGER = 'manager',

  /**
   * Agent Role
   *
   * @description Can service customers and see statistics about themselves.
   */
  AGENT = 'agent',
}
