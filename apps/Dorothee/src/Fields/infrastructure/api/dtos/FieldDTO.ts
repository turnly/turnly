import { EntityAttributes } from '@turnly/core'
import { Guid } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Field>

export class FieldDTO {
  @MapProp()
  id: Guid

  @MapProp()
  label: string

  @MapProp()
  description: string

  @MapProp()
  type: string

  @MapProp()
  entityType: string

  @MapProp()
  serviceId: string

  @MapProp()
  isRequired: boolean

  public static create(entity: Entity): FieldDTO {
    return new Mapper().map(entity, new FieldDTO())
  }

  public static createList(collection: Entity[]): FieldDTO[] {
    return new Mapper().mapList(collection, FieldDTO)
  }
}
