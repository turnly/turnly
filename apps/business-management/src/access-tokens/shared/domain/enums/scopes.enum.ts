/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum Scopes {
  /***
   * Tickets Scope
   */
  TICKETS_ALL = 'tickets:*',
  TICKETS_READ = 'tickets:read',
  TICKETS_WRITE = 'tickets:write',
  TICKETS_DELETE = 'tickets:delete',
  TICKETS_CREATE = 'tickets:create',
}
