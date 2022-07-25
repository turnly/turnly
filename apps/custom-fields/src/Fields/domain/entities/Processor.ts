/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { ProcessorCreatedEvent } from '../events/ProcessorCreatedEvent'

/**
 * Processor
 *
 * @description A processor is a component that can be used to process data.
 *
 * @author Turnly
 */
export class Processor extends AggregateRoot {
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
     * Organization
     *
     * @description The Organization that the Processor belongs to.
     */
    private readonly organizationId: Guid,

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
  public static create(
    attributes: Omit<EntityAttributes<Processor>, 'id'>
  ): Processor {
    const processor = new Processor(
      Identifier.generate('proc'),
      attributes.name,
      attributes.description,
      attributes.organizationId,
      attributes.url,
      attributes.signature,
      attributes.isActive,
      attributes.lastFiredAt
    )

    processor.register(new ProcessorCreatedEvent(processor.toObject()))

    return processor
  }

  /**
   * Build Processor
   *
   * @description Builds a Processor from an object.
   */
  public static build(attributes: EntityAttributes<Processor>): Processor {
    return new Processor(
      attributes.id,
      attributes.name,
      attributes.description,
      attributes.organizationId,
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
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      organizationId: this.organizationId,
      url: this.url,
      signature: this.signature,
      isActive: this.isActive,
      lastFiredAt: this.lastFiredAt,
    }
  }
}
