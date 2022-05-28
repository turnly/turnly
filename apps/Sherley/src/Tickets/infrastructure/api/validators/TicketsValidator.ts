import { Validator } from '@turnly/shared'

const create = Validator.object({
  serviceId: Validator.isId(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  workspaceId: Validator.isId(),
})

export const validator = {
  create,
}
