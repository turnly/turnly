/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { AgentCreatedEvent } from '../events/AgentCreatedEvent'

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
     * Organization
     *
     * @description The Organization that the Agent belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Location
     *
     * @description The Location where the Agent is serving.
     */
    private readonly locationId: Guid,

    /**
     * Type
     *
     * @description The frontend type of the Agent.
     */
    private nick: Nullable<string> = null,

    /**
     * Entity Type
     *
     * @description The entity type that the Agent is associated with.
     */
    private readonly position: Nullable<string> = null,

    /**
     * Organization
     *
     * @description The Organization that the Agent belongs to.
     */
    private readonly deskId: Nullable<string> = null,

    /**
     * Service
     *
     * @description The Service that the Agent expects to serve at the Location.
     */
    private readonly servingFromIds: Nullable<Guid[]> = null,

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
  public static create(attributes: Omit<EntityAttributes<Agent>, 'id'>): Agent {
    const agent = new Agent(
      Identifier.generate('agent'),
      attributes.name,
      attributes.lastname,
      attributes.organizationId,
      attributes.locationId,
      attributes.nick,
      attributes.position,
      attributes.deskId,
      attributes.servingFromIds,
      attributes.extra
    )

    agent.register(new AgentCreatedEvent(agent.toObject()))

    return agent
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
      attributes.organizationId,
      attributes.locationId,
      attributes.nick,
      attributes.position,
      attributes.deskId,
      attributes.servingFromIds,
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
      organizationId: this.organizationId,
      locationId: this.locationId,
      nick: this.nick,
      position: this.position,
      deskId: this.deskId,
      servingFromIds: this.servingFromIds,
      extra: this.extra,
    }
  }
}
