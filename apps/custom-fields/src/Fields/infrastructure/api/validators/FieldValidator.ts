import { Validator } from '@turnly/shared'

const findCustomerFieldsByService = Validator.object({
  serviceId: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  findCustomerFieldsByService,
}
