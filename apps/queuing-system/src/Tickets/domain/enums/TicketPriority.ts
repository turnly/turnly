/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Ticket priorities
 *
 * @description Tickets can have different priorities, this enumeration allows you to identify which priority the ticket is in.
 *
 * @enum
 * @author Turnly
 */
export enum TicketPriority {
  /**
   * High
   *
   * @description High priority tickets are usually attended first.
   */
  HIGH = 'high',

  /**
   * Low
   *
   * @description Low priority tickets are usually attended last.
   */
  LOW = 'low',

  /**
   * Normal
   *
   * @description Normal priority tickets are usually attended in the middle.
   */
  NORMAL = 'normal',
}
