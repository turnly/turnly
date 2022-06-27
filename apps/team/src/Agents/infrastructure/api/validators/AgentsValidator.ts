import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
})

export const validator = {
  get,
}
