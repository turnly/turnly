/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Faker, faker } from '@faker-js/faker'
import { Extra, Identifier } from '@turnly/common'

/**
 * Mother Object
 *
 * @description Mother Object for all domain objects
 * @see https://martinfowler.com/bliki/ObjectMother.html
 */
export abstract class MotherObject {
  static creator(): Faker {
    return faker
  }

  static uuid(prefix: string): string {
    return Identifier.generate(`test_${prefix}`)
  }

  static word(): string {
    return MotherObject.creator().random.word()
  }

  static integer(max: number): number {
    return Number(MotherObject.creator().random.numeric(max))
  }

  static repeater(callable: Function, iterations: number) {
    return Array(iterations || MotherObject.integer(12))
      .fill({})
      .map(() => callable())
  }

  static coords() {
    return {
      lat: MotherObject.creator().address.latitude(),
      lng: MotherObject.creator().address.longitude(),
    }
  }

  static address() {
    return {
      street: MotherObject.creator().address.streetAddress(),
      city: MotherObject.creator().address.city(),
      state: MotherObject.creator().address.state(),
      zip: MotherObject.creator().address.zipCode(),
      country: MotherObject.creator().address.country(),
    }
  }

  static phone(): string {
    return MotherObject.creator().phone.number()
  }

  static email(): string {
    return MotherObject.creator().internet.email()
  }

  static names(): string {
    return MotherObject.creator().name.findName()
  }

  static date(): Date {
    return MotherObject.creator().date.future()
  }

  static paragraph(): string {
    return MotherObject.creator().lorem.paragraph()
  }

  static position(): string {
    return MotherObject.creator().name.jobTitle()
  }

  static url(): string {
    return MotherObject.creator().internet.url()
  }

  static image(): string {
    return MotherObject.creator().image.imageUrl()
  }

  static displayCode(prefix: string): string {
    return `${prefix}-${this.integer(2)}`
  }

  static extra(): Extra {
    return {
      key: MotherObject.creator().database.column(),
      value: MotherObject.names(),
    }
  }
}
