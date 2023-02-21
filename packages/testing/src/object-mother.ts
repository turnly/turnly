/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
    return Number(ObjectMother.creator().string.numeric(max))
  }

  static repeater<D>(callable: () => D, iterations: number) {
    return Array(iterations || ObjectMother.integer(12))
      .fill({})
      .map(() => callable())
  }

  static coords() {
    return {
      lat: ObjectMother.creator().location.latitude(),
      lng: ObjectMother.creator().location.longitude(),
    }
  }

  static coordsArray() {
    const { lat, lng } = ObjectMother.coords()

    return [lng, lat]
  }

  static address() {
    return {
      street: ObjectMother.creator().location.streetAddress(),
      city: ObjectMother.creator().location.city(),
      state: ObjectMother.creator().location.state(),
      zip: ObjectMother.creator().location.zipCode(),
      country: ObjectMother.creator().location.country(),
    }
  }

  static fullAddress(): string {
    return ObjectMother.creator().location.streetAddress()
  }

  static phone(): string {
    return ObjectMother.creator().phone.number()
  }

  static email(): string {
    return ObjectMother.creator().internet.email()
  }

  static names(): string {
    return ObjectMother.creator().person.firstName()
  }

  static date(): Date {
    return ObjectMother.creator().date.future()
  }

  static paragraph(max = 1): string {
    return ObjectMother.creator().lorem.paragraph(max)
  }

  static position(): string {
    return ObjectMother.creator().person.jobTitle()
  }

  static url(): string {
    return ObjectMother.creator().internet.url()
  }

  static image(): string {
    return ObjectMother.creator().image.url()
  }

  static displayCode(prefix: string): string {
    return `${prefix}-${this.integer(3)}`
  }

  static extra(): Extra {
    return {
      key: ObjectMother.creator().database.column(),
      value: ObjectMother.names(),
    }
  }

  static boolean(): boolean {
    return ObjectMother.creator().datatype.boolean()
  }

  static json(): object {
    return JSON.parse(ObjectMother.creator().datatype.json())
  }

  static lastname(): string {
    return ObjectMother.creator().person.lastName()
  }

  static firstname(): string {
    return ObjectMother.creator().person.firstName()
  }

  static string(): string {
    return ObjectMother.creator().lorem.word()
  }
}
