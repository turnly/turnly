/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { BadRequestException } from '@turnly/observability'

import { FeatureTypes } from '../enums/feature-types.enum'
import { FeatureUnits } from '../enums/feature-units.enum'

/**
 * Feature
 *
 * @description Similar to Permissions, represents a Feature of your SaaS application that your Organizations or Groups can access.
 *
 * @author Turnly
 */
export class Feature extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Feature
     */
    id: Guid,

    /**
     * Name
     *
     * @description The human-readable name of the feature. Used for display purposes.
     */
    private name: string,

    /**
     * Key
     *
     * @description The key of the feature. This is used to identify the feature.
     * The key must be unique within the tenancy.
     *
     * @example "turnly:features:locations"
     */
    private key: string,

    /**
     * Type
     *
     * @description The type of the feature (e.g. "normal", "quantifiable", etc).
     */
    private type: FeatureTypes,

    /**
     * Quantity
     *
     * @description If the feature is quantifiable you can specify the quantity here.
     */
    private quantity: number,

    /**
     * Unit
     *
     * @description The unit of the quantity. This is useful for features with a limited quantity.
     * For example, monthly, yearly, etc.
     */
    private unit: FeatureUnits,

    /**
     * Created At
     *
     * @description The date and time the Feature was created.
     */
    private readonly createdAt: Date,

    /**
     * Update At
     *
     * @description The date and time the Feature was last updated.
     */
    private readonly updatedAt: Date,

    /**
     * Metadata
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Feature.
     */
    private readonly metadata: Extra[] = []
  ) {
    super(id)
  }

  /**
   * Create Feature
   *
   * @description Creates a new Feature.
   */
  public static create({
    createdAt = new Date(),
    metadata = [],
    ...attributes
  }: Omit<
    EntityAttributes<Feature>,
    'id' | 'createdAt' | 'updatedAt' | 'metadata'
  > & {
    createdAt?: Date
    metadata?: Extra[]
  }): Feature {
    if (!Object.values(FeatureTypes).includes(attributes.type)) {
      throw new BadRequestException(
        'Oops! You are trying to create a Feature with an invalid type.'
      )
    }

    if (!Object.values(FeatureUnits).includes(attributes.unit)) {
      throw new BadRequestException(
        'Oops! You are trying to create a Feature with an invalid unit.'
      )
    }

    return new Feature(
      Identifier.generate('feat'),
      attributes.name,
      attributes.key,
      attributes.type,
      attributes.quantity,
      attributes.unit,
      createdAt,
      createdAt,
      metadata
    )
  }

  /**
   * Build Feature
   *
   * @description Builds an Feature from an object.
   */
  public static build(attributes: EntityAttributes<Feature>): Feature {
    return new Feature(
      attributes.id,
      attributes.name,
      attributes.key,
      attributes.type,
      attributes.quantity,
      attributes.unit,
      attributes.createdAt,
      attributes.updatedAt,
      attributes.metadata
    )
  }

  /**
   * Feature object
   *
   * @description Returns the Feature as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      key: this.key,
      type: this.type,
      quantity: this.quantity,
      unit: this.unit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      metadata: this.metadata,
    }
  }
}
