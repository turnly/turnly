/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'
import { FieldCreatedEvent } from 'efields/CreateField/events/FieldCreatedEvent'

import { FieldTypes } from '../enums/FieldTypes'

/**
 * Field
 *
 * @description Represents fields that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Field extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Field
     */
    id: Guid,

    /**
     * Label
     *
     * @description A human-readable name for the Field.
     */
    private label: string,

    /**
     * Placeholder
     *
     * @description A placeholder for the filed.
     */
    private placeholder: Nullable<string>,

    /**
     * Description
     *
     * @description A human-readable description of the Field.
     */
    private description: Nullable<string>,

    /**
     * Type
     *
     * @description The frontend type of the Field.
     */
    private readonly type: FieldTypes,

    /**
     * Entity Type
     *
     * @description The entity type that the Field is associated with.
     */
    private readonly entityType: string,

    /**
     * Required
     *
     * @description Whether the Field is required or not.
     */
    private isRequired: boolean = false,

    /**
     * Organization
     *
     * @description The Organization that the Field belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Field.
     */
    private readonly extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  /**
   * Create Field
   *
   * @description Creates a new Field.
   */
  public static create(attributes: Omit<EntityAttributes<Field>, 'id'>): Field {
    const field = new Field(
      Identifier.generate('field'),
      attributes.label,
      attributes.description,
      attributes.placeholder,
      attributes.type,
      attributes.entityType,
      attributes.isRequired,
      attributes.organizationId,
      attributes.extra
    )

    field.register(new FieldCreatedEvent(field.toObject()))

    return field
  }

  /**
   * Build Field
   *
   * @description Builds a Field from an object.
   */
  public static build(attributes: EntityAttributes<Field>): Field {
    return new Field(
      attributes.id,
      attributes.label,
      attributes.description,
      attributes.placeholder,
      attributes.type,
      attributes.entityType,
      attributes.isRequired,
      attributes.organizationId,
      attributes.extra
    )
  }

  /**
   * Field object
   *
   * @description Returns the Field as an object.
   */
  public toObject() {
    return {
      id: this.id,
      label: this.label,
      description: this.description,
      placeholder: this.placeholder,
      type: this.type,
      entityType: this.entityType,
      isRequired: this.isRequired,
      organizationId: this.organizationId,
      extra: this.extra,
    }
  }
}
