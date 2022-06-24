import { Validator } from '@turnly/shared'

const findCustomerFieldsByService = Validator.object({
  serviceId: Validator.isId(),
  companyId: Validator.isId(),
})

export const validator = {
  findCustomerFieldsByService,
}
