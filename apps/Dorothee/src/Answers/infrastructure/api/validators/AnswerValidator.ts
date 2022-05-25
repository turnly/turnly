import { Validator } from '@turnly/core'

const create = Validator.object({
  serviceId: Validator.isId(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  metadata: Validator.getBuilder().object().optional(),
})

export const validator = {
  create,
}
