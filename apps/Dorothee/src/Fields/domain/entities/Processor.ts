import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot } from '@turnly/shared'

export interface Attributes {
  id: Guid
  name: string
  description: Nullable<string>
  companyId: Guid
  url: string
  signature: string
  isActive: boolean
  lastFiredAt: Nullable<Date>
}

/**
 * Processor
 *
 * @description Represents fields that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Processor extends AggregateRoot<Attributes> {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Processor
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Processor.
     */
    private name: string,

    /**
     * Description
     *
     * @description A human-readable description of the Processor.
     */
    private description: Nullable<string>,

    /**
     * Company
     *
     * @description The Company that the Processor belongs to.
     */
    private readonly companyId: Guid,

    /**
     * URL
     *
     * @description The URL of the lambda function or API endpoint that will be used to call the Processor.
     */
    private url: string,

    /**
     * Signature
     *
     * @description The signature is used to validate calls to the Processor.
     */
    private readonly signature: string,

    /**
     * Active Status
     *
     * @description Whether the Processor is active or not.
     */
    private isActive: boolean = true,

    /**
     * Last Fired At
     *
     * @description The date and time when the Processor was last fired.
     */
    private lastFiredAt: Nullable<Date> = null
  ) {
    super(id)
  }

  /**
   * Create Processor
   *
   * @description Creates a new Processor.
   */
  public static create(attributes: Omit<Attributes, 'id'>): Processor {
    return new Processor(
      Identifier.generate('pr'),
      attributes.name,
      attributes.description,
      attributes.companyId,
      attributes.url,
      attributes.signature,
      attributes.isActive,
      attributes.lastFiredAt
    )
  }

  /**
   * Build Processor
   *
   * @description Builds a Processor from an object.
   */
  public static build(attributes: Attributes): Processor {
    return new Processor(
      attributes.id,
      attributes.name,
      attributes.description,
      attributes.companyId,
      attributes.url,
      attributes.signature,
      attributes.isActive,
      attributes.lastFiredAt
    )
  }

  /**
   * Processor object
   *
   * @description Returns the Processor as an object.
   */
  public toObject(): Attributes {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      companyId: this.companyId,
      url: this.url,
      signature: this.signature,
      isActive: this.isActive,
      lastFiredAt: this.lastFiredAt,
    }
  }
}
