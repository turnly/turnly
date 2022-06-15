import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { CreateLocationPayload } from '../payloads/CreateLocationPayload'

/**
 * Location
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Location extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Location
     */
    id: Guid,

    /**
     * Company
     *
     * @description The Company that the Location belongs to.
     */
    private readonly companyId: Guid,

    /**
     * Name
     *
     * @description
     */
    private name: string,

    /**
     * Lastname
     *
     * @description A description of the Location.
     */
    private address: string,

    /**
     * Lastname
     *
     * @description A description of the Location.
     */
    private country: string,

    /**
     * Name
     *
     * @description A human-readable name for the Location.
     */
    private latitude: number,

    /**
     * Name
     *
     * @description
     */
    private longitude: number,

    /**
     * Name
     *
     * @description
     */
    private stopServingBeforeInMinutes: number
  ) {
    super(id)
  }

  /**
   * Create Location
   *
   * @description Creates a new Location.
   */
  public static create(attributes: CreateLocationPayload): Location {
    return new Location(
      Identifier.generate('loc'),
      attributes.companyId,
      attributes.name,
      attributes.address,
      attributes.country,
      attributes.latitude,
      attributes.longitude,
      attributes.stopServingBeforeInMinutes
    )
  }

  /**
   * Build Location
   *
   * @description Builds a Location from an object.
   */
  public static build(attributes: EntityAttributes<Location>): Location {
    return new Location(
      attributes.id,
      attributes.companyId,
      attributes.name,
      attributes.address,
      attributes.country,
      attributes.latitude,
      attributes.longitude,
      attributes.stopServingBeforeInMinutes
    )
  }

  /**
   * Location object
   *
   * @description Returns the Location as an object.
   */
  public toObject() {
    return {
      id: this.id,
      companyId: this.companyId,
      name: this.name,
      address: this.address,
      country: this.country,
      latitude: this.latitude,
      longitude: this.longitude,
      stopServingBeforeInMinutes: this.stopServingBeforeInMinutes,
    }
  }
}
