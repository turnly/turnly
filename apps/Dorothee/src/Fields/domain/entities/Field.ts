import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot } from '@turnly/shared'

import { FieldTypes } from '../enums/FieldTypes'
import { Processor } from './Processor'

export interface Attributes {
  id: Guid
  label: string
  description: Nullable<string>
  type: FieldTypes
  entityType: string
  isRequired: boolean
  workspaceId: Guid
  processors: Nullable<Processor[]>
  extra: Nullable<Extra[]>
}

/**
 * Field
 *
 * @description Represents fields that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Field extends AggregateRoot<Attributes> {
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
     * Description
     *
     * @description A human-readable description of the Field.
     */
    private description: Nullable<string>,

    /**
     * Type
     *
     * @description The front-end type of the Field.
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
     * Workspace
     *
     * @description The Workspace that the Field belongs to.
     */
    private readonly workspaceId: Guid,

    /**
     * Processors
     *
     * @description The Processors that the Field can be used with.
     */
    private processors: Nullable<Processor[]> = null,

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
  public static create(attributes: Omit<Attributes, 'id'>): Field {
    return new Field(
      Identifier.generate('fld'),
      attributes.label,
      attributes.description,
      attributes.type,
      attributes.entityType,
      attributes.isRequired,
      attributes.workspaceId,
      attributes.processors,
      attributes.extra
    )
  }

  /**
   * Build Field
   *
   * @description Builds a Field from an object.
   */
  public static build(attributes: Attributes): Field {
    return new Field(
      attributes.id,
      attributes.label,
      attributes.description,
      attributes.type,
      attributes.entityType,
      attributes.isRequired,
      attributes.workspaceId,
      attributes.processors,
      attributes.extra
    )
  }

  /**
   * Field object
   *
   * @description Returns the Field as an object.
   */
  public toObject(): Attributes {
    return {
      id: this.id,
      label: this.label,
      description: this.description,
      type: this.type,
      entityType: this.entityType,
      isRequired: this.isRequired,
      workspaceId: this.workspaceId,
      processors: this.processors,
      extra: this.extra,
    }
  }
}
