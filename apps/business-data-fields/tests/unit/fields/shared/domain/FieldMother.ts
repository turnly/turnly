/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Field } from '../../../../../src/fields/shared/domain/entities/Field'
import { FieldTypes } from '../../../../../src/fields/shared/domain/enums/FieldTypes'

export class FieldMother {
  static create(
    label: string = ObjectMother.names(),
    description: Nullable<string> = ObjectMother.paragraph(),
    placeholder: Nullable<string> = ObjectMother.word(),
    type: FieldTypes = FieldTypes.EMAIL,
    entityType: string = ObjectMother.word(),
    isRequired: boolean = ObjectMother.boolean(),
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Field {
    return Field.create({
      label,
      description,
      placeholder,
      type,
      entityType,
      isRequired,
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
