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
   * Bad
   *
   * @description The Customer is not happy with the service, and the service should be improved.
   */
  BAD = 'bad',

  /**
   * Not Good
   *
   * @description The Customer is not happy with the service but not bad.
   */
  NOT_GOOD = 'not_good',

  /**
   * Good
   *
   * @description The Customer is ok with the service.
   */
  GOOD = 'good',

  /**
   * Very Good
   *
   * @description The Customer is happy with the service.
   */
  VERY_GOOD = 'very_good',

  /**
   * Excellent
   *
   * @description The Customer had a great experience and feels great about the service.
   */
  EXCELLENT = 'excellent',
}
