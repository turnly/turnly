import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { CreateServicePayload } from '../payloads/CreateServicePayload'

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
     * Company
     *
     * @description The Company that the Service belongs to.
     */
    private readonly companyId: Guid,

    /**
     * Company
     *
     * @description The Location that the Service belongs to.
     */
    private readonly locationId: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Service.
     */
    private name: string,

    /**
     * Lastname
     *
     * @description A description of the Service.
     */
    private description: string
  ) {
    super(id)
  }

  /**
   * Create Service
   *
   * @description Creates a new Service.
   */
  public static create(attributes: CreateServicePayload): Service {
    return new Service(
      Identifier.generate('srv'),
      attributes.companyId,
      attributes.locationId,
      attributes.name,
      attributes.description
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
      attributes.companyId,
      attributes.locationId,
      attributes.name,
      attributes.description
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
      companyId: this.companyId,
      locationId: this.locationId,
      name: this.name,
      description: this.description,
    }
  }
}
