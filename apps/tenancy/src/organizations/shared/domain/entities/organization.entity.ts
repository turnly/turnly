/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'

import { OrganizationCreatedEvent } from '../../../create-organization/organization-created.event'
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
    private subdomain: string,

    /**
     * Created At
     *
     * @description The date and time the Organization was created.
     */
    private readonly createdAt: Date,

    /**
     * Update At
     *
     * @description The date and time the Organization was last updated.
     */
    private readonly updatedAt: Date,

    /**
     * Metadata
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Organization.
     */
    private readonly metadata: Extra[] = []
  ) {
    super(id)
  }

  public isActive(): boolean {
    return this.status === OrganizationStatus.ACTIVE
  }

  public isBlocked(): boolean {
    const statuses = [
      OrganizationStatus.BLOCKED,
      OrganizationStatus.PENDING_FOR_APPROVAL,
    ]

    return statuses.includes(this.status)
  }

  /**
   * Create Organization
   *
   * @description Creates a new Organization.
   */
  public static create({
    createdAt = new Date(),
    metadata = [],
    ...attributes
  }: Omit<
    EntityAttributes<Organization>,
    'id' | 'createdAt' | 'updatedAt' | 'metadata'
  > & {
    createdAt?: Date
    metadata?: Extra[]
  }): Organization {
    const organizationId = Identifier.generate('org')

    const organization = new Organization(
      organizationId,
      attributes.name,
      attributes.status,
      attributes.subdomain,
      createdAt,
      createdAt,
      metadata
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
      attributes.subdomain,
      attributes.createdAt,
      attributes.updatedAt,
      attributes.metadata
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
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      metadata: this.metadata,
    }
  }
}
