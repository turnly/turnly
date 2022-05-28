import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot } from '@turnly/shared'

import { FieldTypes } from '../enums/FieldTypes'

export interface Attributes {
  id: Guid
  label: string
  description: string
  type: FieldTypes
  entityType: string
  serviceId: string
  isRequired: boolean
}

export class Field extends AggregateRoot<Attributes> {
  protected constructor(
    id: Guid,
    private label: string,
    private description: string,
    private type: FieldTypes,
    private entityType: string,
    private serviceId: string,
    private isRequired: boolean
  ) {
    super(id)
  }

  public static create(attributes: Omit<Attributes, 'id'>): Field {
    return new Field(
      Identifier.generate('fld'),
      attributes.label,
      attributes.description,
      attributes.type,
      attributes.entityType,
      attributes.serviceId,
      attributes.isRequired
    )
  }

  public static build(attributes: Attributes): Field {
    return new Field(
      attributes.id,
      attributes.label,
      attributes.description,
      attributes.type,
      attributes.entityType,
      attributes.serviceId,
      attributes.isRequired
    )
  }

  public toObject(): Attributes {
    return {
      id: this.id,
      label: this.label,
      description: this.description,
      type: this.type,
      entityType: this.entityType,
      serviceId: this.serviceId,
      isRequired: this.isRequired,
    }
  }
}
