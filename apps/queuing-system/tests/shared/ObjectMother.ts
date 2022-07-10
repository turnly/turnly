/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Faker, faker } from '@faker-js/faker'
import { Extra, Identifier } from '@turnly/common'

/**
 * Object Mother
 *
 * @description Object Mother for all domain objects
 * @see https://martinfowler.com/bliki/ObjectMother.html
 */
export abstract class ObjectMother {
  static creator(): Faker {
    return faker
  }

  static uuid(prefix: string): string {
    return Identifier.generate(`test_${prefix}`)
  }

  static word(): string {
    return ObjectMother.creator().random.word()
  }

  static integer(max: number): number {
    return Number(ObjectMother.creator().random.numeric(max))
  }

  static repeater(callable: Function, iterations: number) {
    return Array(iterations || ObjectMother.integer(12))
      .fill({})
      .map(() => callable())
  }

  static coords() {
    return {
      lat: ObjectMother.creator().address.latitude(),
      lng: ObjectMother.creator().address.longitude(),
    }
  }

  static address() {
    return {
      street: ObjectMother.creator().address.streetAddress(),
      city: ObjectMother.creator().address.city(),
      state: ObjectMother.creator().address.state(),
      zip: ObjectMother.creator().address.zipCode(),
      country: ObjectMother.creator().address.country(),
    }
  }

  static phone(): string {
    return ObjectMother.creator().phone.number()
  }

  static email(): string {
    return ObjectMother.creator().internet.email()
  }

  static names(): string {
    return ObjectMother.creator().name.findName()
  }

  static date(): Date {
    return ObjectMother.creator().date.future()
  }

  static paragraph(): string {
    return ObjectMother.creator().lorem.paragraph()
  }

  static position(): string {
    return ObjectMother.creator().name.jobTitle()
  }

  static url(): string {
    return ObjectMother.creator().internet.url()
  }

  static image(): string {
    return ObjectMother.creator().image.imageUrl()
  }

  static displayCode(prefix: string): string {
    return `${prefix}-${this.integer(2)}`
  }

  static extra(): Extra {
    return {
      key: ObjectMother.creator().database.column(),
      value: ObjectMother.names(),
    }
  }
}
