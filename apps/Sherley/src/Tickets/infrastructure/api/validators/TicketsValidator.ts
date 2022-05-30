import { Validator } from '@turnly/shared'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const create = Validator.object({
  serviceId: Validator.isId(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  companyId: Validator.isId(),
  extra: Validator.getBuilder()
    .alternatives()
    .try(extra, Validator.array(extra)),
})

export const validator = {
  create,
}
