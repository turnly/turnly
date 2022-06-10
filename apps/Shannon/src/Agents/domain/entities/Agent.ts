import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { CreateAgentPayload } from '../payloads/CreateAgentPayload'

/**
 * Agent
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Agent extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Agent
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Agent.
     */
    private name: string,

    /**
     * Lastname
     *
     * @description A human-readable lastname of the Agent.
     */
    private lastname: string,

    /**
     * Type
     *
     * @description The frontend type of the Agent.
     */
    private nick: Nullable<string>,

    /**
     * Entity Type
     *
     * @description The entity type that the Agent is associated with.
     */
    private readonly position: Nullable<string>,

    /**
     * Company
     *
     * @description The Company that the Agent belongs to.
     */
    private readonly companyId: Guid,

    /**
     * Company
     *
     * @description The Company that the Agent belongs to.
     */
    private readonly deskId: Nullable<string>,

    /**
     * Location
     *
     * @description The Location where the Agent is serving.
     */
    private readonly locationId: Guid,

    /**
     * Service
     *
     * @description The Service that the Agent expects to serve at the Location.
     */
    private readonly servicesId: Guid,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Agent.
     */
    private readonly extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  /**
   * Create Agent
   *
   * @description Creates a new Agent.
   */
  public static create(attributes: CreateAgentPayload): Agent {
    return new Agent(
      Identifier.generate('agt'),
      attributes.name,
      attributes.lastname,
      attributes.nick,
      attributes.position,
      attributes.companyId,
      attributes.deskId,
      attributes.locationId,
      attributes.servicesId,
      attributes.extra
    )
  }

  /**
   * Build Agent
   *
   * @description Builds a Agent from an object.
   */
  public static build(attributes: EntityAttributes<Agent>): Agent {
    return new Agent(
      attributes.id,
      attributes.name,
      attributes.lastname,
      attributes.nick,
      attributes.position,
      attributes.companyId,
      attributes.deskId,
      attributes.locationId,
      attributes.servicesId,
      attributes.extra
    )
  }

  /**
   * Agent object
   *
   * @description Returns the Agent as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      nick: this.nick,
      position: this.position,
      companyId: this.companyId,
      deskId: this.deskId,
      locationId: this.locationId,
      servicesId: this.servicesId,
      extra: this.extra,
    }
  }
}
