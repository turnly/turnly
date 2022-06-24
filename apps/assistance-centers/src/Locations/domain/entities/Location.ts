import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

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
     * Name
     *
     * @description The name of the Location.
     */
    private name: string,

    /**
     * Address
     *
     * @description The address of the Location.
     */
    private address: string,

    /**
     * Country
     *
     * @description The country of the Location.
     */
    private country: string,

    /**
     * Coordinates
     *
     * @description The coordinates of the Location.
     */
    private coordinates: {
      lat: number
      lng: number
    },

    /**
     * Stop Serving Before
     *
     * @description The time in minutes before the Location stops serving.
     */
    private stopServingBeforeInMinutes: number,

    /**
     * Company
     *
     * @description The Company that the Location belongs to.
     */
    private readonly companyId: Guid
  ) {
    super(id)
  }

  /**
   * Create Location
   *
   * @description Creates a new Location.
   */
  public static create(
    attributes: Omit<EntityAttributes<Location>, 'id'>
  ): Location {
    return new Location(
      Identifier.generate('loc'),
      attributes.companyId,
      attributes.name,
      attributes.address,
      attributes.coordinates,
      attributes.stopServingBeforeInMinutes,
      attributes.country
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
      attributes.coordinates,
      attributes.stopServingBeforeInMinutes,
      attributes.country
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
      name: this.name,
      address: this.address,
      country: this.country,
      coordinates: this.coordinates,
      companyId: this.companyId,
      stopServingBeforeInMinutes: this.stopServingBeforeInMinutes,
    }
  }
}
