/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Nullable } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { EntityTypes } from 'Answers/domain/enums/EntityType'

import { Answer } from '../../../../src/Answers/domain/entities/Answer'

export class AnswerMother {
  static create(
    value: string = ObjectMother.names(),
    fieldId: string = ObjectMother.word(),
    entityId: string = ObjectMother.word(),
    entityType: EntityTypes = EntityTypes.CUSTOMER,
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = []
  ): Answer {
    return Answer.create({
      value,
      fieldId,
      entityId,
      entityType,
      organizationId,
      extra,
    })
  }

  static random(): Answer {
    return AnswerMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Answer[] {
    return ObjectMother.repeater(AnswerMother.random, max)
  }

  static randomPayload(
    value: string = ObjectMother.names(),
    fieldId: string = ObjectMother.word(),
    entityId: string = ObjectMother.word(),
    entityType: EntityTypes = EntityTypes.CUSTOMER,
    organizationId: Guid = ObjectMother.uuid('org'),
    extra: Nullable<Extra[]> = [ObjectMother.extra(), ObjectMother.extra()]
  ) {
    return {
      value,
      fieldId,
      entityId,
      entityType,
      organizationId,
      extra,
    }
  }

  static randomArrayOfPayload(max = ObjectMother.integer(1)) {
    return ObjectMother.repeater(() => AnswerMother.randomPayload(), max)
  }

  static withExtra(
    extra: Extra[] = [
      ObjectMother.extra(),
      ObjectMother.extra(),
      ObjectMother.extra(),
    ]
  ): Answer {
    return this.create(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      extra
    )
  }
}
