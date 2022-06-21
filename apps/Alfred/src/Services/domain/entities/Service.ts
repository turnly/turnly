import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

/**
 * Service
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Service extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Service
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Service.
     */
    private name: string,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private description: string,

    /**
     * Company
     *
     * @description The Company that the Service belongs to.
     */
    private readonly companyId: Guid,

    /**
     * Location
     *
     * @description The Location that the Service belongs to.
     */
    private readonly locationId: Guid
  ) {
    super(id)
  }

  /**
   * Create Service
   *
   * @description Creates a new Service.
   */
  public static create(
    attributes: Omit<EntityAttributes<Service>, 'id'>
  ): Service {
    return new Service(
      Identifier.generate('srv'),
      attributes.name,
      attributes.description,
      attributes.companyId,
      attributes.locationId
    )
  }

  /**
   * Build Service
   *
   * @description Builds a Service from an object.
   */
  public static build(attributes: EntityAttributes<Service>): Service {
    return new Service(
      attributes.id,
      attributes.name,
      attributes.description,
      attributes.companyId,
      attributes.locationId
    )
  }

  /**
   * Service object
   *
   * @description Returns the Service as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      companyId: this.companyId,
      locationId: this.locationId,
    }
  }
}
