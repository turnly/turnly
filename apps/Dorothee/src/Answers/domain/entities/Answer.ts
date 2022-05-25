import { AggregateRoot } from '@turnly/core'
import { Guid, Identifier } from '@turnly/shared'

export interface Attributes {
  id: Guid
  value: string
  fieldId: string
  entityId: string
  entityType: string
  serviceId: string
  metadata?: object
}

export class Answer extends AggregateRoot<Attributes> {
  protected constructor(
    id: Guid,
    private value: string,
    private fieldId: string,
    private entityId: string,
    private entityType: string,
    private serviceId: string,
    private metadata?: object
  ) {
    super(id)
  }

  public static create(attributes: Omit<Attributes, 'id'>): Answer {
    return new Answer(
      Identifier.generate('tkt'),
      attributes.value,
      attributes.fieldId,
      attributes.entityId,
      attributes.entityType,
      attributes.serviceId,
      attributes.metadata
    )
  }

  public static build(attributes: Attributes): Answer {
    return new Answer(
      attributes.id,
      attributes.value,
      attributes.fieldId,
      attributes.entityId,
      attributes.entityType,
      attributes.serviceId,
      attributes.metadata
    )
  }

  public toObject(): Attributes {
    return {
      id: this.id,
      value: this.value,
      fieldId: this.fieldId,
      entityId: this.entityId,
      entityType: this.entityType,
      serviceId: this.serviceId,
      metadata: this.metadata,
    }
  }
}
