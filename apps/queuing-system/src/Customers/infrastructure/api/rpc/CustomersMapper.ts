/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'

export class CustomerMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Customer>> | undefined
  ): Producers.QueuingSystem.Customer {
    const customer = new Producers.QueuingSystem.Customer()

    if (entity) {
      customer.setId(entity.id)
      customer.setName(entity.name)
      customer.setLastname(entity.lastname)

      if (entity.email) customer.setEmail(entity.email)

      customer.setPhone(entity.phone)
      customer.setCountry(entity.country)
      customer.setHasWhatsapp(entity.hasWhatsapp)
      customer.setShowNameSignage(entity.showNameSignage)

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.QueuingSystem.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        customer.setExtrasList(extras)
      }
    }

    return customer
  }
}
