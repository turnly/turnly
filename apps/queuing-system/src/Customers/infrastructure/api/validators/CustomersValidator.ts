import { Validator } from '@turnly/shared'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const create = Validator.object({
  name: Validator.string(),
  lastname: Validator.string(),
  email: Validator.email().optional(),
  country: Validator.string().optional(),
  phone: Validator.string(),
  hasWhatsapp: Validator.getBuilder().boolean().optional(),
  showNameSignage: Validator.getBuilder().boolean().optional(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})

const get = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  create,
  get,
}
