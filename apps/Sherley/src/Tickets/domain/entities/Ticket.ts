import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { TicketPriority } from '../enums/TicketPriority'
import { TicketScore } from '../enums/TicketScore'
import { TicketStatus } from '../enums/TicketStatus'
import { TicketCreatedEvent } from '../events/TicketCreatedEvent'
import { CreateTicketPayload } from '../payloads/CreateTicketPayload'

/**
 * Ticket
 *
 * @description Represent a Customer's single visit to a "Location".
 * A Ticket is created every time a Customer is added to the queue using the Integration.
 *
 * @author Turnly
 */
export class Ticket extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Ticket
     */
    id: Guid,

    /**
     * Status
     *
     * @description Represents the life-cycle of a Ticket.
     */
    private status: TicketStatus,

    /**
     * Priority
     *
     * @description Represents the priority of a Ticket.
     */
    private readonly priority: TicketPriority,

    /**
     * Display Code
     *
     * @description A unique code that is used to display the Ticket in the UI.
     */
    private readonly displayCode: string,

    /**
     * Service
     *
     * @description The Service that the Customer expects to be served at the Location.
     */
    private readonly serviceId: Guid,

    /**
     * Location
     *
     * @description The Location where the Customer is being attended.
     */
    private readonly locationId: Guid,

    /**
     * Customer
     *
     * @description The Customer about to visit the Location.
     */
    private readonly customerId: Guid,

    /**
     * Company
     *
     * @description The Company that the Ticket belongs to.
     */
    private readonly companyId: Guid,

    /**
     * Assigned To
     *
     * @description The Agent that is currently assigned to the Ticket.
     */
    private assigneeId: Nullable<Guid>,

    /**
     * Created At
     *
     * @description The date and time the Ticket was created.
     */
    private readonly createdAt: Date,

    /**
     * Rating
     *
     * @description The Customer's rating for the experience at the Location.
     */
    private rating?: Nullable<{
      score: TicketScore
      comment: Nullable<string>
    }>,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Ticket.
     */
    private readonly extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  /**
   * Create Ticket
   *
   * @description Creates a new Ticket.
   */
  public static create(attributes: CreateTicketPayload): Ticket {
    const ticket = new Ticket(
      Identifier.generate('tk'),
      attributes.status,
      attributes.priority,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.companyId,
      null,
      new Date(),
      null,
      attributes.extra
    )

    ticket.register(new TicketCreatedEvent(ticket.toObject()))

    return ticket
  }

  /**
   * Build Ticket
   *
   * @description Builds a Ticket from an object.
   */
  public static build(attributes: EntityAttributes<Ticket>): Ticket {
    return new Ticket(
      attributes.id,
      attributes.status,
      attributes.priority,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.companyId,
      attributes.assigneeId,
      attributes.createdAt,
      attributes.rating,
      attributes.extra
    )
  }

  /**
   * Ticket object
   *
   * @description Returns the Ticket as an object.
   */
  public toObject() {
    return {
      id: this.id,
      status: this.status,
      priority: this.priority,
      displayCode: this.displayCode,
      serviceId: this.serviceId,
      locationId: this.locationId,
      customerId: this.customerId,
      companyId: this.companyId,
      assigneeId: this.assigneeId,
      createdAt: this.createdAt,
      rating: this.rating,
      extra: this.extra,
    }
  }
}
