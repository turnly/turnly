/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'
import { IntegrationCreatedEvent } from 'integrations/create-integration/events/integration-created.event'

import { IntegrationStatus } from '../enums/integration-status.enum'

/**
 * Integration
 *
 * @description Represent an Integration that is used to connect
 * to a third-party service or applications.
 *
 * @author Turnly
 */
export class Integration extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Integration
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Integration.
     */
    private name: string,

    /**
     * Status
     *
     * @description Represents the life-cycle of an Integration.
     */
    private status: IntegrationStatus,

    /**
     * Origins
     *
     * @description The white-listed origins that are allowed to access the Integration.
     */
    private origins: string[],

    /**
     * Organization
     *
     * @description The Organization that the Integration belongs to.
     */
    private readonly organizationId: Guid
  ) {
    super(id)
  }

  /**
   * Create Integration
   *
   * @description Creates a new Integration.
   */
  public static create(
    attributes: Omit<EntityAttributes<Integration>, 'id'>
  ): Integration {
    const integration = new Integration(
      Identifier.generate('int'),
      attributes.name,
      attributes.status,
      attributes.origins,
      attributes.organizationId
    )

    integration.register(new IntegrationCreatedEvent(integration.toObject()))

    return integration
  }

  /**
   * Build Integration
   *
   * @description Builds an Integration from an object.
   */
  public static build(attributes: EntityAttributes<Integration>): Integration {
    return new Integration(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.origins,
      attributes.organizationId
    )
  }

  /**
   * Integration object
   *
   * @description Returns the Integration as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      origins: this.origins,
      organizationId: this.organizationId,
    }
  }
}
