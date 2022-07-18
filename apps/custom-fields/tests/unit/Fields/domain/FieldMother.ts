/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Field } from '../../../../src/Fields/domain/entities/Field'
import { Processor } from '../../../../src/Fields/domain/entities/Processor'
import { FieldTypes } from '../../../../src/Fields/domain/enums/FieldTypes'

export class FieldMother {
  static create(
    label: string = ObjectMother.names(),
    description: Nullable<string> = ObjectMother.paragraph(),
    type: FieldTypes = FieldTypes.EMAIL,
    entityType: string = ObjectMother.word(),
    isRequired: boolean = ObjectMother.boolean(),
    processors: Nullable<Processor[]> = [],
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Field {
    return Field.create({
      label,
      description,
      type,
      entityType,
      isRequired,
      processors,
      organizationId,
      extra,
    })
  }

  static random(): Field {
    return FieldMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Field[] {
    return ObjectMother.repeater(FieldMother.random, max)
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Field {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
