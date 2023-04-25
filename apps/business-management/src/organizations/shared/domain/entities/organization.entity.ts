/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { OrganizationCreatedEvent } from '../../../create-organization/events/organization-created.event'
import { OrganizationStatus } from '../enums/organization-status.enum'

/**
 * Organization
 *
 * @description Represents an customer of the Turnly application.
 *
 * @author Turnly
 */
export class Organization extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Organization
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Organization.
     */
    private name: string,

    /**
     * Status
     *
     * @description The status of the Organization.
     */
    private status: OrganizationStatus,

    /**
     * Subdomain
     *
     * @description The subdomain is a unique identifier for
     * the Organization that is used to access the application.
     */
    private subdomain: string
  ) {
    super(id)
  }

  /**
   * Create Organization
   *
   * @description Creates a new Organization.
   */
  public static create(
    attributes: Omit<EntityAttributes<Organization>, 'id'>
  ): Organization {
    const organizationId = Identifier.generate('org')

    const organization = new Organization(
      organizationId,
      attributes.name,
      attributes.status,
      attributes.subdomain
    )

    organization.register(
      new OrganizationCreatedEvent({
        ...organization.toObject(),
        organizationId,
      })
    )

    return organization
  }

  /**
   * Build Organization
   *
   * @description Builds an Organization from an object.
   */
  public static build(
    attributes: EntityAttributes<Organization>
  ): Organization {
    return new Organization(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.subdomain
    )
  }

  /**
   * Organization object
   *
   * @description Returns the Organization as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      subdomain: this.subdomain,
    }
  }
}
