/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Customer } from 'customers/shared/domain/entities/customer.entity'

export class CustomersMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Customer>> | undefined
  ): Producers.QueuingSystem.Customer {
    const customer = new Producers.QueuingSystem.Customer()

    if (entity) {
      customer.setId(entity.id)
      customer.setName(entity.name)
      if (entity.lastname) customer.setLastname(entity.lastname)

      if (entity.email) customer.setEmail(entity.email)

      if (entity.phone) customer.setPhone(entity.phone)
      if (entity.country) customer.setCountry(entity.country)
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
