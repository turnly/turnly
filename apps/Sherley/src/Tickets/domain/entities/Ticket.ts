import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot } from '@turnly/shared'

import { TicketStatus } from '../enums/TicketStatus'
import { TicketCreatedEvent } from '../events/TicketCreatedEvent'
import { CreateTicketPayload } from '../payloads/CreateTicketPayload'

export interface Attributes {
  id: Guid
  status: TicketStatus
  displayCode: string
  serviceId: Guid
  locationId: Guid
  customerId: Guid
  workspaceId: Guid
  assignedToId: Nullable<Guid>
  createdAt: Date
  extra: Nullable<Extra[]>
}

/**
 * Ticket
 *
 * @description Represent a Customer's single visit to a "Location".
 * A Ticket is created every time a Customer is added to the queue using the Integration.
 *
 * @author Turnly
 */
export class Ticket extends AggregateRoot<Attributes> {
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
     * Workspace
     *
     * @description The Workspace that the Ticket belongs to.
     */
    private readonly workspaceId: Guid,

    /**
     * Assigned To
     *
     * @description The Agent that is currently assigned to the Ticket.
     */
    private assignedToId: Nullable<Guid>,

    /**
     * Created At
     *
     * @description The date and time the Ticket was created.
     */
    private readonly createdAt: Date,

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
    const status = TicketStatus.BOOKED
    const id = Identifier.generate('tk')

    /**
     * @todo Create functionality to generate display code
     */
    const displayCode = Date.now().toString()

    const ticket = new Ticket(
      id,
      status,
      displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.workspaceId,
      null,
      new Date(),
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
  public static build(attributes: Attributes): Ticket {
    return new Ticket(
      attributes.id,
      attributes.status,
      attributes.displayCode,
      attributes.serviceId,
      attributes.locationId,
      attributes.customerId,
      attributes.workspaceId,
      attributes.assignedToId,
      attributes.createdAt,
      attributes.extra
    )
  }

  /**
   * Ticket object
   *
   * @description Returns the Ticket as an object.
   */
  public toObject(): Attributes {
    return {
      id: this.id,
      status: this.status,
      displayCode: this.displayCode,
      serviceId: this.serviceId,
      locationId: this.locationId,
      customerId: this.customerId,
      workspaceId: this.workspaceId,
      assignedToId: this.assignedToId,
      createdAt: this.createdAt,
      extra: this.extra,
    }
  }
}
