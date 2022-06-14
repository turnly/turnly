import { Validator } from '@turnly/shared'

const searchCustomerFieldsByService = Validator.object({
  serviceId: Validator.isId(),
  companyId: Validator.isId(),
})

export const validator = {
  searchCustomerFieldsByService,
}
