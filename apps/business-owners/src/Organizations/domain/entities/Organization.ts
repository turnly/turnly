import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { OrganizationStatus } from '../enums/OrganizationStatus'

/**
 * Organization
 *
 * @description Represent an Organization that is used to connect
 * to a third-party service or applications.
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
     * @description Represents the life-cycle of an Organization.
     */
    private status: OrganizationStatus,

    /**
     * Sub-Domain
     *
     * @description The sub-domain of the organization.
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
    return new Organization(
      Identifier.generate('int'),
      attributes.name,
      attributes.status,
      attributes.subdomain
    )
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
