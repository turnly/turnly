import { Extra, Guid, Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'
import { FieldTypes } from 'Fields/domain/enums/FieldTypes'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Field>

export class FieldDTO {
  @MapProp()
  id: Guid

  @MapProp()
  label: string

  @MapProp()
  description: Nullable<string>

  @MapProp()
  type: FieldTypes

  @MapProp()
  entityType: string

  @MapProp()
  isRequired: boolean

  @MapProp()
  workspaceId: Guid

  @MapProp()
  extra: Nullable<Extra[]>

  public static create(entity: Entity): FieldDTO {
    return new Mapper().map(entity, new FieldDTO())
  }

  public static createList(collection: Entity[]): FieldDTO[] {
    return new Mapper().mapList(collection, FieldDTO)
  }
}
