/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Ticket scores
 *
 * @description Tickets can have different scores, this enumeration allows you to identify which score the ticket is in.
 *
 * @enum
 * @author Turnly
 */
export enum TicketScore {
  /**
   * Very poor
   *
   * @description The Customer is not happy with the service, and the service is not working as expected.
   */
  VERY_POOR = 'very_poor',

  /**
   * Poor
   *
   * @description The Customer is not happy with the service, and the service should be improved.
   */
  POOR = 'poor',

  /**
   * Good
   *
   * @description The Customer is ok with the service.
   */
  GOOD = 'good',

  /**
   * Great
   *
   * @description The Customer is very happy with the service.
   */
  GREAT = 'great',

  /**
   * Excellent
   *
   * @description The Customer had a great experience and feels great about the service.
   */
  EXCELLENT = 'excellent',
}
