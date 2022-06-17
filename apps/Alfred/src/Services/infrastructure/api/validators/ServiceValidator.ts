import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
  companyId: Validator.isId(),
})

const getServicesByLocation = Validator.object({
  locationId: Validator.isId(),
  companyId: Validator.isId(),
})

export const validator = {
  get,
  getServicesByLocation,
}
