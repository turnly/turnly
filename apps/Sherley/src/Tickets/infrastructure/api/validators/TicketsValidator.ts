import { Validator } from '@turnly/core'

const create = Validator.object({
  serviceId: Validator.isId(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  workspaceId: Validator.isId(),
})

export const validator = {
  create,
}
